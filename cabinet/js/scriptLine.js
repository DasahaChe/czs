// Константы для графика
const STATUS_COLORS = {
  "В процессе": "#4A6FFF",
  "На согласовании": "#00C896",
  "Завершено": "#9D4EDD",
  "Просрочено": "#FF4757",
  "Ожидается": "#FFA500"
};

// Глобальные переменные для графика
let currentPeriod = 'week'; // По умолчанию последняя неделя
let currentChartData = null;
let customDateRange = {
  start: null,
  end: null
};

// Главная функция инициализации графика
function initChart() {
  console.log('Инициализация графика...');
  
  // Проверяем, существует ли контейнер для графика
  const chartContainer = document.getElementById('up');
  if (!chartContainer) {
    console.error('Контейнер для графика не найден');
    return;
  }
  
  initializeChartButtons();
  renderChart();
}

// Инициализация при полной загрузке страницы
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChart);
} else {
  // Если таблица уже загружена, инициализируем график
  setTimeout(initChart, 100);
}

// Инициализация кнопок периода для графика
function initializeChartButtons() {
  const rangePanel = document.querySelector('.range-panel__buttons');
  if (!rangePanel) return;
  
  const periodButtons = rangePanel.querySelectorAll('.btn--outline');
  
  // Устанавливаем активную кнопку (последние 7 дней)
  periodButtons.forEach(btn => {
    btn.classList.remove('btn-active');
  });
  
  const weekButton = document.getElementById('week');
  if (weekButton) {
    weekButton.classList.add('btn-active');
  }
  
  periodButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Удаляем активный класс у всех кнопок
      periodButtons.forEach(btn => {
        btn.classList.remove('btn-active');
      });
      
      // Добавляем активный класс текущей кнопке
      this.classList.add('btn-active');
      
      // Устанавливаем текущий период
      currentPeriod = this.id;
      
      // Скрываем календарь если он был открыт
      hideDatePicker();
      
      // Перестраиваем график
      renderChart();
    });
  });
  
  // Особый обработчик для кнопки "Задать интервал"
  const timeButton = document.getElementById('time');
  if (timeButton) {
    timeButton.addEventListener('click', function() {
      // Удаляем активный класс у всех кнопок
      periodButtons.forEach(btn => {
        btn.classList.remove('btn-active');
      });
      
      // Добавляем активный класс текущей кнопке
      this.classList.add('btn-active');
      
      // Устанавливаем текущий период
      currentPeriod = 'time';
      
      // Показываем календарь
      showDatePicker();
    });
  }
  
  // Обработчик для кнопки "Показать"
  const showButton = document.querySelector('.btn--primary.btn--wide');
  if (showButton) {
    showButton.addEventListener('click', function() {
      renderChart();
    });
  }
}

// Показать календарь для выбора интервала
function showDatePicker() {
  let datePicker = document.querySelector('.date-picker');
  
  if (!datePicker) {
    datePicker = document.createElement('div');
    datePicker.className = 'date-picker';
    
    // Устанавливаем даты по умолчанию (последние 30 дней)
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    
    datePicker.innerHTML = `
      <div class="date-picker__container">
        <div class="date-picker__title">Выберите интервал</div>
        <div class="date-picker__inputs">
          <div class="date-picker__input-group">
            <label for="startDate">С:</label>
            <input type="date" id="startDate" class="date-input" value="${startDate.toISOString().split('T')[0]}">
          </div>
          <div class="date-picker__input-group">
            <label for="endDate">По:</label>
            <input type="date" id="endDate" class="date-input" value="${endDate.toISOString().split('T')[0]}">
          </div>
          <button class="btn btn--primary" id="applyDate">Применить</button>
          <button class="btn btn--outline" id="cancelDate">Отмена</button>
        </div>
      </div>
    `;
    
    // Вставляем после кнопок периода
    const rangePanel = document.querySelector('.range-panel');
    if (rangePanel) {
      rangePanel.appendChild(datePicker);
    }
    
    // Инициализируем обработчики
    document.getElementById('applyDate').addEventListener('click', function() {
      const startInput = document.getElementById('startDate');
      const endInput = document.getElementById('endDate');
      
      if (startInput.value && endInput.value) {
        customDateRange.start = new Date(startInput.value);
        customDateRange.end = new Date(endInput.value);
        
        if (customDateRange.start <= customDateRange.end) {
          renderChart();
          hideDatePicker();
        } else {
          alert('Дата начала должна быть раньше даты окончания');
        }
      } else {
        alert('Выберите обе даты');
      }
    });
    
    document.getElementById('cancelDate').addEventListener('click', function() {
      hideDatePicker();
      // Возвращаемся к недельному графику
      const weekButton = document.getElementById('week');
      if (weekButton) {
        weekButton.click();
      }
    });
  }
  
  datePicker.style.display = 'block';
}

// Скрыть календарь
function hideDatePicker() {
  const datePicker = document.querySelector('.date-picker');
  if (datePicker) {
    datePicker.style.display = 'none';
  }
}

// Получение данных для графика
function getChartData() {
  // Используем функцию из scriptTable.js
  if (typeof getFilteredPurchases !== 'function') {
    console.error('Функция getFilteredPurchases не найдена');
    return [];
  }
  
  const purchases = getFilteredPurchases();
  
  // Определяем период для графика
  const now = new Date();
  let startDate = new Date();
  let endDate = new Date();
  let intervals = [];
  let labels = [];
  
  switch(currentPeriod) {
    case 'day':
      // 1 день, показываем по часам
      startDate.setDate(now.getDate() - 1);
      intervals = generateHourIntervals(startDate, endDate);
      labels = intervals.map(d => `${new Date(d).getHours()}:00`);
      break;
      
    case 'week':
      // 7 дней, показываем по дням
      startDate.setDate(now.getDate() - 7);
      intervals = generateDayIntervals(startDate, endDate);
      labels = intervals.map(d => {
        const date = new Date(d);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}.${month}`;
      });
      break;
      
    case 'mouns':
      // 30 дней, показываем по дням
      startDate.setDate(now.getDate() - 30);
      intervals = generateDayIntervals(startDate, endDate, 30);
      labels = intervals.map(d => {
        const date = new Date(d);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}.${month}`;
      });
      break;
      
    case 'quatro':
      // 90 дней, показываем по неделям (примерно 13 недель)
      startDate.setDate(now.getDate() - 90);
      intervals = generateWeekIntervals(startDate, endDate);
      labels = intervals.map(d => {
        const date = new Date(d);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}.${month}`;
      });
      break;
      
    case 'year':
      // 365 дней, показываем 12 месяцев
      startDate.setDate(now.getDate() - 365);
      intervals = generateMonthIntervals(startDate, endDate);
      labels = intervals.map((d, i) => {
        const date = new Date(d);
        const monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        return monthNames[date.getMonth()];
      });
      break;
      
    case 'time':
      // Кастомный интервал, показываем по дням
      if (customDateRange.start && customDateRange.end) {
        startDate = new Date(customDateRange.start);
        endDate = new Date(customDateRange.end);
        
        // Ограничиваем разницу максимум 365 днями
        const diffDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        if (diffDays > 365) {
          alert('Интервал не должен превышать 365 дней');
          endDate = new Date(startDate);
          endDate.setDate(startDate.getDate() + 365);
        }
        
        intervals = generateDayIntervals(startDate, endDate);
        labels = intervals.map(d => {
          const date = new Date(d);
          const day = date.getDate().toString().padStart(2, '0');
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          return `${day}.${month}`;
        });
      } else {
        // По умолчанию 30 дней
        startDate.setDate(now.getDate() - 30);
        intervals = generateDayIntervals(startDate, endDate);
        labels = intervals.map(d => {
          const date = new Date(d);
          const day = date.getDate().toString().padStart(2, '0');
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          return `${day}.${month}`;
        });
      }
      break;
  }
  
  // Обновляем мета-информацию об интервале
  updateRangeMeta(startDate, endDate);
  
  // Инициализируем данные для графика
  const chartData = [];
  const statusTotals = {};
  
  // Используем статусы из scriptTable.js если доступны
  const STATUSES = window.STATUSES || ["На согласовании", "Ожидается", "Завершено", "В процессе", "Просрочено"];
  
  STATUSES.forEach(status => {
    statusTotals[status] = new Array(intervals.length).fill(0);
  });
  
  // Заполняем данные из закупок
  purchases.forEach(purchase => {
    const purchaseDate = parseDateToTimestamp(purchase.date);
    if (!purchaseDate) return;
    
    const amount = parseInt(purchase.amount) || 0;
    const status = purchase.status;
    
    // Находим индекс интервала для этого заказа
    let intervalIndex = findIntervalIndex(purchaseDate, intervals, currentPeriod);
    
    // Если нашли соответствующий интервал и статус нужный
    if (intervalIndex !== -1 && statusTotals[status]) {
      // Накопительная сумма - добавляем к предыдущим значениям
      for (let i = intervalIndex; i < intervals.length; i++) {
        statusTotals[status][i] += amount;
      }
    }
  });
  
  // Формируем финальные данные для графика
  intervals.forEach((interval, index) => {
    const dataPoint = {
      date: interval,
      label: labels[index]
    };
    
    STATUSES.forEach(status => {
      dataPoint[status] = statusTotals[status][index] || 0;
    });
    
    chartData.push(dataPoint);
  });
  
  currentChartData = chartData;
  return chartData;
}

// Генерация интервалов по часам
function generateHourIntervals(startDate, endDate) {
  const intervals = [];
  const current = new Date(startDate);
  
  // Округляем до начала часа
  current.setMinutes(0, 0, 0);
  
  while (current <= endDate) {
    intervals.push(current.getTime());
    current.setHours(current.getHours() + 1);
  }
  
  return intervals;
}

// Генерация интервалов по дням
function generateDayIntervals(startDate, endDate, maxDays = null) {
  const intervals = [];
  const current = new Date(startDate);
  
  // Округляем до начала дня
  current.setHours(0, 0, 0, 0);
  
  let dayCount = 0;
  while (current <= endDate && (!maxDays || dayCount < maxDays)) {
    intervals.push(current.getTime());
    current.setDate(current.getDate() + 1);
    dayCount++;
  }
  
  return intervals;
}

// Генерация интервалов по неделям
function generateWeekIntervals(startDate, endDate) {
  const intervals = [];
  const current = new Date(startDate);
  
  // Округляем до начала недели (понедельник)
  current.setDate(current.getDate() - current.getDay() + 1);
  current.setHours(0, 0, 0, 0);
  
  while (current <= endDate) {
    intervals.push(current.getTime());
    current.setDate(current.getDate() + 7);
  }
  
  return intervals;
}

// Генерация интервалов по месяцам (12 месяцев для года)
function generateMonthIntervals(startDate, endDate) {
  const intervals = [];
  const current = new Date(startDate);
  
  // Округляем до начала месяца
  current.setDate(1);
  current.setHours(0, 0, 0, 0);
  
  // Генерируем 12 интервалов
  for (let i = 0; i < 12; i++) {
    intervals.push(current.getTime());
    current.setMonth(current.getMonth() + 1);
  }
  
  return intervals;
}

// Нахождение индекса интервала для даты покупки
function findIntervalIndex(purchaseTimestamp, intervals, period) {
  const purchaseDate = new Date(purchaseTimestamp);
  
  for (let i = 0; i < intervals.length; i++) {
    const intervalDate = new Date(intervals[i]);
    
    switch(period) {
      case 'day':
        // Для дня сравниваем часы
        if (purchaseDate.getDate() === intervalDate.getDate() &&
            purchaseDate.getMonth() === intervalDate.getMonth() &&
            purchaseDate.getFullYear() === intervalDate.getFullYear() &&
            purchaseDate.getHours() === intervalDate.getHours()) {
          return i;
        }
        break;
        
      case 'year':
        // Для года сравниваем месяцы
        if (purchaseDate.getMonth() === intervalDate.getMonth() &&
            purchaseDate.getFullYear() === intervalDate.getFullYear()) {
          return i;
        }
        break;
        
      default:
        // Для остальных периодов сравниваем дни
        if (purchaseDate.getDate() === intervalDate.getDate() &&
            purchaseDate.getMonth() === intervalDate.getMonth() &&
            purchaseDate.getFullYear() === intervalDate.getFullYear()) {
          return i;
        }
    }
  }
  
  return -1;
}

// Парсинг даты в timestamp (дублируем для независимости)
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

// Обновление мета-информации об интервале
function updateRangeMeta(startDate, endDate) {
  const metaElement = document.querySelector('.range-panel__meta');
  if (!metaElement) return;
  
  if (currentPeriod === 'time' && customDateRange.start && customDateRange.end) {
    const startStr = formatDateForDisplay(customDateRange.start);
    const endStr = formatDateForDisplay(customDateRange.end);
    metaElement.textContent = `Интервал ${startStr} - ${endStr}`;
  } else {
    const startStr = formatDateForDisplay(startDate);
    const endStr = formatDateForDisplay(endDate);
    metaElement.textContent = `Интервал ${startStr} - ${endStr}`;
  }
}

// Форматирование даты для отображения
function formatDateForDisplay(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
}

// Форматирование суммы в кратком виде (дублируем для независимости)
function formatCurrencyShort(amount) {
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(1) + 'M';
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(0) + 'K';
  }
  return amount.toString();
}

// Отрисовка графика
function renderChart() {
  const chartContainer = document.getElementById('up');
  if (!chartContainer) return;
  
  const chartData = getChartData();
  
  // Очищаем контейнер
  chartContainer.innerHTML = '';
  
  if (chartData.length === 0) {
    chartContainer.innerHTML = '<div class="no-data">Нет данных для отображения</div>';
    return;
  }
  
  // Создаем canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'incomeChart';
  canvas.style.width = '100%';
  canvas.style.height = '400px';
  canvas.width = chartContainer.clientWidth;
  canvas.height = 400;
  chartContainer.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Настройки графика
  const padding = { top: 40, right: 40, bottom: 60, left: 80 };
  const graphWidth = canvas.width - padding.left - padding.right;
  const graphHeight = canvas.height - padding.top - padding.bottom;
  
  // Находим максимальное значение для масштабирования
  let maxValue = 0;
  chartData.forEach(point => {
    const STATUSES = window.STATUSES || ["На согласовании", "Ожидается", "Завершено", "В процессе", "Просрочено"];
    STATUSES.forEach(status => {
      if (point[status] > maxValue) maxValue = point[status];
    });
  });
  
  // Если все значения 0, устанавливаем максимальное значение для отображения
  if (maxValue === 0) maxValue = 100000;
  
  // Функция для преобразования значения в координаты Y
  const scaleY = value => padding.top + graphHeight - (value / maxValue) * graphHeight;
  
  // Функция для преобразования индекса в координаты X
  const scaleX = index => padding.left + (index / (chartData.length - 1 || 1)) * graphWidth;
  
  // Рисуем фон
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Рисуем оси
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, canvas.height - padding.bottom);
  ctx.lineTo(canvas.width - padding.right, canvas.height - padding.bottom);
  ctx.strokeStyle = '#D1D5DB';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Подписи осей
  ctx.fillStyle = '#374151';
  ctx.font = '14px Inter, Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('время', canvas.width / 2, canvas.height - 20);
  
  ctx.save();
  ctx.translate(30, canvas.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('вложения ₽', 0, 0);
  ctx.restore();
  
  // Заголовок графика
  ctx.textAlign = 'center';
  ctx.font = 'bold 16px Inter, Arial, sans-serif';
  ctx.fillText('График прироста дохода', canvas.width / 2, 25);
  
  // Сетка и подписи на оси Y
  ctx.font = '12px Inter, Arial, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillStyle = '#6B7280';
  
  const ySteps = 5;
  for (let i = 0; i <= ySteps; i++) {
    const value = (maxValue / ySteps) * i;
    const y = scaleY(value);
    
    // Горизонтальные линии сетки
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(canvas.width - padding.right, y);
    ctx.strokeStyle = '#F3F4F6';
    ctx.stroke();
    
    // Подписи на оси Y
    ctx.fillText(formatCurrencyShort(value), padding.left - 10, y + 4);
  }
  
  // Подписи на оси X
  ctx.textAlign = 'center';
  const step = Math.max(1, Math.floor(chartData.length / 10));
  
  chartData.forEach((point, index) => {
    const x = scaleX(index);
    
    // Вертикальные линии сетки (только для некоторых интервалов)
    if (index % step === 0 || index === chartData.length - 1) {
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, canvas.height - padding.bottom);
      ctx.strokeStyle = '#F3F4F6';
      ctx.stroke();
      
      // Подписи на оси X
      ctx.fillText(point.label, x, canvas.height - padding.bottom + 20);
    }
  });
  
  // Рисуем графики для каждого статуса
  const STATUSES = window.STATUSES || ["На согласовании", "Ожидается", "Завершено", "В процессе", "Просрочено"];
  
  STATUSES.forEach(status => {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    
    chartData.forEach((point, index) => {
      const x = scaleX(index);
      const y = scaleY(point[status]);
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.strokeStyle = STATUS_COLORS[status];
    ctx.stroke();
    
    // Добавляем точки (только в ключевых местах)
    chartData.forEach((point, index) => {
      if (index % step === 0 || index === chartData.length - 1) {
        const x = scaleX(index);
        const y = scaleY(point[status]);
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = STATUS_COLORS[status];
        ctx.fill();
        
        // Белая обводка для точек
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });
  });
  
  // Легенда
  const legendX = canvas.width - 180;
  let legendY = padding.top + 30;
  
  STATUSES.forEach(status => {
    ctx.fillStyle = STATUS_COLORS[status];
    ctx.fillRect(legendX, legendY, 12, 12);
    
    ctx.fillStyle = '#374151';
    ctx.font = '12px Inter, Arial, sans-serif';
    ctx.textAlign = 'left';
    
    // Форматируем итоговую сумму для легенды
    const total = chartData.length > 0 ? chartData[chartData.length - 1][status] : 0;
    const label = `${status}: ${formatCurrencyShort(total)}`;
    
    ctx.fillText(label, legendX + 20, legendY + 10);
    
    legendY += 20;
  });
}

// Добавляем кастомные стили для графика
function addChartStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Стили для графика */
    .chart-card {
      overflow: hidden;
    }
    
    .no-data {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 400px;
      color: #6B7280;
      font-size: 16px;
      background: #F9FAFB;
      border-radius: 8px;
    }
    
    /* Кнопки периода */
    .btn--outline.btn-active {
      background-color: #0B63A8;
      color: white;
      border-color: #0B63A8;
    }
    
    /* Стили для календаря */
    .date-picker {
      display: none;
      margin-top: 15px;
      padding: 20px;
      background: #F9FAFB;
      border-radius: 8px;
      border: 1px solid #E5E7EB;
    }
    
    .date-picker__container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .date-picker__title {
      font-weight: 500;
      color: #374151;
      margin-bottom: 10px;
    }
    
    .date-picker__inputs {
      display: flex;
      gap: 15px;
      align-items: center;
      flex-wrap: wrap;
    }
    
    .date-picker__input-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .date-picker__input-group label {
      font-size: 14px;
      color: #6B7280;
      min-width: 30px;
    }
    
    .date-input {
      padding: 8px 12px;
      border: 1px solid #D1D5DB;
      border-radius: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      background: white;
      min-width: 150px;
    }
    
    #applyDate, #cancelDate {
      height: 38px;
      padding: 0 16px;
    }
    
    /* Адаптивность */
    @media (max-width: 768px) {
      .date-picker__inputs {
        flex-direction: column;
        align-items: stretch;
      }
      
      .date-picker__input-group {
        justify-content: space-between;
      }
      
      .date-input {
        min-width: auto;
        flex: 1;
      }
    }
  `;
  document.head.appendChild(style);
}

// Инициализация стилей
addChartStyles();

// Инициализация при изменении размера окна
window.addEventListener('resize', function() {
  renderChart();
});