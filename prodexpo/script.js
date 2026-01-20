/**
 * Модуль для работы с хранилищем данных о продуктах
 */
const ProductStorage = {
    STORAGE_KEY: 'productCatalog',
    MAX_PRODUCTS_PER_COMPANY: 6,
    
    /**
     * Инициализирует хранилище
     */
    init() {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
        }
    },
    
    /**
     * Получает все компании из хранилища
     * @returns {Array} Массив компаний
     */
    getAllCompanies() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return JSON.parse(data) || [];
    },
    
    /**
     * Сохраняет все компании в хранилище
     * @param {Array} companies - Массив компаний
     */
    saveAllCompanies(companies) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(companies));
    },
    
    /**
     * Находит компанию по названию
     * @param {string} companyName - Название компании
     * @returns {Object|null} Объект компании или null
     */
    findCompanyByName(companyName) {
        if (!companyName || !companyName.trim()) return null;
        
        const companies = this.getAllCompanies();
        return companies.find(company => 
            company.name.toLowerCase() === companyName.trim().toLowerCase()
        ) || null;
    },
    
    /**
     * Находит индекс компании по названию
     * @param {string} companyName - Название компании
     * @returns {number} Индекс компании или -1
     */
    findCompanyIndexByName(companyName) {
        if (!companyName || !companyName.trim()) return -1;
        
        const companies = this.getAllCompanies();
        return companies.findIndex(company => 
            company.name.toLowerCase() === companyName.trim().toLowerCase()
        );
    },
    
    /**
     * Создает новую компанию
     * @param {string} companyName - Название компании
     * @returns {Object} Объект новой компании
     */
    createCompany(companyName) {
        const now = new Date().toISOString();
        return {
            name: companyName.trim(),
            products: {},
            createdAt: now,
            editedAt: now
        };
    },
    
    /**
     * Добавляет продукт к компании
     * @param {string} companyName - Название компании
     * @param {Object} productData - Данные продукта
     * @returns {Object} Обновленный объект компании
     */
    addProductToCompany(companyName, productData) {
        const companies = this.getAllCompanies();
        const companyIndex = this.findCompanyIndexByName(companyName);
        let company;
        
        if (companyIndex === -1) {
            // Создаем новую компанию
            company = this.createCompany(companyName);
            companies.push(company);
        } else {
            company = companies[companyIndex];
            company.editedAt = new Date().toISOString();
        }
        
        // Проверяем лимит продуктов
        const productCount = Object.keys(company.products).length;
        if (productCount >= this.MAX_PRODUCTS_PER_COMPANY) {
            throw new Error(`Компания "${companyName}" уже имеет максимальное количество продуктов (${this.MAX_PRODUCTS_PER_COMPANY})`);
        }
        
        // Генерируем ID продукта
        const productId = `product${productCount + 1}`;
        
        // Добавляем продукт
        company.products[productId] = {
            ...productData,
            id: productId,
            addedAt: new Date().toISOString(),
            editedAt: new Date().toISOString()
        };
        
        // Сохраняем изменения
        this.saveAllCompanies(companies);
        
        return company;
    },
    
    /**
     * Обновляет существующий продукт
     * @param {string} companyName - Название компании
     * @param {string} productId - ID продукта
     * @param {Object} productData - Новые данные продукта
     * @returns {Object} Обновленный объект компании
     */
    updateProduct(companyName, productId, productData) {
        const companies = this.getAllCompanies();
        const companyIndex = this.findCompanyIndexByName(companyName);
        
        if (companyIndex === -1) {
            throw new Error(`Компания "${companyName}" не найдена`);
        }
        
        const company = companies[companyIndex];
        
        if (!company.products[productId]) {
            throw new Error(`Продукт с ID "${productId}" не найден`);
        }
        
        // Сохраняем данные фото из старой записи, если новое фото не загружено
        if (productData.photo === null && company.products[productId].photo) {
            productData.photo = company.products[productId].photo;
        }
        
        // Обновляем продукт
        company.products[productId] = {
            ...company.products[productId],
            ...productData,
            editedAt: new Date().toISOString()
        };
        
        // Обновляем дату изменения компании
        company.editedAt = new Date().toISOString();
        
        // Сохраняем изменения
        this.saveAllCompanies(companies);
        
        return company;
    },
    
    /**
     * Удаляет продукт из компании
     * @param {string} companyName - Название компании
     * @param {string} productId - ID продукта
     * @returns {Object} Обновленный объект компании
     */
    deleteProduct(companyName, productId) {
        const companies = this.getAllCompanies();
        const companyIndex = this.findCompanyIndexByName(companyName);
        
        if (companyIndex === -1) {
            throw new Error(`Компания "${companyName}" не найдена`);
        }
        
        const company = companies[companyIndex];
        
        if (!company.products[productId]) {
            throw new Error(`Продукт с ID "${productId}" не найден`);
        }
        
        // Удаляем продукт
        delete company.products[productId];
        
        // Переиндексируем оставшиеся продукты
        const productEntries = Object.entries(company.products);
        company.products = {};
        
        productEntries.forEach(([oldId, product], index) => {
            const newId = `product${index + 1}`;
            product.id = newId;
            company.products[newId] = product;
        });
        
        // Обновляем дату изменения компании
        company.editedAt = new Date().toISOString();
        
        // Сохраняем изменения
        this.saveAllCompanies(companies);
        
        return company;
    },
    
    /**
     * Получает продукт по ID
     * @param {string} companyName - Название компании
     * @param {string} productId - ID продукта
     * @returns {Object|null} Объект продукта или null
     */
    getProductById(companyName, productId) {
        const company = this.findCompanyByName(companyName);
        return company ? company.products[productId] || null : null;
    },
    
    /**
     * Получает продукты компании
     * @param {string} companyName - Название компании
     * @returns {Object|null} Объект с продуктами или null
     */
    getCompanyProducts(companyName) {
        const company = this.findCompanyByName(companyName);
        return company ? company.products : null;
    },
    
    /**
     * Получает количество продуктов компании
     * @param {string} companyName - Название компании
     * @returns {number} Количество продуктов
     */
    getProductCount(companyName) {
        const products = this.getCompanyProducts(companyName);
        return products ? Object.keys(products).length : 0;
    },
    
    /**
     * Получает последний добавленный продукт компании
     * @param {string} companyName - Название компании
     * @returns {Object|null} Последний продукт или null
     */
    getLastProduct(companyName) {
        const products = this.getCompanyProducts(companyName);
        if (!products || Object.keys(products).length === 0) {
            return null;
        }
        
        const productIds = Object.keys(products);
        const lastProductId = productIds[productIds.length - 1];
        return products[lastProductId];
    }
};

/**
 * Модуль для отображения таблицы с продуктами
 */
const ProductTable = {
    tableContainer: null,
    
    /**
     * Инициализирует таблицу
     */
    init() {
        this.tableContainer = document.createElement('div');
        this.tableContainer.className = 'product-table-container';
        this.tableContainer.style.marginTop = '20px';
        
        // Вставляем таблицу после кнопок формы
        const formButtons = document.querySelector('.form-buttons');
        if (formButtons) {
            formButtons.parentNode.insertBefore(this.tableContainer, formButtons.nextSibling);
        }
    },
    
    /**
     * Отрисовывает таблицу для компании
     * @param {string} companyName - Название компании
     */
    render(companyName) {
        const products = ProductStorage.getCompanyProducts(companyName);
        if (!products || Object.keys(products).length === 0) {
            this.tableContainer.innerHTML = '';
            return;
        }
        
        let html = `
            <div class="product-table-header">
                <h3><i class="fas fa-list"></i> Продукты компании "${companyName}"</h3>
                <p class="subtitle">Всего продуктов: ${Object.keys(products).length}</p>
            </div>
            <div class="table-responsive">
                <table class="product-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Название продукта</th>
                            <th>Производитель</th>
                            <th>Страна</th>
                            <th>Город</th>
                            <th>Бренд</th>
                            <th>Категория</th>
                            <th>Цена</th>
                            <th>Фасовка</th>
                            <th>Вес/Объем</th>
                            <th>Состав</th>
                            <th>Описание</th>
                            <th>Сайт</th>
                            <th>Дата добавления</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        Object.entries(products).forEach(([productId, product], index) => {
            const date = new Date(product.addedAt);
            const formattedDate = date.toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            
            html += `
                <tr data-product-id="${productId}">
                    <td>${index + 1}</td>
                    <td title="${this.escapeHtml(product.productName)}">${this.truncateText(product.productName, 20)}</td>
                    <td title="${this.escapeHtml(product.manufacturer)}">${this.truncateText(product.manufacturer, 15)}</td>
                    <td>${this.escapeHtml(product.country)}</td>
                    <td>${this.escapeHtml(product.city)}</td>
                    <td>${this.escapeHtml(product.brand)}</td>
                    <td>${this.escapeHtml(product.category)}</td>
                    <td>${product.price ? product.price.toFixed(2) : '0.00'} ₽</td>
                    <td title="${this.escapeHtml(product.packaging)}">${this.truncateText(product.packaging, 15)}</td>
                    <td>${this.escapeHtml(product.weight)}</td>
                    <td title="${this.escapeHtml(product.composition)}">${this.truncateText(product.composition, 30)}</td>
                    <td title="${this.escapeHtml(product.description)}">${this.truncateText(product.description, 40)}</td>
                    <td title="${this.escapeHtml(product.website)}">${this.truncateText(product.website, 20)}</td>
                    <td>${formattedDate}</td>
                    <td>
                        <div class="table-actions">
                            <button class="btn-edit" data-company="${companyName}" data-product-id="${productId}">
                                <i class="fas fa-edit"></i> Редактировать
                            </button>
                            <button class="btn-delete" data-company="${companyName}" data-product-id="${productId}">
                                <i class="fas fa-trash"></i> Удалить
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
        
        this.tableContainer.innerHTML = html;
        
        // Привязываем обработчики кнопок
        this.bindButtons();
    },
    
    /**
     * Привязывает обработчики кнопок
     */
    bindButtons() {
        // Кнопки редактирования
        const editButtons = this.tableContainer.querySelectorAll('.btn-edit');
        editButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const companyName = e.target.dataset.company || e.target.closest('.btn-edit').dataset.company;
                const productId = e.target.dataset.productId || e.target.closest('.btn-edit').dataset.productId;
                
                if (companyName && productId) {
                    ProductForm.loadProductForEditing(companyName, productId);
                }
            });
        });
        
        // Кнопки удаления
        const deleteButtons = this.tableContainer.querySelectorAll('.btn-delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const companyName = e.target.dataset.company || e.target.closest('.btn-delete').dataset.company;
                const productId = e.target.dataset.productId || e.target.closest('.btn-delete').dataset.productId;
                
                if (companyName && productId && confirm(`Вы уверены, что хотите удалить продукт "${productId}"?`)) {
                    try {
                        ProductStorage.deleteProduct(companyName, productId);
                        ProductForm.updateTable();
                        ProductForm.updateProductTitle();
                        ProductForm.updateSubmitButtonText();
                        
                        // Показываем сообщение об успехе
                        ProductForm.showSuccess(companyName, `Продукт успешно удален!`);
                        
                        console.log(`Продукт удален: ${companyName} - ${productId}`);
                    } catch (error) {
                        alert(`Ошибка при удалении продукта: ${error.message}`);
                    }
                }
            });
        });
    },
    
    /**
     * Экранирует HTML-символы
     */
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },
    
    /**
     * Обрезает текст до указанной длины
     */
    truncateText(text, maxLength) {
        if (!text) return '';
        if (text.length <= maxLength) return this.escapeHtml(text);
        return this.escapeHtml(text.substring(0, maxLength)) + '...';
    },
    
    /**
     * Очищает таблицу
     */
    clear() {
        this.tableContainer.innerHTML = '';
    }
};

/**
 * Модуль для работы с формой
 */
const ProductForm = {
    form: null,
    photoUpload: null,
    photoInput: null,
    photoPreview: null,
    previewImage: null,
    resetButton: null,
    successMessage: null,
    submitButton: null,
    productTitle: null,
    currentCompany: null,
    currentProductId: null,
    isEditMode: false,
    
    /**
     * Инициализирует форму
     */
    init() {
        this.form = document.getElementById('productForm');
        this.photoUpload = document.getElementById('photoUpload');
        this.photoInput = document.getElementById('photo');
        this.photoPreview = document.getElementById('photoPreview');
        this.previewImage = document.getElementById('previewImage');
        this.resetButton = document.getElementById('resetButton');
        this.successMessage = document.getElementById('successMessage');
        this.submitButton = this.form.querySelector('button[type="submit"]');
        this.productTitle = document.querySelector('.form-section h2');
        
        this.bindEvents();
        this.updateSubmitButtonText();
    },
    
    /**
     * Привязывает обработчики событий
     */
    bindEvents() {
        // Загрузка фото
        this.photoUpload.addEventListener('click', () => this.photoInput.click());
        this.photoInput.addEventListener('change', (e) => this.handlePhotoUpload(e));
        
        // Обработка формы
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Сброс формы
        this.resetButton.addEventListener('click', () => this.handleReset());
        
        // Изменение поля компании
        const companyInput = document.getElementById('company');
        companyInput.addEventListener('input', (e) => {
            this.handleCompanyChange(e.target.value);
        });
        
        companyInput.addEventListener('change', (e) => {
            this.handleCompanyChange(e.target.value);
        });
        
        // Демо-данные при двойном клике
        document.querySelector('header').addEventListener('dblclick', () => this.fillDemoData());
    },
    
    /**
     * Обрабатывает изменение поля компании
     */
    handleCompanyChange(companyName) {
        const trimmedName = companyName.trim();
        this.currentCompany = trimmedName;
        
        // Обновляем заголовок
        this.updateProductTitle();
        
        // Обновляем таблицу если есть компания
        if (trimmedName) {
            this.updateTable();
        } else {
            ProductTable.clear();
        }
        
        // Обновляем текст кнопки
        this.updateSubmitButtonText();
    },
    
    /**
     * Обрабатывает загрузку фото
     */
    handlePhotoUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        // Проверка размера
        if (file.size > 5 * 1024 * 1024) {
            this.showError('photo-error', 'Файл слишком большой. Максимальный размер: 5MB');
            return;
        }
        
        // Проверка типа
        const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!validTypes.includes(file.type)) {
            this.showError('photo-error', 'Неподдерживаемый формат файла. Используйте JPG, PNG или GIF');
            return;
        }
        
        // Превью
        const reader = new FileReader();
        reader.onload = (e) => {
            this.previewImage.src = e.target.result;
            this.photoPreview.style.display = 'block';
            this.hideError('photo-error');
        };
        reader.readAsDataURL(file);
    },
    
    /**
     * Собирает данные из формы
     * @returns {Object} Данные продукта
     */
    collectFormData() {
        const priceValue = document.getElementById('price').value;
        
        const productData = {
            manufacturer: document.getElementById('manufacturer').value.trim(),
            country: document.getElementById('country').value.trim(),
            city: document.getElementById('city').value.trim(),
            brand: document.getElementById('brand').value.trim(),
            category: document.getElementById('category').value.trim(),
            productName: document.getElementById('productName').value.trim(),
            description: document.getElementById('description').value.trim(),
            price: priceValue ? parseFloat(priceValue) : 0,
            packaging: document.getElementById('packaging').value.trim(),
            weight: document.getElementById('weight').value.trim(),
            composition: document.getElementById('composition').value.trim(),
            website: document.getElementById('website').value.trim(),
            photo: null
        };
        
        // Добавляем фото только если оно было загружено
        if (this.photoInput.files && this.photoInput.files[0]) {
            productData.photo = {
                fileName: this.photoInput.files[0].name,
                fileSize: this.photoInput.files[0].size,
                fileType: this.photoInput.files[0].type,
                lastModified: new Date(this.photoInput.files[0].lastModified).toLocaleString(),
                dataUrl: this.previewImage.src
            };
        } else if (this.isEditMode && this.currentProductId) {
            // В режиме редактирования, если фото не загружено новое, сохраняем старое
            const oldProduct = ProductStorage.getProductById(this.currentCompany, this.currentProductId);
            if (oldProduct && oldProduct.photo) {
                productData.photo = oldProduct.photo;
            }
        }
        
        return productData;
    },
    
    /**
     * Валидирует форму
     * @returns {boolean} Результат валидации
     */
    validateForm() {
        this.resetErrors();
        let isValid = true;
        
        // Проверка компании
        const company = document.getElementById('company');
        if (!company.value.trim()) {
            this.showError('company-error', 'Поле "Компания" обязательно для заполнения');
            isValid = false;
        }
        
        // Проверка обязательных полей
        const requiredFields = [
            'manufacturer', 'country', 'city', 'brand',
            'category', 'productName', 'description',
            'packaging', 'weight', 'composition'
        ];
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                this.showError(`${fieldId}-error`, `Поле "${field.previousElementSibling.textContent.replace(' *', '')}" обязательно для заполнения`);
                isValid = false;
            }
        });
        
        // Проверка цены
        const price = document.getElementById('price');
        const priceValue = parseFloat(price.value);
        if (!price.value || isNaN(priceValue) || priceValue <= 0) {
            this.showError('price-error', 'Пожалуйста, введите корректную цену (число больше 0)');
            isValid = false;
        }
        
        // Проверка фото (только при добавлении нового продукта и не в режиме редактирования)
        if (!this.isEditMode && (!this.photoInput.files || this.photoInput.files.length === 0)) {
            this.showError('photo-error', 'Пожалуйста, загрузите фотографию продукта');
            isValid = false;
        }
        
        return isValid;
    },
    
    /**
     * Обрабатывает отправку формы
     */
    async handleSubmit(event) {
        event.preventDefault();
        
        if (!this.validateForm()) {
            console.log('Форма содержит ошибки. Объект не создан.');
            return;
        }
        
        try {
            const companyName = document.getElementById('company').value.trim();
            const productData = this.collectFormData();
            
            if (this.isEditMode && this.currentProductId) {
                // Режим редактирования - перезаписываем продукт
                ProductStorage.updateProduct(companyName, this.currentProductId, productData);
                this.showSuccess(companyName, `Продукт успешно обновлен!`);
                
                // Выходим из режима редактирования
                this.exitEditMode();
            } else {
                // Режим добавления
                // Проверяем лимит продуктов
                const currentCount = ProductStorage.getProductCount(companyName);
                if (currentCount >= ProductStorage.MAX_PRODUCTS_PER_COMPANY) {
                    alert(`Компания "${companyName}" уже имеет максимальное количество продуктов (${ProductStorage.MAX_PRODUCTS_PER_COMPANY})`);
                    return;
                }
                
                // Сохраняем продукт
                ProductStorage.addProductToCompany(companyName, productData);
                this.showSuccess(companyName, `Продукт успешно добавлен!`);
                
                // Переключаем кнопку на "Добавить продукт"
                this.updateSubmitButtonText();
            }
            
            // Обновляем заголовок продукта
            this.updateProductTitle();
            
            // Обновляем таблицу
            this.updateTable();
            
            // Логируем результат
            this.logResult(companyName);
            
            // Если это добавление нового продукта, очищаем форму
            if (!this.isEditMode) {
                this.clearFormForNextProduct();
            }
            
        } catch (error) {
            console.error('Ошибка при сохранении продукта:', error);
            alert(error.message);
        }
    },
    
    /**
     * Загружает продукт для редактирования
     * @param {string} companyName - Название компании
     * @param {string} productId - ID продукта
     */
    loadProductForEditing(companyName, productId) {
        const product = ProductStorage.getProductById(companyName, productId);
        if (!product) {
            alert('Продукт не найден');
            return;
        }
        
        console.log('Загружаем продукт для редактирования:', product);
        
        // Заполняем форму данными продукта
        document.getElementById('company').value = companyName;
        document.getElementById('manufacturer').value = product.manufacturer || '';
        document.getElementById('country').value = product.country || '';
        document.getElementById('city').value = product.city || '';
        document.getElementById('brand').value = product.brand || '';
        document.getElementById('category').value = product.category || '';
        document.getElementById('productName').value = product.productName || '';
        document.getElementById('description').value = product.description || '';
        document.getElementById('price').value = product.price || '';
        document.getElementById('packaging').value = product.packaging || '';
        document.getElementById('weight').value = product.weight || '';
        document.getElementById('composition').value = product.composition || '';
        document.getElementById('website').value = product.website || '';
        
        // Обработка фото - ИСПРАВЛЕНО
        if (product.photo && product.photo.dataUrl) {
            this.previewImage.src = product.photo.dataUrl;
            this.photoPreview.style.display = 'block';
        } else {
            this.previewImage.src = '';
            this.photoPreview.style.display = 'none';
        }
        
        // Сбрасываем файловый инпут (но сохраняем превью если оно есть)
        this.photoInput.value = '';
        
        // Устанавливаем режим редактирования
        this.isEditMode = true;
        this.currentCompany = companyName;
        this.currentProductId = productId;
        
        // Обновляем заголовок
        if (this.productTitle) {
            this.productTitle.textContent = `Редактирование продукта: ${product.productName}`;
        }
        
        // Обновляем текст кнопки на "Сохранить изменения"
        this.updateSubmitButtonText();
        
        // Скрываем ошибку фото при редактировании (фото уже есть в данных продукта)
        this.hideError('photo-error');
        
        // Прокрутка к форме
        this.form.scrollIntoView({ behavior: 'smooth' });
        
        console.log(`Режим редактирования: ${companyName} - ${productId}`);
    },
    
    /**
     * Выходит из режима редактирования
     */
    exitEditMode() {
        this.isEditMode = false;
        this.currentProductId = null;
        this.updateSubmitButtonText();
        this.updateProductTitle();
    },
    
    /**
     * Обрабатывает сброс формы
     */
    handleReset() {
        // Сохраняем значение компании
        const companyValue = document.getElementById('company').value;
        
        // Сбрасываем форму
        this.form.reset();
        
        // Восстанавливаем значение компании
        document.getElementById('company').value = companyValue;
        
        // Сбрасываем фото
        this.previewImage.src = '';
        this.photoPreview.style.display = 'none';
        this.photoInput.value = '';
        
        // Сбрасываем ошибки
        this.resetErrors();
        
        // Выходим из режима редактирования
        this.exitEditMode();
        
        // Обновляем заголовок и кнопку
        this.updateProductTitle();
        this.updateSubmitButtonText();
        
        // Обновляем таблицу если компания есть
        if (companyValue.trim()) {
            this.updateTable();
        }
    },
    
    /**
     * Очищает форму для следующего продукта
     */
    clearFormForNextProduct() {
        const companyValue = document.getElementById('company').value;
        
        // Очищаем все поля кроме компании
        const fieldsToClear = [
            'manufacturer', 'country', 'city', 'brand',
            'category', 'productName', 'description',
            'price', 'packaging', 'weight', 'composition',
            'website'
        ];
        
        fieldsToClear.forEach(fieldId => {
            document.getElementById(fieldId).value = '';
        });
        
        // Сбрасываем фото
        this.photoInput.value = '';
        this.photoPreview.style.display = 'none';
        this.previewImage.src = '';
        
        // Сбрасываем ошибки
        this.resetErrors();
        
        // Обновляем заголовок
        this.updateProductTitle();
    },
    
    /**
     * Обновляет заголовок продукта
     */
    updateProductTitle() {
        if (!this.productTitle) return;
        
        const companyName = document.getElementById('company').value.trim();
        if (!companyName) {
            this.productTitle.textContent = 'Продукт 0';
            return;
        }
        
        const productCount = ProductStorage.getProductCount(companyName);
        if (this.isEditMode) {
            const productName = document.getElementById('productName').value;
            this.productTitle.textContent = productName ? 
                `Редактирование продукта: ${productName}` : 
                'Редактирование продукта';
        } else {
            this.productTitle.textContent = `Продукт ${productCount + 1}`;
        }
    },
    
    /**
     * Обновляет текст кнопки отправки
     */
    updateSubmitButtonText() {
        if (!this.submitButton) return;
        
        const companyName = document.getElementById('company').value.trim();
        const productCount = ProductStorage.getProductCount(companyName);
        
        if (this.isEditMode) {
            // В режиме редактирования - "Сохранить изменения"
            this.submitButton.innerHTML = '<i class="fas fa-save"></i> Сохранить изменения';
        } else if (productCount > 0) {
            // Если у компании уже есть продукты - "Добавить продукт"
            this.submitButton.innerHTML = '<i class="fas fa-plus-circle"></i> Добавить продукт';
        } else {
            // Для первой записи - "Сохранить продукт"
            this.submitButton.innerHTML = '<i class="fas fa-save"></i> Сохранить продукт';
        }
    },
    
    /**
     * Обновляет таблицу продуктов
     */
    updateTable() {
        const companyName = document.getElementById('company').value.trim();
        if (companyName) {
            ProductTable.render(companyName);
        } else {
            ProductTable.clear();
        }
    },
    
    /**
     * Показывает сообщение об успехе
     * @param {string} companyName - Название компании
     * @param {string} message - Сообщение
     */
    showSuccess(companyName, message) {
        const productCount = ProductStorage.getProductCount(companyName);
        
        this.successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i> 
            ${message}<br>
            Компания: ${companyName}<br>
            Всего продуктов: ${productCount}
        `;
        this.successMessage.style.display = 'block';
        this.successMessage.scrollIntoView({ behavior: 'smooth' });
        
        // Скрываем сообщение через 5 секунд
        setTimeout(() => {
            this.successMessage.style.display = 'none';
        }, 5000);
    },
    
    /**
     * Логирует результат в консоль
     * @param {string} companyName - Название компании
     */
    logResult(companyName) {
        console.log('=== Данные успешно сохранены ===');
        const company = ProductStorage.findCompanyByName(companyName);
        if (company) {
            console.log('Структура компании:', company);
            console.log('Дата создания:', new Date(company.createdAt).toLocaleString());
            console.log('Дата изменения:', new Date(company.editedAt).toLocaleString());
        }
        console.log('-------------------------');
    },
    
    /**
     * Заполняет форму демо-данными
     */
    fillDemoData() {
        if (!confirm("Заполнить форму демо-данными для тестирования?")) return;
        
        const demoData = {
            company: "ООО 'Молпродукт'",
            manufacturer: "ООО 'Молпродукт'",
            country: "Россия",
            city: "Москва",
            brand: "Молочная долина",
            category: "food",
            productName: "Йогурт натуральный питьевой 2,5%",
            description: "Натуральный питьевой йогурт без добавок, произведенный из отборного молока. Идеален для завтрака и перекуса. Содержит живые молочнокислые бактерии, способствующие улучшению пищеварения.",
            price: "89.99",
            packaging: "Пластиковая бутылка с крышкой",
            weight: "450 мл",
            composition: "Молоко нормализованное, закваска молочнокислых культур (Streptococcus thermophilus, Lactobacillus bulgaricus). Без консервантов, красителей и искусственных добавок.",
            website: "molochnayadolina.ru"
        };
        
        // Заполняем поля
        Object.keys(demoData).forEach(key => {
            const element = document.getElementById(key);
            if (element) element.value = demoData[key];
        });
        
        // Демо-фото
        this.previewImage.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNGI2Y2I3Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5EZW1vIFBob3RvPC90ZXh0Pgo8L3N2Zz4K";
        this.photoPreview.style.display = 'block';
        
        // Обновляем состояние формы
        this.currentCompany = demoData.company;
        this.updateSubmitButtonText();
        this.updateProductTitle();
        this.updateTable();
        
        console.log("Форма заполнена демо-данными. Готово к добавлению!");
    },
    
    /**
     * Показывает ошибку
     */
    showError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        if (!errorElement) return;
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        const fieldId = errorId.replace('-error', '');
        const field = document.getElementById(fieldId);
        if (field) {
            field.style.borderColor = '#e74c3c';
            field.style.boxShadow = '0 0 0 2px rgba(231, 76, 60, 0.2)';
        }
    },
    
    /**
     * Скрывает ошибку
     */
    hideError(errorId) {
        const errorElement = document.getElementById(errorId);
        if (!errorElement) return;
        
        errorElement.style.display = 'none';
        
        const fieldId = errorId.replace('-error', '');
        const field = document.getElementById(fieldId);
        if (field) {
            field.style.borderColor = '#ddd';
            field.style.boxShadow = 'none';
        }
    },
    
    /**
     * Сбрасывает все ошибки
     */
    resetErrors() {
        document.querySelectorAll('.error-message').forEach(error => {
            error.style.display = 'none';
        });
        
        document.querySelectorAll('input, textarea').forEach(field => {
            field.style.borderColor = '#ddd';
            field.style.boxShadow = 'none';
        });
    }
};

/**
 * Основная функция инициализации
 */
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем хранилище
    ProductStorage.init();
    
    // Инициализируем таблицу
    ProductTable.init();
    
    // Инициализируем форму
    ProductForm.init();
    
    // Проверяем существующие данные
    const companies = ProductStorage.getAllCompanies();
    console.log('Загруженные компании:', companies);
    
    // Выводим инструкции
    console.log('=== Инструкция по использованию ===');
    console.log('1. Введите название компании - сразу появится таблица с продуктами (если есть)');
    console.log('2. Нажмите "Сохранить продукт" для первого продукта');
    console.log('3. Для следующих продуктов кнопка меняется на "Добавить продукт"');
    console.log('4. В таблице отображаются все поля продуктов (наведите для полного текста)');
    console.log('5. Нажмите "Редактировать" в таблице для загрузки продукта в форму');
    console.log('6. При редактировании кнопка меняется на "Сохранить изменения"');
    console.log('7. Нажмите "Сохранить изменения" для обновления продукта');
    console.log('8. Нажмите "Удалить" в таблице для удаления продукта');
    console.log('9. Компания может иметь до 6 продуктов');
    console.log('10. Для демо-данных дважды кликните по заголовку');
    console.log('===============================');
});