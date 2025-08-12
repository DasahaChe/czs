function createVenSumArray() {
    const rows = document.querySelectorAll(".cat_data tbody tr");
    const result = {};

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        if (cells.length < 3) return;

        const ven = cells[0].textContent.trim();
        const sumStr = cells[2].textContent.trim();
        const sum = parseFloat(sumStr.replace(/[^0-9.]/g, ""));

        if (!isNaN(sum)) {
            if (!result[ven]) {
                result[ven] = 0;
            }
            result[ven] += sum;
        }
    });

    return Object.keys(result).map(key => ({
        ven: key,
        sum: result[key]
    }));
}

// Функция для генерации и вставки таблицы
function insertSummaryTable() {
    const venSumArray = createVenSumArray();

    // Сортируем по убыванию суммы
    venSumArray.sort((a, b) => b.sum - a.sum);

    // Создаём HTML-таблицу
    const table = document.createElement('table');
    table.className = 'contract-table';

    // Заголовок таблицы
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Поставщик', 'Общая сумма контрактов'];
    headers.forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Тело таблицы
    const tbody = document.createElement('tbody');
    venSumArray.forEach(item => {
        const row = document.createElement('tr');
        const vendorCell = document.createElement('td');
        vendorCell.className = 'cat_vendor';
        vendorCell.textContent = item.ven;

        const countCell = document.createElement('td');
        countCell.className = 'cat_count';
        countCell.textContent = item.sum;

        row.appendChild(vendorCell);
        row.appendChild(countCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Вставляем таблицу перед таблицей .cat_data
    const targetTable = document.querySelector('.cat_data');
    if (targetTable && targetTable.parentNode) {
        targetTable.parentNode.insertBefore(table, targetTable);
    }
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', insertSummaryTable);