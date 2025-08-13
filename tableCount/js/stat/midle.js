$(document).ready(function () {
    // Инициализируем переменные
    let countContract = 0;
    let sumContract = 0;
    let vendorsCount = 0;

const rows = $('.cat_list .data'); // Все строки с данными
    const totalRows = rows.length;     // Общее количество строк

    // Обрабатываем каждую строку .data в таблице .cat_list
    rows.each(function () {
        const $row = $(this);

        const count = parseInt($row.find('.count').text());
        const sum = parseFloat($row.find('.sum').text());
        const vendors = parseInt($row.find('.vendors').text());

        countContract += count;
        sumContract += sum;
        vendorsCount += vendors;
    });

    // Вычисляем средние значения
    const avgSumPerContract = countContract ? (sumContract / totalRows) : 0;
    const contractPerVendor = vendorsCount ? (countContract / vendorsCount) : 0;

    // Создаем объект
    const resultData = {
        countContract: countContract,
        sumContract: avgSumPerContract,
        forOne: contractPerVendor
    };

    // Заполняем таблицу .allCat_list
    $('#countContract').text(resultData.countContract);
    $('#sumContract').text(avgSumPerContract.toFixed(3));
    $('#forOne').text(contractPerVendor.toFixed(0));
});