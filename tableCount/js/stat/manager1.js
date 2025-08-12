document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.cat_list .cat').forEach(function (el) {
        el.addEventListener('click', function (event) {
            let cat = this.textContent;
            let stat_data = "<div class='cat_name'>" + cat + "</div>";
            stat_data += "<div class='cat_data_field'><table class='cat_data'>";
            stat_data += "<thead><tr><th>Поставщик</th><th>Закупщик</th><th>Сумма контракта млн. ₽/год</th></tr></thead>";

            document.querySelectorAll(".result .category_list .category").forEach(function (item) {
                if (item.textContent === cat) {
                    let parent = item.closest(".result");
                    let vendor = parent.querySelector(".vendor_title").textContent;
                    let buyer = parent.querySelector(".buyer_title").textContent;
                    let sum = parseFloat(parent.querySelector(".pt_contract_summ").textContent) * 12 / 1000000;

                    stat_data += "<tr><td>" + vendor + "</td><td>" + buyer + "</td><td>" + sum.toFixed(2) + "</td></tr>";
                }
            });

            stat_data += "</table></div>";

            const vendorsSum = {};
            document.querySelectorAll(".result .category_list .category").forEach(function (item) {
                if (item.textContent === cat) {
                    let parent = item.closest(".result");
                    let vendor = parent.querySelector(".vendor_title").textContent;
                    let sum = parseFloat(parent.querySelector(".pt_contract_summ").textContent) * 12 / 1000000;

                    if (!vendorsSum[vendor]) {
                        vendorsSum[vendor] = 0;
                    }
                    vendorsSum[vendor] += sum;
                }
            });

            const sortedVendors = Object.entries(vendorsSum)
                .map(([ven, sum]) => ({ ven, sum }))
                .sort((a, b) => b.sum - a.sum);

            let summaryTable = "<table class='contract-table'>";
            summaryTable += "<thead><tr><th>Поставщик</th><th>Общая сумма контрактов</th></tr></thead>";
            summaryTable += "<tbody>";
            sortedVendors.forEach(item => {
                summaryTable += "<tr><td class='cat_vendor'>" + item.ven + "</td><td class='cat_count'>" + item.sum.toFixed(2) + "</td></tr>";
            });
            summaryTable += "</tbody></table>";

            document.querySelector(".cat_result").style.display = "block";
            document.querySelector(".cat_result .res_field").innerHTML = summaryTable + stat_data;
        });
    });
});