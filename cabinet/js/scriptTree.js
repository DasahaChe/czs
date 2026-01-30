// scriptTree.js
import { procurementData, getFilteredPurchases, STATUSES } from './scriptTable.js';

// Группировка статусов для диаграммы
const STATUS_GROUPS = {
    "Активные заявки": ["В процессе", "Завершено"],
    "На согласовании": ["На согласовании"],
    "Требует внимания": ["Ожидается", "Просрочено"]
};

// Цвета для столбцов
const GROUP_COLORS = {
    "Активные заявки": "#4A6FFF", // синий
    "На согласовании": "#00a0c8", // голубой
    "Требует внимания": "#FF6B6B" // красный
};

// Главная функция инициализации диаграммы
function initTreeChart() {
    console.log('Инициализация столбчатой диаграммы...');

    // Проверяем, существует ли контейнер для диаграммы
    const chartContainer = document.querySelector('.chart-info');
    if (!chartContainer) {
        console.error('Контейнер для диаграммы не найден');
        return;
    }

    // Устанавливаем высоту блока
    chartContainer.style.minHeight = '250px';
    chartContainer.style.height = '250px';

    renderTreeChart();
}

// Инициализация при полной загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTreeChart);
} else {
    // Если таблица уже загружена, инициализируем диаграмму
    setTimeout(initTreeChart, 100);
}

// Получение данных для диаграммы
function getTreeChartData() {
    // Используем функцию из scriptTable.js
    if (typeof getFilteredPurchases !== 'function') {
        console.error('Функция getFilteredPurchases не найдена');
        return null;
    }

    const purchases = getFilteredPurchases();

    // Инициализируем структуру данных
    const chartData = {
        groups: Object.keys(STATUS_GROUPS),
        sums: {},
        counts: {}
    };

    // Инициализируем нулями
    chartData.groups.forEach(group => {
        chartData.sums[group] = 0;
        chartData.counts[group] = 0;
    });

    // Собираем данные
    purchases.forEach(purchase => {
        const amount = parseInt(purchase.amount) || 0;
        const status = purchase.status;

        // Находим группу для этого статуса
        for (const [groupName, statuses] of Object.entries(STATUS_GROUPS)) {
            if (statuses.includes(status)) {
                chartData.sums[groupName] += amount;
                chartData.counts[groupName] += 1;
                break;
            }
        }
    });

    return chartData;
}

// Форматирование суммы в читаемый вид
function formatCurrency(amount) {
    if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1).replace('.', ',') + ' млн';
    } else if (amount >= 1000) {
        return (amount / 1000).toFixed(0) + ' тыс';
    }
    return amount.toString();
}

// Отрисовка столбчатой диаграммы
function renderTreeChart() {
    const chartContainer = document.querySelector('.chart-info');
    if (!chartContainer) return;

    const chartData = getTreeChartData();

    // Очищаем контейнер
    chartContainer.innerHTML = '';

    if (!chartData) {
        chartContainer.innerHTML = '<div class="no-data">Нет данных для отображения</div>';
        return;
    }

    // Создаем canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'treeChart';
    canvas.style.width = '100%';
    canvas.style.height = '250px';
    canvas.width = chartContainer.clientWidth;
    canvas.height = 250; // Фиксированная высота 250px
    chartContainer.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Настройки диаграммы
    const padding = { top: 40, right: 30, bottom: 60, left: 50 }; // Уменьшили левый отступ
    const graphWidth = canvas.width - padding.left - padding.right;
    const graphHeight = canvas.height - padding.top - padding.bottom;

    // Находим максимальное значение для масштабирования
    const allValues = [...Object.values(chartData.sums), ...Object.values(chartData.counts)];
    let maxValue = Math.max(...allValues);

    // Если все значения 0, устанавливаем максимальное значение для отображения
    if (maxValue === 0) maxValue = 100;

    // Количество групп и столбцов
    const groupCount = chartData.groups.length;
    const columnPairsPerGroup = 2; // 2 столбца на группу (сумма и количество)
    const totalColumns = groupCount * columnPairsPerGroup;

    // Ширина столбца и расстояние
    const columnWidth = (graphWidth * 0.7) / totalColumns;
    const groupSpacing = (graphWidth * 0.3) / (groupCount + 1);

    // Функция для преобразования значения в высоту столбца
    const scaleY = value => padding.top + graphHeight - (value / maxValue) * graphHeight;

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

    // Подпись оси X
    ctx.fillStyle = '#374151';
    ctx.font = '10px TT Fors, Inter, Arial, sans-serif';
    ctx.textAlign = 'center';


    // Сетка и подписи на оси Y
    ctx.font = '10px TT Fors, Inter, Arial, sans-serif';
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
        ctx.lineWidth = 1;
        ctx.stroke();

        // Подписи на оси Y
        ctx.fillText(formatCurrency(value), padding.left - 5, y + 4);
    }

    // Легенда в левом верхнем углу (рисуем до столбцов)
    drawTreeLegend(ctx, chartData, padding.left + 10, padding.top + 10);

    // Рисуем столбцы
    let currentX = padding.left + groupSpacing;

    chartData.groups.forEach((group, groupIndex) => {
        const sumValue = chartData.sums[group];
        const countValue = chartData.counts[group];

        // Позиции для двух столбцов в группе
        const sumX = currentX;
        const countX = currentX + columnWidth + 5;

        // Высоты столбцов
        const sumHeight = graphHeight - (scaleY(sumValue) - padding.top);
        const countHeight = graphHeight - (scaleY(countValue) - padding.top);

        // Столбец суммы (заполненный)
        ctx.fillStyle = GROUP_COLORS[group];
        ctx.fillRect(sumX, scaleY(sumValue), columnWidth, sumHeight);

        // Обводка столбца суммы
        ctx.strokeStyle = GROUP_COLORS[group];
        ctx.lineWidth = 1;
        ctx.strokeRect(sumX, scaleY(sumValue), columnWidth, sumHeight);

        // Текст суммы на столбце
        ctx.fillStyle = '#fff';
        ctx.font = '9px TT Fors, Inter, Arial, sans-serif';
        ctx.textAlign = 'center';

        // Если столбец достаточно высокий, помещаем текст внутри
        if (sumHeight > 20) {
            ctx.fillText(formatCurrency(sumValue), sumX + columnWidth / 2, scaleY(sumValue) + 12);
        } else {
            // Иначе над столбцом
            ctx.fillStyle = GROUP_COLORS[group];
            ctx.fillText(formatCurrency(sumValue), sumX + columnWidth / 2, scaleY(sumValue) - 5);
        }

        // Столбец количества (заполненный, но прозрачнее)
        ctx.fillStyle = GROUP_COLORS[group] + '80';
        ctx.fillRect(countX, scaleY(countValue), columnWidth, countHeight);

        // Обводка столбца количества
        ctx.strokeStyle = GROUP_COLORS[group];
        ctx.strokeRect(countX, scaleY(countValue), columnWidth, countHeight);

        // Текст количества на столбце
        ctx.fillStyle = '#fff';
        ctx.font = '9px TT Fors, Inter, Arial, sans-serif';
        ctx.textAlign = 'center';

        // Если столбец достаточно высокий, помещаем текст внутри
        if (countHeight > 20) {
            ctx.fillText(countValue.toString(), countX + columnWidth / 2, scaleY(countValue) + 12);
        } else {
            // Иначе над столбцом
            ctx.fillStyle = GROUP_COLORS[group];
            ctx.fillText(countValue.toString(), countX + columnWidth / 2, scaleY(countValue) - 5);
        }

        // Подпись группы под столбцами
        ctx.fillStyle = '#374151';
        ctx.font = '11px TT Fors, Inter, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(group, currentX + columnWidth, canvas.height - padding.bottom + 25);

        // Обозначения под столбцами
        ctx.fillStyle = '#6B7280';
        ctx.font = '9px TT Fors, Inter, Arial, sans-serif';

        // Подпись для суммы
        ctx.fillText('Сумма', sumX + columnWidth / 2, canvas.height - padding.bottom + 40);

        // Подпись для количества
        ctx.fillText('Кол-во', countX + columnWidth / 2, canvas.height - padding.bottom + 40);

        // Сдвигаем позицию для следующей группы
        currentX += (columnWidth * 2 + 10) + groupSpacing;
    });
}

// Рисование легенды в левом верхнем углу
function drawTreeLegend(ctx, chartData, startX, startY) {
    ctx.save();

    // Стиль для легенды
    ctx.font = '10px TT Fors, Inter, Arial, sans-serif';
    ctx.textAlign = 'left';

    let yPos = startY;
    const lineHeight = 16;
    const colorBoxSize = 10;

    // Рисуем фон для легенды (полупрозрачный)
    const legendWidth = 120;
    const legendHeight = chartData.groups.length * lineHeight + 5;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fillRect(startX - 5, yPos - 5, legendWidth, legendHeight);
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(startX - 5, yPos - 5, legendWidth, legendHeight);

    // Элементы легенды (только цвет и название, без значений)
    chartData.groups.forEach(group => {
        // Цветной квадратик
        ctx.fillStyle = GROUP_COLORS[group];
        ctx.fillRect(startX, yPos, colorBoxSize, colorBoxSize);

        // Название группы
        ctx.fillStyle = '#374151';
        ctx.fillText(group, startX + colorBoxSize + 6, yPos + 9);

        yPos += lineHeight;
    });

    ctx.restore();
}

// Добавляем кастомные стили для диаграммы
function addTreeChartStyles() {
    const style = document.createElement('style');
    style.textContent = `
    /* Стили для столбчатой диаграммы */
    .chart-info {
      background: #fff;
      border-radius: 8px;
      box-shadow: var(--shadow);
      padding: 10px;
      min-height: 250px;
      height: 250px;
      position: relative;
    }
    
    #treeChart {
      display: block;
      height: 250px;
    }
    
    .no-data {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--grey);
      font-size: 14px;
      text-align: center;
      padding: 20px;
    }
    
    /* Адаптивность */
    @media (max-width: 768px) {
      .chart-info {
        padding: 5px;
        min-height: 200px;
        height: 200px;
      }
      
      #treeChart {
        height: 200px;
      }
    }
  `;
    document.head.appendChild(style);
}

// Инициализация стилей
addTreeChartStyles();

// Инициализация при изменении размера окна
window.addEventListener('resize', function () {
    if (document.querySelector('.chart-info')) {
        renderTreeChart();
    }
});

// Экспортируем функции для обновления при изменении фильтров
export function updateTreeChart() {
    if (document.querySelector('.chart-info')) {
        renderTreeChart();
    }
}

// Для обновления диаграммы из других скриптов
window.updateTreeChart = updateTreeChart;

// Инициализируем при загрузке
initTreeChart();