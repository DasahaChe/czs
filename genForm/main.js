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

    return resultArray;
});

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

    // Добавляем кнопку сброса
    addResetButton(originalData);

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

    console.log('Выбранные регионы:', selectedRegions);
    console.log('Выбранные масштабы:', selectedScales);
    console.log('Текст поиска:', searchText);

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

    console.log('Отфильтрованные данные:', filteredData);
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

// ОБНОВЛЕННАЯ ФУНКЦИЯ: Обновление заголовка с количеством объектов
function updateTitleWithCount(currentCount, hasActiveFilters, totalCount) {
    // Находим элемент с классом "title-foto"
    const titleElement = document.querySelector('.title-foto');
    
    if (titleElement) {
        // Сохраняем оригинальный текст, если это первый вызов
        if (!titleElement.hasAttribute('data-original-text')) {
            titleElement.setAttribute('data-original-text', titleElement.textContent);
        }
        
        const originalText = titleElement.getAttribute('data-original-text');
        
        // Определяем текст в зависимости от состояния фильтрации
        let countText;
        if (hasActiveFilters) {
            countText = `Найдено: ${currentCount} вариантов`;
        } else {
            countText = `Всего: ${totalCount} вариантов`;
        }
        
        // Обновляем текст
        titleElement.textContent = `${originalText} (${countText})`;
    } else {
        console.warn('Элемент с классом "title-foto" не найден на странице');
    }
}

// Дополнительная функция для получения выбранных покупателей
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

// ОБНОВЛЕННАЯ ФУНКЦИЯ: Добавление кнопки сброса с передачей исходных данных
function addResetButton(originalData) {
    let resetButton = document.querySelector('.reset-filters');
    if (!resetButton) {
        // resetButton = document.createElement('button');
        // resetButton.textContent = 'Сбросить фильтры';
        // resetButton.className = 'reset-filters';
        // resetButton.style.margin = '10px 20px';
        // resetButton.style.padding = '8px 16px';
        // resetButton.addEventListener('click', () => resetFilters(originalData));
        
        // const searchContainer = document.querySelector('.buyers_seach');
        // if (searchContainer) {
        //     searchContainer.appendChild(resetButton);
        // }
    }
}

// ОБНОВЛЕННАЯ ФУНКЦИЯ: Сброс фильтров с передачей исходных данных
function resetFilters(originalData) {
    // Снимаем все выделения с чекбоксов фильтров
    document.querySelectorAll('.buyers_seach input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Очищаем поле поиска по названию
    const searchNameInput = document.querySelector('.buyers_seach-name');
    if (searchNameInput) {
        searchNameInput.value = '';
    }
    
    // Отображаем исходные данные без фильтров
    displayBuyersList(originalData, false, originalData.length);
}

// Функция для подсветки совпадений в тексте
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}