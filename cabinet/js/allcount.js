// scriptDownChart.js
import { chartDataFromTestObject } from './data.js';

// Константы для графиков
const STATUS_COLORS_DOWN = {
    "В процессе": "#4A6FFF",
    "На согласовании": "#00a0c8",
    "Завершено": "#0a857e",
    "Ожидается": "#FFA726",
    "Просрочено": "#EF5350"
};

// Главная функция инициализации графиков
function initDownChart() {
    console.log('Инициализация графиков для нижнего блока...');

    // Проверяем существование контейнеров
    const lineChartContainer = document.getElementById('down');
    const allChartsContainer = document.getElementById('all');

    if (!lineChartContainer || !allChartsContainer) {
        console.error('Контейнеры для графиков не найдены');
        return;
    }

    renderLineChart(lineChartContainer);
    renderAllCharts(allChartsContainer);
}

// Инициализация при загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDownChart);
} else {
    setTimeout(initDownChart, 100);
}

// Форматирование суммы
function formatCurrency(amount) {
    if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1).replace('.', ',') + ' млн';
    } else if (amount >= 1000) {
        return (amount / 1000).toFixed(0) + ' тыс';
    }
    return amount.toString();
}

// Форматирование процентов
function formatPercent(value, total) {
    return ((value / total) * 100).toFixed(1) + '%';
}

// Отрисовка линейного графика
function renderLineChart(container) {
    const data = chartDataFromTestObject.timeSeriesData;

    // Очищаем контейнер
    container.innerHTML = '';

    // Создаем canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'downLineChart';
    canvas.style.width = '100%';
    canvas.style.height = '280px';
    canvas.width = container.clientWidth;
    canvas.height = 280;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Настройки графика
    const padding = { top: 40, right: 30, bottom: 50, left: 60 };
    const graphWidth = canvas.width - padding.left - padding.right;
    const graphHeight = canvas.height - padding.top - padding.bottom;

    // Находим максимальное значение
    const maxValue = Math.max(...data.values);

    // Функции для масштабирования
    const scaleY = value => padding.top + graphHeight - (value / maxValue) * graphHeight;
    const scaleX = index => padding.left + (index / (data.labels.length - 1 || 1)) * graphWidth;

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
    ctx.fillText('Дата', (canvas.width - padding.right + padding.left) / 2, canvas.height - 10);

    ctx.save();
    ctx.translate(20, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Объем закупок, ₽', 0, 0);
    ctx.restore();

    // Сетка и подписи на оси Y
    ctx.font = '12px TT Fors, Inter, Arial, sans-serif';
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
        ctx.fillText(formatCurrency(value), padding.left - 10, y + 4);
    }

    // Подписи на оси X
    ctx.textAlign = 'center';
    data.labels.forEach((label, index) => {
        const x = scaleX(index);
        ctx.fillText(label, x, canvas.height - padding.bottom + 15);
    });

    // Рисуем основную линию графика
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#0B63A8';

    data.values.forEach((value, index) => {
        const x = scaleX(index);
        const y = scaleY(value);

        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.stroke();

    // Рисуем точки
    data.values.forEach((value, index) => {
        const x = scaleX(index);
        const y = scaleY(value);

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#0B63A8';
        ctx.fill();

        // Белая обводка точек
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    // Легенда под графиком
    createLineChartLegend(container, data);
}

// Создание легенды для линейного графика
function createLineChartLegend(container, data) {
    const legendContainer = document.createElement('div');
    legendContainer.className = 'chart-legend-down';
    legendContainer.style.marginTop = '20px';
    legendContainer.style.padding = '16px';
    legendContainer.style.backgroundColor = '#ffffff';
    legendContainer.style.borderRadius = '0 0 8px 8px';
    legendContainer.style.display = 'flex';
    legendContainer.style.justifyContent = 'center';
    legendContainer.style.alignItems = 'center';
    legendContainer.style.gap = '24px';
    legendContainer.style.flexWrap = 'wrap';

    // Рассчитываем статистику
    const lastValue = data.values[data.values.length - 1];
    const firstValue = data.values[0];
    const growth = ((lastValue - firstValue) / firstValue * 100).toFixed(1);

    // Создаем элементы легенды
    const legendItem = document.createElement('div');
    legendItem.style.display = 'flex';
    legendItem.style.alignItems = 'center';
    legendItem.style.gap = '12px';

    const colorBox = document.createElement('div');
    colorBox.style.width = '20px';
    colorBox.style.height = '4px';
    colorBox.style.backgroundColor = '#0B63A8';
    colorBox.style.borderRadius = '2px';

    const textContainer = document.createElement('div');
    textContainer.style.display = 'flex';
    textContainer.style.gap = '8px';
    textContainer.style.alignItems = 'center';

    const title = document.createElement('span');
    title.style.fontSize = '14px';
    title.style.color = '#374151';
    title.style.fontWeight = '500';
    title.textContent = 'Общий объем закупок';

    const value = document.createElement('span');
    value.style.fontSize = '14px';
    value.style.color = '#0B63A8';
    value.style.fontWeight = '600';
    value.textContent = formatCurrency(lastValue);

    const growthBadge = document.createElement('span');
    growthBadge.style.fontSize = '12px';
    growthBadge.style.color = growth >= 0 ? '#0a857e' : '#EF5350';
    growthBadge.style.backgroundColor = growth >= 0 ? '#D4EDDA' : '#F8D7DA';
    growthBadge.style.padding = '2px 8px';
    growthBadge.style.borderRadius = '12px';
    growthBadge.textContent = growth >= 0 ? `+${growth}%` : `${growth}%`;

    textContainer.appendChild(title);
    textContainer.appendChild(value);
    textContainer.appendChild(growthBadge);

    legendItem.appendChild(colorBox);
    legendItem.appendChild(textContainer);
    legendContainer.appendChild(legendItem);

    container.appendChild(legendContainer);
}

// Отрисовка только круговой диаграммы в контейнере #all
function renderAllCharts(container) {
    const data = chartDataFromTestObject;

    // Очищаем контейнер
    container.innerHTML = '';

    // Создаем круговую диаграмму
    const pieChartSection = createPieChartSection(data.categoryData);
    container.appendChild(pieChartSection);
}

// Создание круговой диаграммы
function createPieChartSection(categoryData) {
    const section = document.createElement('div');
    section.className = 'pie-chart-container';
    section.style.backgroundColor = '#ffffff';
    section.style.borderRadius = '8px';
    section.style.padding = '20px';
    section.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    section.style.height = '100%';
    section.style.display = 'flex';
    section.style.flexDirection = 'column';

    // Заголовок
    const title = document.createElement('h3');
    title.textContent = 'Распределение закупок по категориям';
    title.style.fontSize = '16px';
    title.style.fontWeight = '600';
    title.style.color = '#374151';
    title.style.marginBottom = '20px';
    title.style.textAlign = 'center';
    title.style.flexShrink = '0';

    section.appendChild(title);

    // Основной контент - диаграмма и легенда
    const content = document.createElement('div');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.gap = '20px';
    content.style.flex = '1';
    content.style.overflow = 'hidden';

    // Canvas для круговой диаграммы
    const canvasContainer = document.createElement('div');
    canvasContainer.style.flex = '1';
    canvasContainer.style.display = 'flex';
    canvasContainer.style.justifyContent = 'center';
    canvasContainer.style.alignItems = 'center';
    canvasContainer.style.minHeight = '200px';
    canvasContainer.style.position = 'relative';

    const canvas = document.createElement('canvas');
    canvas.id = 'allPieChart';
    canvas.width = 250;
    canvas.height = 250;
    canvas.style.width = '250px';
    canvas.style.height = '250px';
    canvas.style.maxWidth = '100%';

    canvasContainer.appendChild(canvas);
    content.appendChild(canvasContainer);

    // Рисуем круговую диаграмму
    setTimeout(() => {
        drawPieChart(canvas, categoryData);
    }, 50);

    // Легенда под диаграммой
    const legendContainer = createCompactLegend(categoryData);
    legendContainer.style.flexShrink = '0';
    legendContainer.style.maxHeight = '150px';
    legendContainer.style.overflowY = 'auto';

    content.appendChild(legendContainer);
    section.appendChild(content);

    // Итоговая информация
    const summary = createChartSummary(categoryData);
    summary.style.flexShrink = '0';
    summary.style.marginTop = '15px';
    summary.style.paddingTop = '15px';
    summary.style.borderTop = '1px solid #E5E7EB';

    section.appendChild(summary);

    return section;
}

// Рисование круговой диаграммы
function drawPieChart(canvas, data) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    // Вычисляем общую сумму
    const total = data.values.reduce((sum, value) => sum + value, 0);

    // Рисуем сектора диаграммы
    let startAngle = 0;

    data.values.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;

        // Рисуем сектор
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();

        ctx.fillStyle = data.colors[index];
        ctx.fill();

        // Обводка сектора
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Добавляем выносные линии для крупных сегментов (> 5%)
        if (value / total > 0.05) {
            drawSegmentLabel(ctx, startAngle + sliceAngle / 2, value, index,
                centerX, centerY, radius, data);
        }

        startAngle += sliceAngle;
    });

    // Центр диаграммы (для donut chart)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();

    // Текст в центре
    ctx.fillStyle = '#374151';
    ctx.font = 'bold 14px TT Fors, Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Всего', centerX, centerY - 10);

    ctx.fillStyle = '#0B63A8';
    ctx.font = 'bold 18px TT Fors, Inter, Arial, sans-serif';
    ctx.fillText(formatCurrency(total), centerX, centerY + 15);
}

// Рисование подписей сегментов
function drawSegmentLabel(ctx, angle, value, index, centerX, centerY, radius, data) {
    const total = data.values.reduce((sum, val) => sum + val, 0);
    const percentage = ((value / total) * 100).toFixed(1);

    // Позиция на краю сегмента
    const labelRadius = radius * 0.7;
    const x = centerX + Math.cos(angle) * labelRadius;
    const y = centerY + Math.sin(angle) * labelRadius;

    ctx.fillStyle = '#374151';
    ctx.font = 'bold 11px TT Fors, Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${percentage}%`, x, y);
}

// Создание компактной легенды
function createCompactLegend(data) {
    const legendContainer = document.createElement('div');
    legendContainer.className = 'compact-legend';
    legendContainer.style.display = 'grid';
    legendContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    legendContainer.style.gap = '10px';
    legendContainer.style.padding = '10px';

    const total = data.values.reduce((sum, val) => sum + val, 0);

    data.labels.forEach((label, index) => {
        const percentage = ((data.values[index] / total) * 100).toFixed(1);

        if (percentage > 0) { // Показываем только значимые сегменты
            const legendItem = document.createElement('div');
            legendItem.style.display = 'flex';
            legendItem.style.alignItems = 'center';
            legendItem.style.gap = '8px';
            legendItem.style.padding = '6px';
            legendItem.style.backgroundColor = '#F9FAFB';
            legendItem.style.borderRadius = '6px';
            legendItem.style.fontSize = '12px';

            const colorBox = document.createElement('div');
            colorBox.style.width = '12px';
            colorBox.style.height = '12px';
            colorBox.style.backgroundColor = data.colors[index];
            colorBox.style.borderRadius = '3px';
            colorBox.style.flexShrink = '0';

            const labelContent = document.createElement('div');
            labelContent.style.display = 'flex';
            labelContent.style.flexDirection = 'column';
            labelContent.style.flex = '1';
            labelContent.style.minWidth = '0'; // Для правильного обрезания текста

            const labelText = document.createElement('span');
            labelText.textContent = label.replace('\n', ' ');
            labelText.style.color = '#374151';
            labelText.style.whiteSpace = 'nowrap';
            labelText.style.overflow = 'hidden';
            labelText.style.textOverflow = 'ellipsis';

            const stats = document.createElement('div');
            stats.style.display = 'flex';
            stats.style.justifyContent = 'space-between';
            stats.style.fontSize = '11px';
            stats.style.marginTop = '2px';

            const valueText = document.createElement('span');
            valueText.textContent = formatCurrency(data.values[index]);
            valueText.style.color = '#0B63A8';
            valueText.style.fontWeight = '600';

            const percentageText = document.createElement('span');
            percentageText.textContent = `${percentage}%`;
            percentageText.style.color = '#6B7280';

            stats.appendChild(valueText);
            stats.appendChild(percentageText);

            labelContent.appendChild(labelText);
            labelContent.appendChild(stats);

            legendItem.appendChild(colorBox);
            legendItem.appendChild(labelContent);
            legendContainer.appendChild(legendItem);
        }
    });

    return legendContainer;
}

// Создание сводки по диаграмме
function createChartSummary(data) {
    const summary = document.createElement('div');
    summary.className = 'chart-summary';

    const total = data.values.reduce((sum, val) => sum + val, 0);
    const maxValue = Math.max(...data.values);
    const maxIndex = data.values.indexOf(maxValue);
    const avgValue = total / data.values.length;

    const stats = [
        {
            label: 'Всего категорий',
            value: data.labels.length,
            color: '#0B63A8'
        },
        {
            label: 'Общая сумма',
            value: formatCurrency(total),
            color: '#0a857e'
        },
        {
            label: 'Наибольшая категория',
            value: data.labels[maxIndex].replace('\n', ' '),
            color: '#FFA726'
        },
        {
            label: 'Средняя сумма',
            value: formatCurrency(avgValue),
            color: '#00a0c8'
        }
    ];

    stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.style.display = 'flex';
        statItem.style.justifyContent = 'space-between';
        statItem.style.alignItems = 'center';
        statItem.style.padding = '6px 0';
        statItem.style.borderBottom = '1px solid #F3F4F6';

        const label = document.createElement('span');
        label.textContent = stat.label;
        label.style.fontSize = '12px';
        label.style.color = '#6B7280';

        const value = document.createElement('span');
        value.textContent = stat.value;
        value.style.fontSize = '12px';
        value.style.color = stat.color;
        value.style.fontWeight = '600';

        statItem.appendChild(label);
        statItem.appendChild(value);
        summary.appendChild(statItem);
    });

    return summary;
}

// Инициализация при изменении размера окна
let resizeTimeoutAll;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeoutAll);
    resizeTimeoutAll = setTimeout(function () {
        const lineChartContainer = document.getElementById('down');
        const allChartsContainer = document.getElementById('all');

        if (lineChartContainer) {
            renderLineChart(lineChartContainer);
        }

        if (allChartsContainer) {
            // Перерисовываем круговую диаграмму
            const canvas = allChartsContainer.querySelector('#allPieChart');
            if (canvas) {
                drawPieChart(canvas, chartDataFromTestObject.categoryData);
            }
        }
    }, 100);
});

// Экспортируем функции для обновления
export function updateDownChart() {
    const lineChartContainer = document.getElementById('down');
    const allChartsContainer = document.getElementById('all');

    if (lineChartContainer) {
        renderLineChart(lineChartContainer);
    }

    if (allChartsContainer) {
        renderAllCharts(allChartsContainer);
    }
}

// Для обновления из других скриптов
window.updateDownChart = updateDownChart;

// Инициализируем при загрузке
initDownChart();