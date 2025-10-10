document.addEventListener('DOMContentLoaded', function () {
    // Находим элемент input type="hidden"
    const input = document.querySelector('input[type="hidden"].buyers_json_data');
    if (!input) {
        console.error("Элемент input.buyers_json_data не найден");
        return;
    }

    let jsonData;
    try {
        // Получаем JSON из value
        jsonData = JSON.parse(input.value);
    } catch (e) {
        console.error("Ошибка при парсинге JSON:", e);
        return;
    }

    // Проверяем структуру данных
    if (!jsonData || typeof jsonData !== 'object') {
        console.error("JSON не является объектом", jsonData);
        return;
    }

    console.log("Исходные данные:", jsonData);

    // Преобразуем объект в массив объектов
    const resultArray = Object.entries(jsonData).map(([name, data]) => {
        return {
            name: name,
            scale: data.scale,
            regions: data.regions,
            logo: data.logo
        };
    });

    console.log("Преобразованный массив:", resultArray);

    // Инициализируем систему фильтрации
    initFilterSystem(resultArray);

    // Ждем появления категорий после выбора в select
    initCategoryObserver();

    return resultArray;
});

// НОВАЯ ФУНКЦИЯ: Наблюдатель за появлением категорий
function initCategoryObserver() {
    console.log('Запуск наблюдателя за категориями...');

    // Наблюдаем за изменениями в DOM
    const observer = new MutationObserver(function (mutations) {
        for (let mutation of mutations) {
            if (mutation.type === 'childList') {
                // Проверяем, появились ли категории
                const categoryGroups = document.querySelectorAll('.group');
                const hasCategories = Array.from(categoryGroups).some(group =>
                    group.querySelectorAll('.cat').length > 0
                );

                if (hasCategories) {
                    console.log('Категории обнаружены!');
                    observer.disconnect(); // Останавливаем наблюдение

                    // Создаем контейнер для поиска
                    createCategorySearchContainer();

                    // Инициализируем поиск
                    initCategorySearch();

                    break;
                }
            }
        }
    });

    // Начинаем наблюдение
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Также запускаем периодическую проверку на всякий случай
    waitForCategories(function () {
        observer.disconnect();
        createCategorySearchContainer();
        initCategorySearch();
    }, 30, 1000); // 30 попыток с интервалом 1 секунда
}

// ФУНКЦИЯ: Создание контейнера для поиска категорий
function createCategorySearchContainer() {
    // Проверяем, не создан ли уже контейнер
    if (document.querySelector('.cat_list')) {
        console.log('Контейнер cat_list уже существует');
        return;
    }

    // Создаем основной контейнер
    const catListContainer = document.createElement('div');
    catListContainer.className = 'cat_list';

    // Создаем заголовок
    const title = document.createElement('h3');
    title.textContent = 'Выберите одну категорию';

    // Создаем контейнер поиска
    const searchContainer = document.createElement('div');
    searchContainer.className = 'cat_seach';

    // Создаем поле ввода
    const searchInput = document.createElement('input');
    searchInput.className = 'cat_seach-name';
    searchInput.type = 'text';
    searchInput.name = 'cat-name';
    searchInput.placeholder = 'Выведите название категории';

    // Собираем структуру
    searchContainer.appendChild(searchInput);
    catListContainer.appendChild(title);
    catListContainer.appendChild(searchContainer);

    // Находим, куда вставить контейнер (перед первой группой категорий)
    const firstCategoryGroup = document.querySelector('.group');
    if (firstCategoryGroup && firstCategoryGroup.parentNode) {
        firstCategoryGroup.parentNode.insertBefore(catListContainer, firstCategoryGroup);
        console.log('Контейнер cat_list добавлен перед категориями');
    } else {
        // Если не нашли группу, вставляем в body
        document.body.appendChild(catListContainer);
        console.log('Контейнер cat_list добавлен в body');
    }

    // Добавляем стили для красоты
    addCategorySearchStyles();
}

// ФУНКЦИЯ: Добавление стилей для поиска категорий
function addCategorySearchStyles() {
    // Проверяем, не добавлены ли стили уже
    if (document.querySelector('#category-search-styles')) {
        return;
    }

    const styles = `
        .cat_list {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        
        .cat_list h3 {
            margin: 0 0 15px 0;
            font-size: 18px;
            font-weight: 600;
            color: #333;
        }
        
        .cat_seach {
            position: relative;
            margin-bottom: 0;
        }
        
        .cat_seach-name {
            width: 100%;
            padding: 10px 35px 10px 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 14px;
            transition: border-color 0.3s ease;
            box-sizing: border-box;
        }
        
        .cat_seach-name:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }
        
        .category-reset {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: #999;
            padding: 0;
            width: 20px;
            height: 20px;
            display: none;
        }
        
        .category-reset:hover {
            color: #333;
        }
        
        mark {
            background-color: #ffeb3b;
            padding: 0 2px;
            border-radius: 2px;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.id = 'category-search-styles';
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// ФУНКЦИЯ: Ожидание появления категорий
function waitForCategories(callback, maxAttempts = 30, interval = 1000) {
    let attempts = 0;

    const checkInterval = setInterval(() => {
        const categoryGroups = document.querySelectorAll('.group');
        const hasCategories = Array.from(categoryGroups).some(group =>
            group.querySelectorAll('.cat').length > 0
        );

        if (hasCategories) {
            clearInterval(checkInterval);
            console.log('Категории появились после ожидания');
            callback();
        } else {
            attempts++;
            console.log(`Проверка категорий (попытка ${attempts}/${maxAttempts})`);
            if (attempts >= maxAttempts) {
                clearInterval(checkInterval);
                console.log('Категории не появились после ожидания');
            }
        }
    }, interval);
}

// ФУНКЦИЯ: Инициализация поиска по категориям
function initCategorySearch() {
    const searchInput = document.querySelector('.cat_seach-name');
    const categoryGroups = document.querySelectorAll('.group');

    if (!searchInput) {
        console.error("Поле поиска категорий не найдено");
        return;
    }

    console.log('Инициализация поиска по категориям');

    // Добавляем обработчик события ввода
    searchInput.addEventListener('input', function () {
        const searchText = this.value.trim().toLowerCase();
        filterCategories(searchText);
    });

    // Функция фильтрации категорий
    function filterCategories(searchText) {
        categoryGroups.forEach(group => {
            let hasVisibleItems = false;
            const categories = group.querySelectorAll('.cat');

            categories.forEach(category => {
                const input = category.querySelector('input[type="radio"]');
                const label = category.querySelector('label');

                if (!input || !label) {
                    category.style.display = 'none';
                    return;
                }

                // Ищем совпадение в value инпута (основной поиск)
                const inputValue = input ? input.value.toLowerCase() : '';
                // Также ищем в тексте label для полноты
                const labelText = label ? label.textContent.toLowerCase() : '';

                // Проверяем совпадение в value инпута ИЛИ в тексте label
                const matchesSearch = searchText === '' ||
                    inputValue.includes(searchText) ||
                    labelText.includes(searchText);

                if (matchesSearch) {
                    category.style.display = 'block';
                    hasVisibleItems = true;

                    // Подсветка совпадений в label
                    if (searchText !== '' && label) {
                        highlightMatch(label, searchText, inputValue, labelText);
                    } else if (label) {
                        removeHighlight(label);
                    }
                } else {
                    category.style.display = 'none';
                }
            });

            // Показываем/скрываем группу в зависимости от наличия видимых элементов
            const groupTitle = group.querySelector('.group_ttl');
            if (groupTitle) {
                group.style.display = hasVisibleItems ? 'block' : 'none';
            }
        });
    }

    // ФУНКЦИЯ: Подсветка совпадений с приоритетом value
    function highlightMatch(element, searchText, inputValue, labelText) {
        const originalText = element.textContent;

        // Сначала пытаемся подсветить в value (так как это основной источник данных)
        if (inputValue.includes(searchText)) {
            // Используем оригинальный текст из value для подсветки
            const regex = new RegExp(`(${searchText})`, 'gi');
            const highlightedText = originalText.replace(regex, '<mark>$1</mark>');
            element.innerHTML = highlightedText;
        }
        // Если не нашли в value, подсвечиваем в label тексте
        else if (labelText.includes(searchText)) {
            const regex = new RegExp(`(${searchText})`, 'gi');
            const highlightedText = originalText.replace(regex, '<mark>$1</mark>');
            element.innerHTML = highlightedText;
        }
        // Если совпадений нет (маловероятно, но на всякий случай)
        else {
            element.innerHTML = originalText;
        }
    }

    // Функция для удаления подсветки
    function removeHighlight(element) {
        const text = element.textContent;
        element.innerHTML = text;
    }


}


// Остальные функции остаются без изменений...
function initFilterSystem(buyersData) {
    // Сохраняем исходные данные для сброса
    const originalData = [...buyersData];

    // Находим контейнеры с чекбоксами фильтров
    const regionCheckboxes = document.querySelectorAll('.buyers_seach-plase input[type="checkbox"]');
    const scaleCheckboxes = document.querySelectorAll('.buyers_seach-type input[type="checkbox"]');

    // Находим поле поиска по названию
    const nameSearchInput = document.querySelector('.buyers_seach-name');

    // Добавляем обработчики событий на все чекбоксы фильтров
    regionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => filterBuyers(buyersData));
    });

    scaleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => filterBuyers(buyersData));
    });

    // Добавляем обработчик на поле поиска по названию
    if (nameSearchInput) {
        nameSearchInput.addEventListener('input', () => filterBuyers(buyersData));
    }

    // Первоначальное отображение всех данных (без фильтров)
    displayBuyersList(buyersData, false, originalData.length);
}

function filterBuyers(buyersData) {
    // Получаем выбранные регионы
    const selectedRegions = Array.from(document.querySelectorAll('.buyers_seach-plase input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    // Получаем выбранные типы сетей
    const selectedScales = Array.from(document.querySelectorAll('.buyers_seach-type input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    // Получаем текст для поиска по названию
    const searchNameInput = document.querySelector('.buyers_seach-name');
    const searchText = searchNameInput ? searchNameInput.value.trim().toLowerCase() : '';

    // Определяем, применены ли фильтры
    const hasActiveFilters = selectedRegions.length > 0 || selectedScales.length > 0 || searchText.length > 0;

    // Фильтруем данные
    const filteredData = buyersData.filter(buyer => {
        // Проверка по регионам
        const regionMatch = selectedRegions.length === 0 ||
            selectedRegions.some(region => buyer.regions.includes(region));

        // Проверка по масштабу
        const scaleMatch = selectedScales.length === 0 ||
            selectedScales.includes(buyer.scale);

        // Проверка по названию (побуквенный поиск)
        const nameMatch = !searchText ||
            buyer.name.toLowerCase().includes(searchText);

        return regionMatch && scaleMatch && nameMatch;
    });

    displayBuyersList(filteredData, hasActiveFilters, buyersData.length);
}

function displayBuyersList(buyers, hasActiveFilters, totalCount) {
    // ОБНОВЛЯЕМ ЗАГОЛОВОК С КОЛИЧЕСТВОМ НАЙДЕННЫХ ОБЪЕКТОВ
    updateTitleWithCount(buyers.length, hasActiveFilters, totalCount);

    // Находим или создаем контейнер для списка покупателей
    let listContainer = document.querySelector('.buyers_list');
    if (!listContainer) {
        listContainer = document.createElement('div');
        listContainer.className = 'buyers_list';

        // Вставляем после блока с фильтрами
        const filterContainer = document.querySelector('.buyers_seach');
        if (filterContainer && filterContainer.parentNode) {
            filterContainer.parentNode.insertBefore(listContainer, filterContainer.nextSibling);
        } else {
            document.body.appendChild(listContainer);
        }
    }

    // Очищаем контейнер
    listContainer.innerHTML = '';

    if (buyers.length === 0) {
        listContainer.innerHTML = '<p>Покупатели не найдены</p>';
        return;
    }

    // Получаем текст для поиска
    const searchNameInput = document.querySelector('.buyers_seach-name');
    const searchText = searchNameInput ? searchNameInput.value.trim().toLowerCase() : '';

    // Создаем HTML для каждого покупателя в формате списка чекбоксов
    const buyersHTML = buyers.map(buyer => {
        // Подсвечиваем совпадения в названии
        let displayName = buyer.name;
        if (searchText) {
            displayName = highlightText(buyer.name, searchText);
        }

        return `
        <div>
            <input type="checkbox" 
                   name="buyer" 
                   value="${buyer.name}" 
                   data-0="${buyer.logo}" 
                   data-1="${buyer.scale}" 
                   data-2="${buyer.regions}">
            <span class="buyers-name">${displayName}</span>, ${buyer.scale}, ${buyer.regions}
        </div>
        `;
    }).join('');

    listContainer.innerHTML = buyersHTML;
}

function updateTitleWithCount(currentCount, hasActiveFilters, totalCount) {
    const titleElement = document.querySelector('.title-foto');

    if (titleElement) {
        if (!titleElement.hasAttribute('data-original-text')) {
            titleElement.setAttribute('data-original-text', titleElement.textContent);
        }

        const originalText = titleElement.getAttribute('data-original-text');

        let countText;
        if (hasActiveFilters) {
            countText = `Найдено: ${currentCount} вариантов`;
        } else {
            countText = `Всего: ${totalCount} вариантов`;
        }

        titleElement.textContent = `${originalText} (${countText})`;
    }
}

function getSelectedBuyers() {
    const selectedCheckboxes = document.querySelectorAll('.buyers_list input[type="checkbox"]:checked');
    const selectedBuyers = Array.from(selectedCheckboxes).map(checkbox => {
        return {
            name: checkbox.value,
            logo: checkbox.getAttribute('data-0'),
            scale: checkbox.getAttribute('data-1'),
            regions: checkbox.getAttribute('data-2')
        };
    });
    return selectedBuyers;
}

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}