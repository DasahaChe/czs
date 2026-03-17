// Утилиты для работы с графиками
export const formatCurrency = (amount) => {
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(1).replace('.', ',') + ' млн';
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(0) + ' тыс';
  }
  return amount.toString();
};

export const formatCurrencyShort = (amount) => {
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(1) + 'M';
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(0) + 'K';
  }
  return amount.toString();
};

const STATUS_COLORS = {
  "В процессе": "#4A6FFF",
  "На согласовании": "#00a0c8",
  "Завершено": "#0a857e"
};

const VISIBLE_STATUSES = ["В процессе", "На согласовании", "Завершено"];

// Парсинг даты
const parseDateToTimestamp = (dateStr) => {
  if (!dateStr) return 0;
  const parts = dateStr.split('.');
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    return new Date(year, month, day).getTime();
  }
  return 0;
};

// Получение данных для линейного графика
const getChartData = (purchases, period, customDateRange) => {
  const now = new Date();
  let startDate = new Date();
  let endDate = new Date();
  let intervals = [];
  let labels = [];

  switch (period) {
    case 'day':
      startDate.setDate(now.getDate() - 1);
      intervals = generateHourIntervals(startDate, endDate);
      labels = intervals.map(d => `${new Date(d).getHours()}:00`);
      break;
    case 'week':
      startDate.setDate(now.getDate() - 7);
      intervals = generateDayIntervals(startDate, endDate);
      labels = intervals.map(d => {
        const date = new Date(d);
        return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`;
      });
      break;
    case 'mouns':
      startDate.setDate(now.getDate() - 30);
      intervals = generateDayIntervals(startDate, endDate, 30);
      labels = intervals.map(d => {
        const date = new Date(d);
        return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`;
      });
      break;
    case 'quatro':
      startDate.setDate(now.getDate() - 90);
      intervals = generateWeekIntervals(startDate, endDate);
      labels = intervals.map(d => {
        const date = new Date(d);
        return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`;
      });
      break;
    case 'year':
      startDate.setDate(now.getDate() - 365);
      intervals = generateMonthIntervals(startDate, endDate);
      labels = intervals.map((d, i) => {
        const monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        return monthNames[new Date(d).getMonth()];
      });
      break;
    case 'time':
      if (customDateRange.start && customDateRange.end) {
        startDate = new Date(customDateRange.start);
        endDate = new Date(customDateRange.end);
        intervals = generateDayIntervals(startDate, endDate);
        labels = intervals.map(d => {
          const date = new Date(d);
          return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`;
        });
      } else {
        startDate.setDate(now.getDate() - 30);
        intervals = generateDayIntervals(startDate, endDate);
        labels = intervals.map(d => {
          const date = new Date(d);
          return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`;
        });
      }
      break;
  }

  const statusTotals = {};
  VISIBLE_STATUSES.forEach(status => {
    statusTotals[status] = new Array(intervals.length).fill(0);
  });

  purchases.forEach(purchase => {
    const purchaseDate = parseDateToTimestamp(purchase.date);
    const amount = parseInt(purchase.amount) || 0;
    const status = purchase.status;

    if (!VISIBLE_STATUSES.includes(status)) return;

    let intervalIndex = findIntervalIndex(purchaseDate, intervals, period);

    if (intervalIndex !== -1 && statusTotals[status]) {
      for (let i = intervalIndex; i < intervals.length; i++) {
        statusTotals[status][i] += amount;
      }
    }
  });

  const chartData = [];
  intervals.forEach((interval, index) => {
    const dataPoint = {
      date: interval,
      label: labels[index]
    };
    VISIBLE_STATUSES.forEach(status => {
      dataPoint[status] = statusTotals[status][index] || 0;
    });
    chartData.push(dataPoint);
  });

  return chartData;
};

const generateHourIntervals = (startDate, endDate) => {
  const intervals = [];
  const current = new Date(startDate);
  current.setMinutes(0, 0, 0);
  while (current <= endDate) {
    intervals.push(current.getTime());
    current.setHours(current.getHours() + 1);
  }
  return intervals;
};

const generateDayIntervals = (startDate, endDate, maxDays = null) => {
  const intervals = [];
  const current = new Date(startDate);
  current.setHours(0, 0, 0, 0);
  let dayCount = 0;
  while (current <= endDate && (!maxDays || dayCount < maxDays)) {
    intervals.push(current.getTime());
    current.setDate(current.getDate() + 1);
    dayCount++;
  }
  return intervals;
};

const generateWeekIntervals = (startDate, endDate) => {
  const intervals = [];
  const current = new Date(startDate);
  current.setDate(current.getDate() - current.getDay() + 1);
  current.setHours(0, 0, 0, 0);
  while (current <= endDate) {
    intervals.push(current.getTime());
    current.setDate(current.getDate() + 7);
  }
  return intervals;
};

const generateMonthIntervals = (startDate, endDate) => {
  const intervals = [];
  const current = new Date(startDate);
  current.setDate(1);
  current.setHours(0, 0, 0, 0);
  for (let i = 0; i < 12; i++) {
    intervals.push(current.getTime());
    current.setMonth(current.getMonth() + 1);
  }
  return intervals;
};

const findIntervalIndex = (purchaseTimestamp, intervals, period) => {
  const purchaseDate = new Date(purchaseTimestamp);
  for (let i = 0; i < intervals.length; i++) {
    const intervalDate = new Date(intervals[i]);
    switch (period) {
      case 'day':
        if (purchaseDate.getDate() === intervalDate.getDate() &&
          purchaseDate.getMonth() === intervalDate.getMonth() &&
          purchaseDate.getFullYear() === intervalDate.getFullYear() &&
          purchaseDate.getHours() === intervalDate.getHours()) {
          return i;
        }
        break;
      case 'year':
        if (purchaseDate.getMonth() === intervalDate.getMonth() &&
          purchaseDate.getFullYear() === intervalDate.getFullYear()) {
          return i;
        }
        break;
      default:
        if (purchaseDate.getDate() === intervalDate.getDate() &&
          purchaseDate.getMonth() === intervalDate.getMonth() &&
          purchaseDate.getFullYear() === intervalDate.getFullYear()) {
          return i;
        }
    }
  }
  return -1;
};

export const renderLineChart = (container, purchases, period, customDateRange) => {
  if (!container) return;

  const chartData = getChartData(purchases, period, customDateRange);

  container.innerHTML = '';

  if (chartData.length === 0) {
    container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#6B7280;">Нет данных для отображения</div>';
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.id = 'incomeChart';
  canvas.style.width = '100%';
  canvas.style.height = '280px';
  canvas.width = container.clientWidth;
  canvas.height = 280;

  if (window.innerWidth <= 768) {
    canvas.style.height = '220px';
    canvas.height = 220;
  }
  if (window.innerWidth <= 480) {
    canvas.style.height = '180px';
    canvas.height = 180;
  }

  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let padding = { top: 40, right: 30, bottom: 50, left: 80 };
  if (window.innerWidth <= 768) {
    padding = { top: 30, right: 20, bottom: 40, left: 60 };
  }
  if (window.innerWidth <= 480) {
    padding = { top: 20, right: 15, bottom: 35, left: 50 };
  }

  const graphWidth = canvas.width - padding.left - padding.right;
  const graphHeight = canvas.height - padding.top - padding.bottom;

  let maxValue = 0;
  chartData.forEach(point => {
    VISIBLE_STATUSES.forEach(status => {
      if (point[status] > maxValue) maxValue = point[status];
    });
  });
  if (maxValue === 0) maxValue = 100000;

  const scaleY = value => padding.top + graphHeight - (value / maxValue) * graphHeight;
  const scaleX = index => padding.left + (index / (chartData.length - 1 || 1)) * graphWidth;

  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, canvas.height - padding.bottom);
  ctx.lineTo(canvas.width - padding.right, canvas.height - padding.bottom);
  ctx.strokeStyle = '#D1D5DB';
  ctx.lineWidth = 1;
  ctx.stroke();

  const fontSize = window.innerWidth <= 480 ? 10 : window.innerWidth <= 768 ? 12 : 14;
  const smallFontSize = window.innerWidth <= 480 ? 8 : window.innerWidth <= 768 ? 10 : 12;

  ctx.fillStyle = '#374151';
  ctx.font = `${fontSize}px Inter, Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText('время', (canvas.width - padding.right + padding.left) / 2, canvas.height - 10);

  ctx.save();
  ctx.translate(20, canvas.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('вложения ₽', 0, 0);
  ctx.restore();

  ctx.font = `${smallFontSize}px TT Fors, Inter, Arial, sans-serif`;
  ctx.textAlign = 'right';
  ctx.fillStyle = '#6B7280';

  const ySteps = 5;
  for (let i = 0; i <= ySteps; i++) {
    const value = (maxValue / ySteps) * i;
    const y = scaleY(value);

    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(canvas.width - padding.right, y);
    ctx.strokeStyle = '#F3F4F6';
    ctx.stroke();

    ctx.fillText(formatCurrencyShort(value), padding.left - 10, y + 4);
  }

  ctx.textAlign = 'center';
  const step = Math.max(1, Math.floor(chartData.length / (window.innerWidth <= 480 ? 5 : window.innerWidth <= 768 ? 8 : 10)));

  chartData.forEach((point, index) => {
    const x = scaleX(index);
    if (index % step === 0 || index === chartData.length - 1) {
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, canvas.height - padding.bottom);
      ctx.strokeStyle = '#F3F4F6';
      ctx.stroke();
      ctx.fillText(point.label, x, canvas.height - padding.bottom + 15);
    }
  });

  VISIBLE_STATUSES.forEach(status => {
    ctx.beginPath();
    ctx.lineWidth = 1;
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

    chartData.forEach((point, index) => {
      if (index % step === 0 || index === chartData.length - 1) {
        const x = scaleX(index);
        const y = scaleY(point[status]);
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = STATUS_COLORS[status];
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });
  });

  createLegendContainer(container, chartData);
};

const createLegendContainer = (container, chartData) => {
  const legendContainer = document.createElement('div');
  legendContainer.className = 'chart-legend';
  legendContainer.style.marginTop = '20px';
  legendContainer.style.padding = '16px';
  legendContainer.style.backgroundColor = '#ffffff';
  legendContainer.style.borderRadius = '0 0 8px 8px';
  legendContainer.style.display = 'flex';
  legendContainer.style.justifyContent = 'center';
  legendContainer.style.alignItems = 'center';
  legendContainer.style.gap = '24px';
  legendContainer.style.flexWrap = 'wrap';

  let totalSum = 0;
  if (chartData.length > 0) {
    const lastDataPoint = chartData[chartData.length - 1];
    VISIBLE_STATUSES.forEach(status => {
      totalSum += lastDataPoint[status] || 0;
    });
  }

  VISIBLE_STATUSES.forEach(status => {
    const legendItem = document.createElement('div');
    legendItem.style.display = 'flex';
    legendItem.style.alignItems = 'center';
    legendItem.style.gap = '8px';

    const colorBox = document.createElement('div');
    colorBox.style.width = '12px';
    colorBox.style.height = '12px';
    colorBox.style.borderRadius = '2px';
    colorBox.style.backgroundColor = STATUS_COLORS[status];
    colorBox.style.flexShrink = '0';

    const textContainer = document.createElement('div');
    textContainer.style.display = 'flex';
    textContainer.style.gap = '4px';
    textContainer.style.fontSize = '12px';

    const statusName = document.createElement('span');
    statusName.style.color = '#374151';
    statusName.style.fontWeight = '500';
    let statusText = status;
    if (status === "В процессе") statusText = "Процесс";
    if (status === "На согласовании") statusText = "Согласование";
    if (status === "Завершено") statusText = "Завершено";
    statusName.textContent = statusText;

    const valueElement = document.createElement('span');
    valueElement.style.color = '#6B7280';
    const lastValue = chartData.length > 0 ? chartData[chartData.length - 1][status] : 0;
    valueElement.textContent = formatCurrencyShort(lastValue);

    textContainer.appendChild(statusName);
    textContainer.appendChild(valueElement);
    legendItem.appendChild(colorBox);
    legendItem.appendChild(textContainer);
    legendContainer.appendChild(legendItem);
  });

  const totalItem = document.createElement('div');
  totalItem.style.display = 'flex';
  totalItem.style.alignItems = 'center';
  totalItem.style.gap = '8px';
  totalItem.style.marginLeft = '20px';

  const totalLabel = document.createElement('span');
  totalLabel.style.fontSize = '12px';
  totalLabel.style.color = '#374151';
  totalLabel.style.fontWeight = '500';
  totalLabel.textContent = 'Всего:';

  const totalValue = document.createElement('span');
  totalValue.style.fontSize = '12px';
  totalValue.style.color = '#0B63A8';
  totalValue.style.fontWeight = '600';
  totalValue.textContent = formatCurrencyShort(totalSum);

  totalItem.appendChild(totalLabel);
  totalItem.appendChild(totalValue);
  legendContainer.appendChild(totalItem);

  container.appendChild(legendContainer);
};

export const renderPieChart = (container, purchases) => {
  if (!container) return;

  container.innerHTML = '';

  const categories = {};
  purchases.forEach(p => {
    const category = p.category;
    if (!categories[category]) {
      categories[category] = 0;
    }
    categories[category] += parseInt(p.amount) || 0;
  });

  const categoryData = {
    labels: Object.keys(categories),
    values: Object.values(categories),
    colors: ["#4A6FFF", "#00a0c8", "#0a857e", "#FF6B6B", "#FFA726"]
  };

  const section = document.createElement('div');
  section.style.backgroundColor = '#e6f4ff';
  section.style.width = '100%';
  section.style.borderRadius = '8px';
  section.style.padding = '15px';
  section.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  section.style.height = '100%';
  section.style.display = 'flex';
  section.style.flexDirection = 'column';
  section.style.animation = 'fadeIn 0.5s ease-out';

  const title = document.createElement('h3');
  title.style.fontSize = '12px';
  title.style.fontWeight = '600';
  title.style.color = '#374151';
  title.style.marginBottom = '15px';
  title.style.textAlign = 'center';
  title.style.flexShrink = '0';
  title.textContent = 'Распределение закупок по категориям';
  section.appendChild(title);

  const content = document.createElement('div');
  content.style.display = 'flex';
  content.style.flexDirection = window.innerWidth <= 768 ? 'column' : 'row';
  content.style.gap = '15px';
  content.style.flex = '1';
  content.style.overflow = 'hidden';

  const canvasContainer = document.createElement('div');
  canvasContainer.style.flex = '1';
  canvasContainer.style.display = 'flex';
  canvasContainer.style.justifyContent = 'center';
  canvasContainer.style.alignItems = 'center';
  canvasContainer.style.minHeight = '180px';
  canvasContainer.style.position = 'relative';

  const canvas = document.createElement('canvas');
  canvas.id = 'pieChart';
  canvas.style.width = '200px';
  canvas.style.height = '200px';
  canvas.width = 200;
  canvas.height = 200;

  canvasContainer.appendChild(canvas);
  content.appendChild(canvasContainer);

  const legendContainer = document.createElement('div');
  legendContainer.style.display = 'grid';
  legendContainer.style.gridTemplateColumns = window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)';
  legendContainer.style.gap = '8px';
  legendContainer.style.padding = '8px';
  legendContainer.style.flexShrink = '0';
  legendContainer.style.maxHeight = '120px';
  legendContainer.style.overflowY = 'auto';

  const total = categoryData.values.reduce((sum, val) => sum + val, 0);

  categoryData.labels.forEach((label, index) => {
    const percentage = ((categoryData.values[index] / total) * 100).toFixed(1);
    if (percentage > 0) {
      const legendItem = document.createElement('div');
      legendItem.style.display = 'flex';
      legendItem.style.alignItems = 'center';
      legendItem.style.gap = '6px';
      legendItem.style.padding = '5px';
      legendItem.style.backgroundColor = '#F9FAFB';
      legendItem.style.borderRadius = '6px';
      legendItem.style.fontSize = '12px';

      const colorBox = document.createElement('div');
      colorBox.style.width = '10px';
      colorBox.style.height = '10px';
      colorBox.style.borderRadius = '2px';
      colorBox.style.backgroundColor = categoryData.colors[index];
      colorBox.style.flexShrink = '0';

      const legendContent = document.createElement('div');
      legendContent.style.display = 'flex';
      legendContent.style.flexDirection = 'column';
      legendContent.style.flex = '1';
      legendContent.style.minWidth = '0';

      const labelText = document.createElement('span');
      labelText.style.color = '#374151';
      labelText.style.whiteSpace = 'nowrap';
      labelText.style.overflow = 'hidden';
      labelText.style.textOverflow = 'ellipsis';
      labelText.style.fontSize = '10px';
      labelText.textContent = label;

      const stats = document.createElement('div');
      stats.style.display = 'flex';
      stats.style.justifyContent = 'space-between';
      stats.style.fontSize = '10px';
      stats.style.marginTop = '2px';

      const valueText = document.createElement('span');
      valueText.style.color = '#0B63A8';
      valueText.style.fontWeight = '600';
      valueText.textContent = formatCurrencyShort(categoryData.values[index]);

      const percentageText = document.createElement('span');
      percentageText.style.color = '#6B7280';
      percentageText.textContent = `${percentage}%`;

      stats.appendChild(valueText);
      stats.appendChild(percentageText);
      legendContent.appendChild(labelText);
      legendContent.appendChild(stats);
      legendItem.appendChild(colorBox);
      legendItem.appendChild(legendContent);
      legendContainer.appendChild(legendItem);
    }
  });

  content.appendChild(legendContainer);
  section.appendChild(content);
  container.appendChild(section);

  setTimeout(() => drawPieChart(canvas, categoryData), 50);
};

const drawPieChart = (canvas, data) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) * 0.8;

  const total = data.values.reduce((sum, value) => sum + value, 0);
  let startAngle = 0;

  data.values.forEach((value, index) => {
    const sliceAngle = (value / total) * 2 * Math.PI;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    ctx.closePath();

    ctx.fillStyle = data.colors[index];
    ctx.fill();

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    if (value / total > 0.05) {
      const labelAngle = startAngle + sliceAngle / 2;
      const labelRadius = radius * 0.7;
      const x = centerX + Math.cos(labelAngle) * labelRadius;
      const y = centerY + Math.sin(labelAngle) * labelRadius;

      ctx.fillStyle = '#374151';
      ctx.font = 'bold 10px TT Fors, Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${((value / total) * 100).toFixed(1)}%`, x, y);
    }

    startAngle += sliceAngle;
  });

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.5, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();

  ctx.fillStyle = '#374151';
  ctx.font = 'bold 12px TT Fors, Inter, Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Всего', centerX, centerY - 10);

  ctx.fillStyle = '#0B63A8';
  ctx.font = 'bold 16px TT Fors, Inter, Arial, sans-serif';
  ctx.fillText(formatCurrencyShort(total), centerX, centerY + 15);
};