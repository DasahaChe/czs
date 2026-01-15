document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const topPagination = document.getElementById('topPagination');
    const productsContainer = document.getElementById('productsContainer');
    const totalProductsCount = document.getElementById('totalProductsCount');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    
    // Конфигурация
    const CARDS_PER_PAGE = {
        mobile: 1,
        tablet: 2,
        desktop: 3,
        large: 5
    };
    const MAX_CHARS = 100; // Максимальное количество символов для состава
    let currentPage = 1;
    let allProducts = [];
    let visibleCards = 3; // По умолчанию для десктопа
    
    // Инициализация тестовых данных
    function initTestData() {
        // Проверяем, есть ли уже данные в localStorage
        const existingData = JSON.parse(localStorage.getItem('productsDatabase') || '[]');
        
        if (existingData.length === 0) {
            // Создаем тестовые данные (50 продуктов для демонстрации)
            const testProducts = generateTestProducts(50);
            localStorage.setItem('productsDatabase', JSON.stringify(testProducts));
            console.log('Созданы тестовые данные: 50 продуктов');
        }
        
        // Загружаем данные из localStorage
        allProducts = JSON.parse(localStorage.getItem('productsDatabase') || '[]');
        updateVisibleCardsCount();
    }
    
    // Обновление количества видимых карточек в зависимости от ширины экрана
    function updateVisibleCardsCount() {
        const width = window.innerWidth;
        
        if (width < 768) {
            visibleCards = CARDS_PER_PAGE.mobile;
        } else if (width < 1200) {
            visibleCards = CARDS_PER_PAGE.tablet;
        } else if (width < 1600) {
            visibleCards = CARDS_PER_PAGE.desktop;
        } else {
            visibleCards = CARDS_PER_PAGE.large;
        }
    }
    
    // Генерация тестовых продуктов (без бейджей и с упрощенными данными)
    function generateTestProducts(count) {
        const manufacturers = [
            "ООО 'Молпродукт'", "ЗАО 'Пищевик'", "АО 'Агрокомбинат'", 
            "ИП Иванов", "ООО 'Фермерские продукты'", "АО 'Кондитерская фабрика'",
            "ООО 'Напитки и воды'", "ПАО 'Мясокомбинат'", "ООО 'Хлебозавод №1'",
            "АО 'Рыбоперерабатывающий завод'"
        ];
        
        const countries = ["Россия", "Беларусь", "Казахстан", "Армения", "Грузия"];
        const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород"];
        const brands = [
            "Молочная долина", "Вкусный край", "Фермерское", "Эко-продукт", 
            "Натуральный выбор", "Домашний", "Премиум", "Классика", "Горный",
            "Лесной", "Морской", "Речной", "Солнечный", "Урожай"
        ];
        
        const productNames = [
            "Йогурт натуральный питьевой 2,5%", "Молоко пастеризованное 3,2%",
            "Кефир обезжиренный 1%", "Сметана 15%", "Творог мягкий 5%",
            "Сыр Российский 45%", "Масло сливочное 82,5%", "Шоколад молочный с орехами",
            "Печенье овсяное с изюмом", "Хлеб бородинский на закваске",
            "Вода минеральная газированная", "Сок апельсиновый прямого отжима",
            "Чай черный байховый", "Кофе молотый арабика", "Лимонад классический",
            "Колбаса докторская", "Сосиски молочные", "Салями итальянская",
            "Бекон копченый", "Ветчина в/с", "Рыба горбуша соленая",
            "Крабовые палочки", "Икра красная лососевая", "Креветки королевские",
            "Мыло туалетное", "Шампунь для волос", "Гель для душа",
            "Зубная паста", "Стиральный порошок", "Средство для мытья посуды"
        ];
        
        const packagingOptions = [
            "Пластиковая бутылка", "Картонная упаковка", "Стеклянная банка", 
            "Полиэтиленовый пакет", "Жестяная банка", "Фольгированная упаковка",
            "Вакуумная упаковка", "Термоусадочная пленка", "Бумажный пакет"
        ];
        
        const weights = ["200 г", "350 г", "500 г", "750 г", "1 кг", "1 л", "250 мл", "450 мл", "900 мл", "2 л", "5 кг"];
        
        // Более длинные составы для демонстрации обрезки
        const compositions = [
            "Молоко нормализованное, закваска молочнокислых культур (Streptococcus thermophilus, Lactobacillus bulgaricus). Продукт содержит живые молочнокислые микроорганизмы. Без добавления консервантов, красителей и искусственных ароматизаторов. Хранить при температуре от +2°C до +6°C. Срок годности: 14 суток.",
            "Молоко цельное отборное высшего сорта, сливки пастеризованные, закваска на основе чистых культур. Обогащено витаминами A, D и кальцием. Идеально подходит для детского питания и диетического рациона. Произведено из экологически чистого сырья.",
            "Молоко обезжиренное, закваска специального приготовления, витаминный комплекс (B1, B2, B6, B12, C, E). Продукт с пониженной жирностью, содержит пробиотические культуры для улучшения пищеварения. Без ГМО, без консервантов.",
            "Сливки нормализованные высшего сорта, закваска молочнокислых бактерий. Технология производства позволяет сохранить все полезные свойства продукта. Без стабилизаторов и загустителей. Натуральный продукт.",
            "Творог зерненый, сливки пастеризованные, кальций карбонат, витамин D3 (холекальциферол). Высокое содержание белка при минимальном количестве жира. Подходит для спортивного питания. Произведено по ГОСТ.",
            "Молоко пастеризованное высшего сорта, закваска мезофильных культур, ферментный препарат микробного происхождения, соль пищевая. Выдержка не менее 30 суток. Традиционный рецепт. Качественный продукт.",
            "Сливки свежие, пахта, соль пищевая йодированная. Произведено методом сбивания. Содержание молочного жира не менее 82,5%. Без растительных жиров и эмульгаторов. Натуральный состав.",
            "Какао-бобы высшего сорта, сахар тростниковый, молоко сухое цельное, орехи лесные обжаренные, лецитин соевый (эмульгатор), ванилин натуральный. Шоколад с высоким содержанием какао. Без искусственных добавок.",
            "Мука пшеничная высшего сорта, овсяные хлопья цельнозерновые, изюм сушеный, сахар коричневый, масло растительное подсолнечное, яйца куриные, разрыхлитель (пирофосфат натрия, сода пищевая), соль морская. Домашняя выпечка.",
            "Мука ржаная обойная, вода очищенная, закваска ржаная, солод ржаной ферментированный, соль каменная, тмин, кориандр молотый. Выпекается по традиционному рецепту на опаре. Натуральный продукт.",
            "Вода минеральная природная лечебно-столовая, добываемая из скважины глубиной 250 метров, диоксид углерода пищевой. Сохраняет все природные микроэлементы: магний, кальций, натрий, калий. Качественная вода.",
            "Сок апельсиновый прямого отжима концентрированный, вода питьевая подготовленная, сахар белый кристаллический, регулятор кислотности (лимонная кислота). Без добавления консервантов. Витаминизированный продукт."
        ];
        
        const descriptions = [
            "Натуральный продукт без искусственных добавок и консервантов.",
            "Произведено из отборного сырья с соблюдением всех стандартов качества.",
            "Идеально подходит для здорового питания и диетического рациона.",
            "Содержит полезные витамины и минералы для поддержания здоровья.",
            "Традиционный рецепт с современными технологиями производства.",
            "Экологически чистый продукт от проверенных поставщиков.",
            "Сохраняет все полезные свойства благодаря щадящей обработке.",
            "Отличный выбор для всей семьи, подходит для детей и взрослых.",
            "Насыщенный вкус и аромат, произведено на современном оборудовании.",
            "Без ГМО, без искусственных красителей и ароматизаторов."
        ];
        
        const websites = [
            "moloko.ru", "vkusnoe.ru", "fermerskoe.com", "eko-product.org",
            "naturalchoice.ru", "domashnee.su", "premiumfood.ru", "classic-food.com",
            "gorniy-product.ru", "lesnoy.ru", "morskoy.com", "rechnoy.su"
        ];
        
        const products = [];
        
        for (let i = 0; i < count; i++) {
            const manufacturer = manufacturers[Math.floor(Math.random() * manufacturers.length)];
            const country = countries[Math.floor(Math.random() * countries.length)];
            const city = cities[Math.floor(Math.random() * cities.length)];
            const brand = brands[Math.floor(Math.random() * brands.length)];
            const productName = productNames[i % productNames.length];
            const description = descriptions[Math.floor(Math.random() * descriptions.length)];
            const price = (Math.random() * 1000 + 50).toFixed(2);
            const packaging = packagingOptions[Math.floor(Math.random() * packagingOptions.length)];
            const weight = weights[Math.floor(Math.random() * weights.length)];
            const composition = compositions[i % compositions.length];
            const website = websites[Math.floor(Math.random() * websites.length)];
            
            // Проверяем, голосовал ли пользователь за этот товар
            const userVotes = JSON.parse(localStorage.getItem('userVotes') || '{}');
            const hasVoted = userVotes[`product_${i + 1}`] || false;
            
            products.push({
                id: `product_${i + 1}`,
                manufacturer,
                country,
                city,
                brand,
                productName,
                description,
                price: parseFloat(price),
                packaging,
                weight,
                composition,
                website,
                photo: {
                    dataUrl: `https://picsum.photos/400/300?random=${i + 1}&blur=${Math.random() > 0.5 ? 1 : 0}`,
                    fileName: `product_${i + 1}.jpg`
                },
                hasVoted: hasVoted,
                createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString()
            });
        }
        
        return products;
    }
    
    // Функция для обрезки текста до 100 символов
    function truncateText(text, maxChars) {
        if (text.length <= maxChars) {
            return {
                short: text,
                isTruncated: false
            };
        }
        
        // Находим последний пробел перед максимальным количеством символов
        const truncated = text.substr(0, maxChars);
        const lastSpace = truncated.lastIndexOf(' ');
        
        const shortText = lastSpace > 0 ? 
            text.substr(0, lastSpace) + '...' : 
            truncated + '...';
        
        return {
            short: shortText,
            full: text,
            isTruncated: true
        };
    }
    
    // Функция для отображения карточек товаров
    function displayProducts() {
        const totalProducts = allProducts.length;
        totalProductsCount.textContent = totalProducts;
        
        if (totalProducts === 0) {
            productsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-box-open"></i>
                    <h2>Продукты не найдены</h2>
                    <p>Сначала создайте продукт через форму ввода данных</p>
                    <a href="form.html" class="create-product-btn">
                        <i class="fas fa-plus"></i> Создать продукт
                    </a>
                </div>
            `;
            topPagination.innerHTML = '';
            return;
        }
        
        // Рассчитываем индексы для текущей страницы
        const startIndex = (currentPage - 1) * visibleCards;
        const endIndex = startIndex + visibleCards;
        const currentProducts = allProducts.slice(startIndex, endIndex);
        const totalPages = Math.ceil(totalProducts / visibleCards);
        
        // Отображаем пагинацию сверху
        displayTopPagination(totalProducts, totalPages);
        
        // Отображаем карточки товаров
        let productsHTML = '<div class="products-container">';
        
        currentProducts.forEach((product, index) => {
            // Обрезаем состав до 100 символов
            const truncatedComposition = truncateText(product.composition, MAX_CHARS);
            
            productsHTML += `
                <div class="product-card" data-product-id="${product.id}" data-index="${index}">
                    <div class="product-image">
                        <img src="${product.photo.dataUrl}" alt="${product.productName}" loading="lazy">
                    </div>
                    
                    <div class="product-content">
                        <div class="manufacturer">
                            <i class="fas fa-industry"></i> ${product.manufacturer}
                        </div>
                        
                        <h3 class="product-name">${product.productName}</h3>
                        
                        <div class="price-section">
                            <div class="price">${product.price.toFixed(2)} ₽</div>
                            <div class="weight">${product.weight}</div>
                        </div>
                        
                        <div class="details-grid">
                            <div class="detail-item">
                                <span class="detail-label">Бренд</span>
                                <span class="detail-value">${product.brand}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Фасовка</span>
                                <span class="detail-value">${product.packaging}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Производство</span>
                                <span class="detail-value">${product.country}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Город</span>
                                <span class="detail-value">${product.city}</span>
                            </div>
                        </div>
                        
                        <div class="composition-section">
                            <div class="composition-title">
                                <i class="fas fa-list-ul"></i> Состав продукта
                            </div>
                            <div class="composition-text" id="composition-${product.id}">
                                ${truncatedComposition.short}
                            </div>
                            ${truncatedComposition.isTruncated ? `
                            <button class="toggle-composition" data-product-id="${product.id}">
                                <i class="fas fa-chevron-down"></i> Развернуть
                            </button>` : ''}
                        </div>
                        
                        <div class="vote-section">
                            <button class="vote-btn ${product.hasVoted ? 'voted' : ''}" 
                                    data-product-id="${product.id}"
                                    ${product.hasVoted ? 'disabled' : ''}>
                                <i class="fas fa-vote-yea"></i>
                                ${product.hasVoted ? 'Голос отдан' : 'Отдать голос'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        productsHTML += '</div>';
        productsContainer.innerHTML = productsHTML;
        
        // Добавляем обработчики событий
        addEventListeners();
        
        // Прокручиваем к началу контейнера
        const container = document.querySelector('.products-container');
        if (container) {
            container.scrollLeft = 0;
        }
    }
    
    // Функция для отображения пагинации сверху
    function displayTopPagination(totalProducts, totalPages) {
        const startProduct = (currentPage - 1) * visibleCards + 1;
        const endProduct = Math.min(currentPage * visibleCards, totalProducts);
        
        let paginationHTML = `
            <div class="top-pagination">
                <div class="pagination-info">
                    Показано: <strong>${startProduct}-${endProduct}</strong> из <strong>${totalProducts}</strong> товаров
                    (Страница ${currentPage} из ${totalPages})
                </div>
                
                <div class="pagination-controls">
                    <button class="pagination-btn" id="prevPage" ${currentPage === 1 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-left"></i> Назад
                    </button>
                    
                    <div class="pagination-numbers" id="pageNumbers">
                        <!-- Номера страниц будут добавлены здесь -->
                    </div>
                    
                    <button class="pagination-btn" id="nextPage" ${currentPage === totalPages ? 'disabled' : ''}>
                        Вперед <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;
        
        topPagination.innerHTML = paginationHTML;
        
        // Добавляем номера страниц
        const pageNumbersContainer = document.getElementById('pageNumbers');
        let pageNumbersHTML = '';
        
        // Всегда показываем первую страницу
        pageNumbersHTML += `
            <div class="page-number ${currentPage === 1 ? 'active' : ''}" data-page="1">1</div>
        `;
        
        // Показываем многоточие, если нужно
        if (currentPage > 3) {
            pageNumbersHTML += `<div class="page-number" style="cursor: default">...</div>`;
        }
        
        // Показываем страницы вокруг текущей
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);
        
        for (let i = startPage; i <= endPage; i++) {
            if (i === 1 || i === totalPages) continue;
            
            pageNumbersHTML += `
                <div class="page-number ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</div>
            `;
        }
        
        // Показываем многоточие, если нужно
        if (currentPage < totalPages - 2) {
            pageNumbersHTML += `<div class="page-number" style="cursor: default">...</div>`;
        }
        
        // Всегда показываем последнюю страницу, если есть больше одной страницы
        if (totalPages > 1) {
            pageNumbersHTML += `
                <div class="page-number ${currentPage === totalPages ? 'active' : ''}" data-page="${totalPages}">${totalPages}</div>
            `;
        }
        
        pageNumbersContainer.innerHTML = pageNumbersHTML;
        
        // Добавляем обработчики для пагинации
        document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
                goToPage(currentPage - 1);
            }
        });
        
        document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < totalPages) {
                goToPage(currentPage + 1);
            }
        });
        
        const pageNumbers = document.querySelectorAll('.page-number[data-page]');
        pageNumbers.forEach(number => {
            number.addEventListener('click', function() {
                const page = parseInt(this.getAttribute('data-page'));
                goToPage(page);
            });
        });
    }
    
    // Функция для перехода на указанную страницу
    function goToPage(page) {
        if (page < 1 || page > Math.ceil(allProducts.length / visibleCards)) {
            return;
        }
        
        currentPage = page;
        displayProducts();
    }
    
    // Функция для добавления обработчиков событий
    function addEventListeners() {
        // Обработчики для кнопок развертывания состава
        const toggleButtons = document.querySelectorAll('.toggle-composition');
        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-product-id');
                const compositionElement = document.getElementById(`composition-${productId}`);
                const icon = this.querySelector('i');
                const product = allProducts.find(p => p.id === productId);
                
                if (!product) return;
                
                if (compositionElement.classList.contains('expanded')) {
                    // Сворачиваем текст
                    const truncated = truncateText(product.composition, MAX_CHARS);
                    compositionElement.innerHTML = truncated.short;
                    compositionElement.classList.remove('expanded');
                    icon.className = 'fas fa-chevron-down';
                    this.innerHTML = '<i class="fas fa-chevron-down"></i> Развернуть';
                } else {
                    // Разворачиваем полный текст
                    compositionElement.innerHTML = product.composition;
                    compositionElement.classList.add('expanded');
                    icon.className = 'fas fa-chevron-up';
                    this.innerHTML = '<i class="fas fa-chevron-up"></i> Свернуть';
                }
            });
        });
        
        // Обработчики для кнопок голосования
        const voteButtons = document.querySelectorAll('.vote-btn');
        voteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-product-id');
                
                // Находим продукт
                const productIndex = allProducts.findIndex(p => p.id === productId);
                if (productIndex === -1) return;
                
                // Получаем текущие голоса пользователя
                let userVotes = JSON.parse(localStorage.getItem('userVotes') || '{}');
                
                // Проверяем, не голосовал ли пользователь уже
                if (userVotes[productId]) {
                    alert('Вы уже отдали голос за этот товар!');
                    return;
                }
                
                // Обновляем статус голосования
                allProducts[productIndex].hasVoted = true;
                
                // Сохраняем голос пользователя
                userVotes[productId] = true;
                localStorage.setItem('userVotes', JSON.stringify(userVotes));
                
                // Обновляем отображение
                this.classList.add('voted');
                this.innerHTML = '<i class="fas fa-vote-yea"></i> Голос отдан';
                this.disabled = true;
                
                // Сохраняем обновленные данные
                localStorage.setItem('productsDatabase', JSON.stringify(allProducts));
                
                // Показываем сообщение об успехе
                showSuccessMessage('Ваш голос учтен! Спасибо за участие.');
            });
        });
        
        // Обработчики для стрелок прокрутки
        if (scrollLeftBtn && scrollRightBtn) {
            scrollLeftBtn.addEventListener('click', () => {
                const container = document.querySelector('.products-container');
                if (container) {
                    container.scrollBy({
                        left: -350,
                        behavior: 'smooth'
                    });
                }
            });
            
            scrollRightBtn.addEventListener('click', () => {
                const container = document.querySelector('.products-container');
                if (container) {
                    container.scrollBy({
                        left: 350,
                        behavior: 'smooth'
                    });
                }
            });
        }
        
        // Обработчик для свайпа на мобильных устройствах
        let touchStartX = 0;
        let touchEndX = 0;
        
        productsContainer.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        productsContainer.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Свайп влево - показываем следующую страницу
                    if (currentPage < Math.ceil(allProducts.length / visibleCards)) {
                        goToPage(currentPage + 1);
                    }
                } else {
                    // Свайп вправо - показываем предыдущую страницу
                    if (currentPage > 1) {
                        goToPage(currentPage - 1);
                    }
                }
            }
        }
    }
    
    // Функция для показа сообщения об успехе
    function showSuccessMessage(message) {
        // Создаем элемент для сообщения
        const messageElement = document.createElement('div');
        messageElement.className = 'success-message';
        messageElement.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #27ae60;
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 10px;
                animation: slideIn 0.3s ease;
            ">
                <i class="fas fa-check-circle"></i>
                ${message}
            </div>
        `;
        
        document.body.appendChild(messageElement);
        
        // Удаляем сообщение через 3 секунды
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        const oldVisibleCards = visibleCards;
        updateVisibleCardsCount();
        
        // Если количество видимых карточек изменилось, пересчитываем пагинацию
        if (oldVisibleCards !== visibleCards) {
            currentPage = 1;
            displayProducts();
        }
    });
    
    // Инициализация при загрузке страницы
    initTestData();
    displayProducts();
    
    // Функция для обновления данных (может быть вызвана извне)
    window.refreshProducts = function() {
        allProducts = JSON.parse(localStorage.getItem('productsDatabase') || '[]');
        updateVisibleCardsCount();
        currentPage = 1;
        displayProducts();
    };
    
    // Добавляем стили для анимации сообщения
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});