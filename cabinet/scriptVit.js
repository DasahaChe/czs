// Глобальная переменная для отслеживания количества сотрудников
let employeeCount = 1;

// Функция для добавления нового сотрудника
function addEmployee() {
    employeeCount++;
    const container = document.getElementById('employees-container');

    const newEmployee = document.createElement('div');
    newEmployee.className = 'multi-field';
    newEmployee.innerHTML = `
    <div class="multi-field-header">
        <h3>Сотрудник ${employeeCount}</h3>
        <button type="button" class="btn btn-danger btn-sm" onclick="removeEmployee(this)">
            <i class="fas fa-trash"></i> Удалить
        </button>
    </div>

    <div class="form-grid">
        <div class="form-group">
            <label for="employee${employeeCount}_name" class="required">ФИО</label>
            <input type="text" id="employee${employeeCount}_name" class="form-control" placeholder="Иванов Иван Иванович" required>
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_position" class="required">Должность</label>
            <input type="text" id="employee${employeeCount}_position" class="form-control" placeholder="Менеджер по закупкам" required>
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_role" class="required">Роль</label>
            <select id="employee${employeeCount}_role" class="form-control" required>
                <option value="">Выберите роль</option>
                <option value="category_manager">Категорийный менеджер</option>
                <option value="quality">Качество</option>
                <option value="logistics">Логистика</option>
                <option value="finance">Финансы</option>
                <option value="lawyer">Юрист</option>
                <option value="admin">Администратор</option>
            </select>
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_department">Подразделение / департамент</label>
            <input type="text" id="employee${employeeCount}_department" class="form-control" placeholder="Департамент закупок">
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_email" class="required">Корпоративный email (логин)</label>
            <input type="email" id="employee${employeeCount}_email" class="form-control" placeholder="ivanov@company.com" required>
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_phone">Телефон</label>
            <input type="tel" id="employee${employeeCount}_phone" class="form-control" placeholder="+7 (XXX) XXX-XX-XX">
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_categories">Категории ответственности</label>
            <textarea id="employee${employeeCount}_categories" class="form-control" placeholder="Категории товаров, за которые отвечает сотрудник"></textarea>
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_regions">Регионы ответственности</label>
            <textarea id="employee${employeeCount}_regions" class="form-control" placeholder="Регионы, за которые отвечает сотрудник"></textarea>
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_accessLevel" class="required">Уровень доступа</label>
            <select id="employee${employeeCount}_accessLevel" class="form-control" required>
                <option value="">Выберите уровень доступа</option>
                <option value="admin">Администратор</option>
                <option value="editor">Редактор</option>
                <option value="viewer">Просмотр</option>
            </select>
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_permissions">Права доступа</label>
            <div class="checkbox-group">
                <div class="checkbox-item">
                    <input type="checkbox" id="employee${employeeCount}_perm_org" name="employee${employeeCount}_permissions" value="org_management">
                        <label for="employee${employeeCount}_perm_org">Управление организацией</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="employee${employeeCount}_perm_emp" name="employee${employeeCount}_permissions" value="employee_management">
                        <label for="employee${employeeCount}_perm_emp">Управление сотрудниками</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="employee${employeeCount}_perm_app" name="employee${employeeCount}_permissions" value="applications">
                        <label for="employee${employeeCount}_perm_app">Заявки</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="employee${employeeCount}_perm_docs" name="employee${employeeCount}_permissions" value="documents">
                        <label for="employee${employeeCount}_perm_docs">Документы</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="employee${employeeCount}_perm_chat" name="employee${employeeCount}_permissions" value="negotiations_chat">
                        <label for="employee${employeeCount}_perm_chat">Переговоры и чат</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="employee${employeeCount}_perm_analytics" name="employee${employeeCount}_permissions" value="analytics">
                        <label for="employee${employeeCount}_perm_analytics">Аналитика</label>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="employee${employeeCount}_status" class="required">Статус пользователя</label>
            <select id="employee${employeeCount}_status" class="form-control" required>
                <option value="active">Активен</option>
                <option value="inactive">Неактивен</option>
            </select>
        </div>
    </div>
    `;

    container.appendChild(newEmployee);

    // Прокручиваем к новому элементу
    newEmployee.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Функция для удаления сотрудника
function removeEmployee(button) {
    const container = document.getElementById('employees-container');
    const employeeFields = container.querySelectorAll('.multi-field');

    // Не удаляем, если остался только один сотрудник
    if (employeeFields.length > 1) {
        const employeeToRemove = button.closest('.multi-field');
        employeeToRemove.remove();

        // Обновляем заголовки оставшихся сотрудников
        const remainingEmployees = container.querySelectorAll('.multi-field');
        remainingEmployees.forEach((field, index) => {
            const header = field.querySelector('h3');
            header.textContent = `Сотрудник ${index + 1}`;
        });

        employeeCount = remainingEmployees.length;
    } else {
        alert('Должен быть как минимум один сотрудник');
    }
}

// Автозаполнение ОГРН и юридического адреса при вводе ИНН
document.getElementById('inn').addEventListener('change', function () {
    const inn = this.value;

    // Эмуляция автозаполнения (в реальном приложении здесь был бы запрос к API)
    if (inn && inn.length >= 10) {
        document.getElementById('ogrn').value = '1234567890123';
        document.getElementById('legalAddress').value = 'г. Москва, ул. Примерная, д. 1';
    }
});

// Обработка отправки формы
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Здесь должна быть логика валидации и отправки данных
    // Для демонстрации просто показываем сообщение

    // Проверяем обязательные поля
    const requiredFields = this.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'var(--danger)';
        } else {
            field.style.borderColor = '';
        }
    });

    if (isValid) {
        alert('Данные успешно сохранены!');
        // В реальном приложении здесь была бы отправка данных на сервер
        // this.submit();
    } else {
        alert('Пожалуйста, заполните все обязательные поля (помечены *)');
    }
});

// Сброс стилей при изменении поля
document.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', function () {
        if (this.hasAttribute('required') && this.value.trim()) {
            this.style.borderColor = '';
        }
    });
});
