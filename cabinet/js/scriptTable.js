const procurementData = {
  creationDate: "01.02.2026",
  purchaserName: "И.О. Посетительный",
  purchases: [
    // Последняя неделя (высший приоритет) - январь 2026
    {
      "id": 1,
      "product": "Молоко",
      "supplier": "Коровкин",
      "status": "В процессе",
      "amount": "150000",
      "date": "30.01.2026",
      "deliveryDate": "30.02.2026",
      "category": "молочная продукция"
    },
    {
      "id": 2,
      "product": "Кефир",
      "supplier": "Дом молока",
      "status": "На согласовании",
      "amount": "50000",
      "date": "31.01.2026",
      "deliveryDate": "31.02.2026",
      "category": "молочная продукция"
    },
    {
      "id": 3,
      "product": "Молочные коктейли",
      "supplier": "Дом молока",
      "status": "Ожидается",
      "amount": "350000",
      "date": "29.01.2026",
      "deliveryDate": "29.02.2026",
      "category": "молочная продукция"
    },
    {
      "id": 4,
      "product": "Сметана",
      "supplier": "Коровкин",
      "status": "В процессе",
      "amount": "100000",
      "date": "28.01.2026",
      "deliveryDate": "28.02.2026",
      "category": "молочная продукция"
    },
    {
      "id": 5,
      "product": "Ряженка",
      "supplier": "Коровкин",
      "status": "Просрочено",
      "amount": "20000",
      "date": "27.01.2026",
      "deliveryDate": "20.01.2026",
      "category": "молочная продукция"
    },

    // Последний месяц (средний приоритет) - январь 2026
    {
      "id": 6,
      "product": "Сыр твёрдый",
      "supplier": "Сыркин",
      "status": "В процессе",
      "amount": "1150000",
      "date": "15.01.2026",
      "deliveryDate": "15.03.2026",
      "category": "молочная продукция"
    },
    {
      "id": 7,
      "product": "Плавленый сыр",
      "supplier": "Сыркин",
      "status": "На согласовании",
      "amount": "890000",
      "date": "10.01.2026",
      "deliveryDate": "10.03.2026",
      "category": "молочная продукция"
    },
    {
      "id": 8,
      "product": "Творог",
      "supplier": "Коровкин",
      "status": "Ожидается",
      "amount": "75000",
      "date": "05.01.2026",
      "deliveryDate": "05.02.2026",
      "category": "молочная продукция"
    },
    {
      "id": 9,
      "product": "Йогурт питьевой",
      "supplier": "Дом молока",
      "status": "Завершено",
      "amount": "120000",
      "date": "02.01.2026",
      "deliveryDate": "20.01.2026",
      "category": "молочная продукция"
    },

    // Не далее 3 месяцев от сегодня (низший приоритет) - ноябрь 2025 - январь 2026
    {
      "id": 10,
      "product": "Масло сливочное",
      "supplier": "Коровкин",
      "status": "В процессе",
      "amount": "200000",
      "date": "01.12.2025",
      "deliveryDate": "01.03.2026",
      "category": "молочная продукция"
    },
    {
      "id": 11,
      "product": "Пастеризованное молоко",
      "supplier": "Молочные реки",
      "status": "На согласовании",
      "amount": "180000",
      "date": "15.11.2025",
      "deliveryDate": "15.02.2026",
      "category": "молочная продукция"
    },
    {
      "id": 12,
      "product": "Сливки",
      "supplier": "Коровкин",
      "status": "Просрочено",
      "amount": "45000",
      "date": "05.11.2025",
      "deliveryDate": "20.01.2026",
      "category": "молочная продукция"
    },

    // Разброс в полтора года назад - с августа 2024
    {
      "id": 13,
      "product": "Сыр моцарелла",
      "supplier": "Сыркин",
      "status": "В процессе",
      "amount": "320000",
      "date": "15.08.2024",
      "deliveryDate": "15.02.2026",
      "category": "молочная продукция"
    },
    {
      "id": 14,
      "product": "Простокваша",
      "supplier": "Дом молока",
      "status": "Ожидается",
      "amount": "60000",
      "date": "15.07.2024",
      "deliveryDate": "15.05.2026",
      "category": "молочная продукция"
    },
    {
      "id": 15,
      "product": "Творожная масса",
      "supplier": "Молочные реки",
      "status": "Завершено",
      "amount": "85000",
      "date": "15.06.2024",
      "deliveryDate": "15.10.2024",
      "category": "молочная продукция"
    },
    {
      "id": 16,
      "product": "Мороженое пломбир",
      "supplier": "Лакомка",
      "status": "В процессе",
      "amount": "410000",
      "date": "15.05.2024",
      "deliveryDate": "15.11.2026",
      "category": "молочная продукция"
    },
    {
      "id": 17,
      "product": "Кумыс",
      "supplier": "Степные традиции",
      "status": "На согласовании",
      "amount": "95000",
      "date": "15.04.2024",
      "deliveryDate": "15.08.2026",
      "category": "молочная продукция"
    },
    {
      "id": 18,
      "product": "Сыр гауда",
      "supplier": "Сыркин",
      "status": "Просрочено",
      "amount": "275000",
      "date": "15.03.2024",
      "deliveryDate": "15.09.2025",
      "category": "молочная продукция"
    },
    {
      "id": 19,
      "product": "Ацидофилин",
      "supplier": "Дом молока",
      "status": "Завершено",
      "amount": "55000",
      "date": "15.02.2024",
      "deliveryDate": "15.07.2024",
      "category": "молочная продукция"
    },
    {
      "id": 20,
      "product": "Катык",
      "supplier": "Степные традиции",
      "status": "В процессе",
      "amount": "70000",
      "date": "15.01.2024",
      "deliveryDate": "15.07.2026",
      "category": "молочная продукция"
    },

    // Овощи (те же правила дат)
    {
      "id": 21,
      "product": "Картофель",
      "supplier": "Овощевод",
      "status": "В процессе",
      "amount": "250000",
      "date": "29.01.2026",
      "deliveryDate": "29.02.2026",
      "category": "овощи"
    },
    {
      "id": 22,
      "product": "Морковь",
      "supplier": "Поля России",
      "status": "На согласовании",
      "amount": "180000",
      "date": "10.01.2026",
      "deliveryDate": "10.03.2026",
      "category": "овощи"
    },
    {
      "id": 23,
      "product": "Лук репчатый",
      "supplier": "Овощевод",
      "status": "Ожидается",
      "amount": "120000",
      "date": "15.12.2025",
      "deliveryDate": "15.03.2026",
      "category": "овощи"
    },
    {
      "id": 24,
      "product": "Капуста белокочанная",
      "supplier": "Агрохолдинг",
      "status": "Завершено",
      "amount": "90000",
      "date": "15.11.2025",
      "deliveryDate": "15.12.2025",
      "category": "овощи"
    },
    {
      "id": 25,
      "product": "Огурцы свежие",
      "supplier": "Тепличный комбинат",
      "status": "В процессе",
      "amount": "150000",
      "date": "01.12.2025",
      "deliveryDate": "01.03.2026",
      "category": "овощи"
    },
    {
      "id": 26,
      "product": "Помидоры",
      "supplier": "Тепличный комбинат",
      "status": "Просрочено",
      "amount": "200000",
      "date": "01.11.2025",
      "deliveryDate": "01.01.2026",
      "category": "овощи"
    },
    {
      "id": 27,
      "product": "Свекла",
      "supplier": "Поля России",
      "status": "На согласовании",
      "amount": "75000",
      "date": "15.08.2024",
      "deliveryDate": "15.02.2026",
      "category": "овощи"
    },
    {
      "id": 28,
      "product": "Чеснок",
      "supplier": "Овощевод",
      "status": "Ожидается",
      "amount": "95000",
      "date": "15.06.2024",
      "deliveryDate": "15.12.2025",
      "category": "овощи"
    },
    {
      "id": 29,
      "product": "Перец сладкий",
      "supplier": "Тепличный комбинат",
      "status": "В процессе",
      "amount": "110000",
      "date": "15.04.2024",
      "deliveryDate": "15.08.2026",
      "category": "овощи"
    },
    {
      "id": 30,
      "product": "Баклажаны",
      "supplier": "Агрохолдинг",
      "status": "Завершено",
      "amount": "85000",
      "date": "15.02.2024",
      "deliveryDate": "15.06.2024",
      "category": "овощи"
    },

    // Напитки (те же правила дат)
    {
      "id": 31,
      "product": "Сок яблочный",
      "supplier": "Фруктовый сад",
      "status": "В процессе",
      "amount": "180000",
      "date": "31.01.2026",
      "deliveryDate": "31.02.2026",
      "category": "напитки"
    },
    {
      "id": 32,
      "product": "Сок апельсиновый",
      "supplier": "Фруктовый сад",
      "status": "На согласовании",
      "amount": "160000",
      "date": "10.01.2026",
      "deliveryDate": "10.03.2026",
      "category": "напитки"
    },
    {
      "id": 33,
      "product": "Вода минеральная",
      "supplier": "Родники",
      "status": "Ожидается",
      "amount": "120000",
      "date": "15.08.2024",
      "deliveryDate": "15.02.2027",
      "category": "напитки"
    },
    {
      "id": 34,
      "product": "Чай черный",
      "supplier": "Восточные традиции",
      "status": "Завершено",
      "amount": "95000",
      "date": "15.06.2024",
      "deliveryDate": "15.10.2024",
      "category": "напитки"
    },
    {
      "id": 35,
      "product": "Кофе зерновой",
      "supplier": "Кофейная плантация",
      "status": "В процессе",
      "amount": "250000",
      "date": "01.12.2025",
      "deliveryDate": "01.03.2026",
      "category": "напитки"
    },
    {
      "id": 36,
      "product": "Лимонад",
      "supplier": "Напитки и Ко",
      "status": "Просрочено",
      "amount": "85000",
      "date": "01.11.2025",
      "deliveryDate": "01.01.2026",
      "category": "напитки"
    },
    {
      "id": 37,
      "product": "Энергетический напиток",
      "supplier": "Энергия",
      "status": "На согласовании",
      "amount": "110000",
      "date": "15.08.2024",
      "deliveryDate": "15.02.2026",
      "category": "напитки"
    },
    {
      "id": 38,
      "product": "Квас",
      "supplier": "Традиционный вкус",
      "status": "Ожидается",
      "amount": "75000",
      "date": "15.06.2024",
      "deliveryDate": "15.12.2025",
      "category": "напитки"
    },
    {
      "id": 39,
      "product": "Сок томатный",
      "supplier": "Фруктовый сад",
      "status": "В процессе",
      "amount": "65000",
      "date": "15.04.2024",
      "deliveryDate": "15.08.2026",
      "category": "напитки"
    },
    {
      "id": 40,
      "product": "Чай зеленый",
      "supplier": "Восточные традиции",
      "status": "Завершено",
      "amount": "88000",
      "date": "15.02.2024",
      "deliveryDate": "15.06.2024",
      "category": "напитки"
    }
  ]
};
// Константы для работы с таблицей
const STATUSES = ["На согласовании", "Ожидается", "Завершено", "В процессе", "Просрочено"];

// Глобальные переменные для таблицы
let currentSortField = null;
let sortDirection = 'asc';
let currentSupplierFilter = null;

// Маппинг статусов для сортировки
const statusOrder = {
  "В процессе": 1,
  "На согласовании": 2,
  "Ожидается": 3,
  "Завершено": 4,
  "Просрочено": 5
};

// Главная функция инициализации таблицы
function initTable() {
  console.log('Инициализация таблицы...');
  console.log('Закупщик:', procurementData.purchaserName);
  console.log('Дата создания:', procurementData.creationDate);
  console.log('Количество закупок:', procurementData.purchases.length);

  populateTable();
  initializeTableSorting();
  initializeSupplierFilter();
  updateTableTitle();
  updateCounters();

  // Инициализируем обработчик для выбора категории
  const categorySelect = document.getElementById('category');
  if (categorySelect) {
    categorySelect.addEventListener('change', function () {
      // Если категория меняется, сбрасываем фильтр поставщика
      currentSupplierFilter = null;
      updateSupplierFilterButton();
      populateTable();
      updateCounters();
      // Обновляем график если он существует
      if (typeof renderChart === 'function') {
        renderChart();
      }
    });
  }
}

// Инициализация при полной загрузке страницы
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTable);
} else {
  initTable();
}

// Обновление заголовка таблицы
function updateTableTitle() {
  const tableTitle = document.querySelector('.table-block__title');
  if (tableTitle) {
    let title = 'Текущие закупки';
    if (currentSupplierFilter) {
      title += ` (фильтр: ${currentSupplierFilter})`;
    }
    tableTitle.textContent = `${title} (${getFilteredPurchases().length})`;
  }
}

// Получение отфильтрованных закупок (доступно для других скриптов)
function getFilteredPurchases() {
  let filteredPurchases = [...procurementData.purchases];

  // Применяем фильтр по поставщику
  if (currentSupplierFilter) {
    filteredPurchases = filteredPurchases.filter(purchase =>
      purchase.supplier === currentSupplierFilter
    );
  }

  // Применяем фильтр по категории
  const selectedCategory = document.getElementById('category')?.value;
  if (selectedCategory && selectedCategory !== 'Молочная продукция') {
    if (selectedCategory === 'Овощи и фрукты') {
      filteredPurchases = filteredPurchases.filter(purchase =>
        purchase.product.toLowerCase().includes('овощ') ||
        purchase.product.toLowerCase().includes('фрукт')
      );
    } else if (selectedCategory === 'Напитки') {
      filteredPurchases = filteredPurchases.filter(purchase =>
        purchase.product.toLowerCase().includes('напиток') ||
        purchase.product.toLowerCase().includes('сок')
      );
    }
  }

  return filteredPurchases;
}

// Обновление счетчиков статусов
function updateCounters() {
  const purchases = getFilteredPurchases();

  // Создаем объект для хранения сумм по статусам
  const statusSums = {};
  STATUSES.forEach(status => {
    statusSums[status] = 0;
  });

  // Считаем суммы по каждому статусу
  purchases.forEach(purchase => {
    const amount = parseInt(purchase.amount) || 0;
    if (statusSums[purchase.status] !== undefined) {
      statusSums[purchase.status] += amount;
    }
  });

  // Обновляем значения в стат-блоках
  const statBlocks = document.querySelectorAll('.stat');
  if (statBlocks.length >= 3) {
    // Активные заявки (В процессе)
    if (statBlocks[0]) {
      const processSum = statusSums["В процессе"] + statusSums["На согласовании"];
      statBlocks[0].querySelector('.stat__value').textContent =
        formatCurrencyShort(processSum);
    }

    // На согласовании
    if (statBlocks[1]) {
      statBlocks[1].querySelector('.stat__value').textContent =
        formatCurrencyShort(statusSums["На согласовании"]);
    }

    // Требует внимания (Просрочено)
    if (statBlocks[2]) {
      statBlocks[2].querySelector('.stat__value').textContent =
        formatCurrencyShort(statusSums["Просрочено"]);
    }
  }
}

// Форматирование суммы в кратком виде
function formatCurrencyShort(amount) {
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(1) + 'M';
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(0) + 'K';
  }
  return amount.toString();
}

// Заполнение таблицы данными
function populateTable(sortField = null, direction = 'asc') {
  const tbody = document.querySelector('.table tbody');
  if (!tbody) return;

  // Получаем отфильтрованные данные
  let dataToDisplay = getFilteredPurchases();

  // Сортируем данные если нужно
  if (sortField) {
    dataToDisplay = sortPurchases(dataToDisplay, sortField, direction);
  }

  // Очищаем таблицу
  tbody.innerHTML = '';

  // Заполняем таблицу данными
  dataToDisplay.forEach(purchase => {
    const row = document.createElement('tr');

    // Определяем класс статуса для CSS
    let statusClass = '';
    switch (purchase.status) {
      case 'В процессе':
        statusClass = 'status--progress';
        break;
      case 'На согласовании':
        statusClass = 'status--approve';
        break;
      case 'Ожидается':
        statusClass = 'status--wait';
        break;
      case 'Завершено':
        statusClass = 'status--progress';
        break;
      case 'Просрочено':
        statusClass = 'status--late';
        break;
    }

    // Форматируем сумму с пробелами
    const formattedAmount = formatCurrency(parseInt(purchase.amount));

    // Проверяем, активен ли фильтр для этого поставщика
    const isActiveFilter = currentSupplierFilter === purchase.supplier;
    const activeClass = isActiveFilter ? 'active-filter' : '';

    row.innerHTML = `
      <td>${purchase.product}</td>
      <td>
        <span class="supplier-link ${activeClass}" data-supplier="${purchase.supplier}">
          ${purchase.supplier}
        </span>
      </td>
      <td><span class="status ${statusClass}">${purchase.status}</span></td>
      <td>${formattedAmount} ₽</td>
      <td>${purchase.deliveryDate}</td>
    `;

    tbody.appendChild(row);
  });

  // Добавляем обработчики кликов на поставщиков
  addSupplierClickHandlers();
}

// Форматирование валюты
function formatCurrency(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');
}

// Сортировка закупок
function sortPurchases(purchases, field, direction = 'asc') {
  return [...purchases].sort((a, b) => {
    let aValue, bValue;

    switch (field) {
      case 'status':
        // Используем порядок статусов для сортировки
        aValue = statusOrder[a.status] || 99;
        bValue = statusOrder[b.status] || 99;
        break;
      case 'amount':
        aValue = parseInt(a.amount);
        bValue = parseInt(b.amount);
        break;
      case 'deliveryDate':
        // Конвертируем даты в timestamp для сортировки
        aValue = parseDateToTimestamp(a.deliveryDate);
        bValue = parseDateToTimestamp(b.deliveryDate);
        break;
      default:
        return 0;
    }

    // Сравниваем значения
    let comparison = 0;
    if (aValue < bValue) comparison = -1;
    if (aValue > bValue) comparison = 1;

    // Инвертируем для обратной сортировки
    return direction === 'desc' ? comparison * -1 : comparison;
  });
}

// Парсинг даты в timestamp
function parseDateToTimestamp(dateStr) {
  if (!dateStr) return 0;

  // Формат DD.MM.YYYY
  const parts = dateStr.split('.');
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    return new Date(year, month, day).getTime();
  }

  return 0;
}

// Инициализация сортировки таблицы
function initializeTableSorting() {
  const table = document.querySelector('.table');
  if (!table) return;

  const headers = table.querySelectorAll('thead th');

  headers.forEach((header, index) => {
    const headerText = header.textContent.trim();

    // Добавляем сортировку только для нужных колонок
    if (headerText === 'Статус' || headerText === 'Сумма' || headerText === 'Срок поставки') {
      header.style.cursor = 'pointer';
      header.style.position = 'relative';
      header.setAttribute('data-sortable', 'true');

      // Добавляем индикатор сортировки
      const sortIndicator = document.createElement('span');
      sortIndicator.className = 'sort-indicator';
      sortIndicator.innerHTML = '↕';
      sortIndicator.style.marginLeft = '5px';
      sortIndicator.style.opacity = '0.5';
      header.appendChild(sortIndicator);

      header.addEventListener('click', () => {
        let field;
        switch (headerText) {
          case 'Статус':
            field = 'status';
            break;
          case 'Сумма':
            field = 'amount';
            break;
          case 'Срок поставки':
            field = 'deliveryDate';
            break;
          default:
            return;
        }

        // Определяем направление сортировки
        if (currentSortField === field) {
          // Переключаем направление
          sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          // Новая сортировка
          currentSortField = field;
          sortDirection = 'asc';
        }

        // Обновляем индикаторы
        updateSortIndicators(field, sortDirection);

        // Сортируем и перерисовываем таблицу
        populateTable(field, sortDirection);
      });
    }
  });
}

// Обновление индикаторов сортировки
function updateSortIndicators(field, direction) {
  const headers = document.querySelectorAll('.table thead th[data-sortable="true"]');

  headers.forEach(header => {
    const indicator = header.querySelector('.sort-indicator');
    const headerText = header.textContent.replace('↕', '').replace('↑', '').replace('↓', '').trim();

    let currentField;
    switch (headerText) {
      case 'Статус':
        currentField = 'status';
        break;
      case 'Сумма':
        currentField = 'amount';
        break;
      case 'Срок поставки':
        currentField = 'deliveryDate';
        break;
      default:
        return;
    }

    if (currentField === field) {
      indicator.innerHTML = direction === 'asc' ? '↑' : '↓';
      indicator.style.opacity = '1';
      indicator.style.color = '#0B63A8';
    } else {
      indicator.innerHTML = '↕';
      indicator.style.opacity = '0.5';
      indicator.style.color = 'inherit';
    }
  });
}

// Инициализация фильтра по поставщикам
function initializeSupplierFilter() {
  // Создаем кнопку для сброса фильтра
  const filterControls = document.createElement('div');
  filterControls.className = 'supplier-filter-controls';
  filterControls.style.marginBottom = '15px';
  filterControls.style.display = 'flex';
  filterControls.style.alignItems = 'center';
  filterControls.style.gap = '10px';
  filterControls.style.flexWrap = 'wrap';

  const resetButton = document.createElement('button');
  resetButton.className = 'btn btn--outline';
  resetButton.id = 'resetSupplierFilter';
  resetButton.textContent = 'Все поставщики';
  resetButton.style.display = 'none';

  const filterInfo = document.createElement('div');
  filterInfo.className = 'supplier-filter-info';
  filterInfo.style.fontSize = '14px';
  filterInfo.style.color = '#666';
  // Устанавливаем текст сразу при создании элемента
  filterInfo.textContent = 'Кликните на имя поставщика для фильтрации';

  filterControls.appendChild(resetButton);
  filterControls.appendChild(filterInfo);

  // Вставляем перед таблицей
  const tableBlock = document.querySelector('.table-block');
  const tableWrap = document.querySelector('.table-wrap');
  if (tableBlock && tableWrap) {
    // Проверяем, не добавлены ли уже элементы управления
    const existingControls = tableBlock.querySelector('.supplier-filter-controls');
    if (!existingControls) {
      tableBlock.insertBefore(filterControls, tableWrap);
    }
  }

  // Обработчик для кнопки сброса
  resetButton.addEventListener('click', () => {
    currentSupplierFilter = null;
    updateSupplierFilterButton();
    populateTable();
    updateTableTitle();
    updateCounters();
    // Обновляем график если он существует
    if (typeof renderChart === 'function') {
      renderChart();
    }
  });

  // Инициализируем состояние кнопки фильтра
  updateSupplierFilterButton();
}

// Добавление обработчиков кликов на поставщиков
function addSupplierClickHandlers() {
  const supplierLinks = document.querySelectorAll('.supplier-link');

  supplierLinks.forEach(link => {
    link.style.cursor = 'pointer';
    link.style.color = '#0B63A8';
    link.style.textDecoration = 'underline';
    link.style.textDecorationStyle = 'dotted';

    // Добавляем класс активного фильтра если нужно
    const supplier = link.getAttribute('data-supplier');
    if (currentSupplierFilter === supplier) {
      link.classList.add('active-filter');
    } else {
      link.classList.remove('active-filter');
    }

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const supplier = link.getAttribute('data-supplier');

      // Если уже фильтруем по этому поставщику - сбрасываем фильтр
      if (currentSupplierFilter === supplier) {
        currentSupplierFilter = null;
      } else {
        currentSupplierFilter = supplier;
      }

      updateSupplierFilterButton();
      populateTable();
      updateTableTitle();
      updateCounters();
      // Обновляем график если он существует
      if (typeof renderChart === 'function') {
        renderChart();
      }
    });
  });
}

// Обновление кнопки фильтра поставщика
function updateSupplierFilterButton() {
  const resetButton = document.getElementById('resetSupplierFilter');
  const filterInfo = document.querySelector('.supplier-filter-info');

  if (resetButton && filterInfo) {
    if (currentSupplierFilter) {
      resetButton.style.display = 'inline-block';
      resetButton.textContent = `Сбросить фильтр (${currentSupplierFilter})`;
      filterInfo.textContent = `Показаны товары поставщика: ${currentSupplierFilter}`;
      filterInfo.style.color = '#0B63A8';
      filterInfo.style.fontWeight = '500';
      filterInfo.style.borderLeftColor = '#0B63A8';
    } else {
      resetButton.style.display = 'none';
      filterInfo.textContent = 'Кликните на имя поставщика для фильтрации';
      filterInfo.style.color = '#666';
      filterInfo.style.fontWeight = 'normal';
      filterInfo.style.borderLeftColor = '#0B63A8';
    }
  }
}

// Добавляем кастомные стили для таблицы
function addTableStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Стили для сортировки таблицы */
    .table thead th[data-sortable="true"] {
      cursor: pointer;
      user-select: none;
      position: relative;
      padding-right: 25px !important;
    }
    
    .table thead th[data-sortable="true"]:hover {
      background-color: #f0f7ff;
    }
    
    .sort-indicator {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);      
      transition: all 0.2s;
    }
    
    /* Стили для таблицы с фиксированной высотой */
    .table-wrap {
      max-height: 340px;
      overflow-y: auto;
      position: relative;
    }
    
    .table-wrap::-webkit-scrollbar {
      width: 8px;
    }
    
    .table-wrap::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    .table-wrap::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 4px;
    }
    
    .table-wrap::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8;
    }
    
    .table thead {
      position: sticky;
      top: 0;
      z-index: 10;
      background: #fff;
      box-shadow: 0 2px 2px -1px rgba(0,0,0,0.1);
    }
    
    /* Стили для ссылок поставщиков */
    .supplier-link {
      cursor: pointer;
      color: var(--blue-900);
      text-decoration: underline;
      text-decoration-style: dotted;
      transition: all 0.2s;
      padding: 2px 4px;
      border-radius: 4px;
    }
    
    .supplier-link:hover {
      color: var(--blue-900);
      text-decoration-style: solid;
      background-color: #f0f7ff;
    }
    
    /* Стили для управления фильтрами */
    .supplier-filter-controls {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    
    #resetSupplierFilter {
      background-color: var(--lightBlue);
      border-color: var(--blue-900);
      color: var(--blue-900);
      padding: 8px 16px;
    }
    
    #resetSupplierFilter:hover {
      background-color: var(--progress-soft);
      transform: translateY(-1px);
    }
    
    .supplier-filter-info {
      color: #666;
      padding: 8px 16px;
      background-color: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid var(--blue-900);
      transition: all 0.3s ease;
    }
    

    
    /* Подсветка активного фильтра в таблице */
    .supplier-link.active-filter {
      color: var(--blue-900);
      background-color: var(--progress-soft);
      padding: 2px 8px;
      border-radius: 4px;
      text-decoration: none;
    }
    
    /* Статистические блоки */
    .stat__value {
      font-size: 2.5rem !important;
      
    }
    
    /* Анимации */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .supplier-filter-controls {
      animation: fadeIn 0.3s ease-out;
    }
    
    .supplier-filter-info.active-filter::before {
      content: "✅ ";
    }
    
    /* Адаптивность */
    @media (max-width: 768px) {
      .supplier-filter-controls {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .table {
        font-size: 12px;
      }
      
      .table th,
      .table td {
        padding: 6px 8px;
      }
      
      .stat__value {
        font-size: 2rem !important;
      }
      
      .supplier-filter-info {
        width: 100%;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(style);
}

// Инициализация стилей
addTableStyles();

function updateSupplierFilter(supplier) {
  currentSupplierFilter = supplier;
  if (typeof window.updateSupplierFilter === 'function') {
    window.updateSupplierFilter(supplier);
  }
  populateTable();
  updateTableTitle();
  updateCounters();
}