$(document).ready(function () {


    ; (function () {

        let cat_obj = {};
        let cat_obj_res = {};
        let sum = {};
        let vendors = {};
        let buyers = {};
        let count = {};

        $.each($(" .manager_stat .category"), function (index) {
            let cat = $(this).text();
            cat_obj[cat] = cat;
        });

        //console.log(cat_array);

        for (var key in cat_obj) {

            if (cat_obj.hasOwnProperty(key)) {

                sum[key] = 0;
                vendors[key] = {};
                buyers[key] = {};
                count[key] = 0;

                $.each($(".result .category_list"), function (index) {

                    let prnt = $(this).parents(".result");
                    let cat_str = $(this).text();
                    if (cat_str.indexOf(key) > 0) {
                        sum[key] += ((Number($(".pt_contract_summ", prnt).text())) * 12 / 1000000000);
                        vendors[key][$(".vendor_id", prnt).text()] = $(".vendor_id", prnt).text();
                        buyers[key][$(".buyer_id", prnt).text()] = $(".buyer_id", prnt).text();
                        count[key]++;
                        cat_obj_res[key] = { "count": "" + count[key], "sum": "" + (sum[key]).toFixed(3) + "", "vendors": "" + Object.keys(vendors[key]).length, "buyers": "" + Object.keys(buyers[key]).length };
                    }

                });

            }

        }



        for (var key in cat_obj_res) {
            let obj = cat_obj_res[key];
            $(".cat_list").append("<tr class='data'><td class='action'><input type='checkbox' /></td><td class='cat'>" + key + "</td><td class='count'>" + obj.count + "</td><td class='sum'>" + obj.sum + "</td><td  class='vendors'>" + obj.vendors + "</td><td class='buyers'>" + obj.buyers + "</td></tr>");
        }

        $(".cat_list").tablesorter();

    })();



    $('.cat_list .cat').on("click", function (event) {
        let el = $(this);
        let cat = $(this).text();

        // Начало формирования данных для вывода
        // let stat_data = "<div class='cat_name'>" + cat + "</div>";

        // Добавляем таблицу с данными по каждому контракту
        let stat_data = "<div class='cat_data_field'><table class='cat_data'>";
        stat_data += "<thead><tr><th>Поставщик</th><th>Закупщик</th><th>Сумма контракта млн. ₽/год</th></tr></thead>";

        $.each($(".result .category_list .category"), function (index) {
            if ($(this).text() == cat) {
                let parent = $(this).parents(".result");
                stat_data += "<tr><td>" + $(".vendor_title", parent).text() + "</td><td>" + $(".buyer_title", parent).text() + "</td><td>" + (Number($(".pt_contract_summ", parent).text()) * 12 / 1000000).toFixed(0) + "</td></tr>";
            }
        });

        stat_data += "</table></div>";

        // Временный DOM-элемент для хранения данных
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = stat_data;

        // Подсчёт суммы и количества контрактов по поставщикам
        const vendors = {};

        $(tempContainer).find('.cat_data tbody tr').each(function () {
            const $row = $(this);
            const vendor = $row.find('td:eq(1)').text(); // Первый столбец — Поставщик
            const contractSumStr = $row.find('td:eq(2)').text(); // Третий столбец — Сумма контракта
            const contractSum = parseFloat(contractSumStr);

            if (!vendors[vendor]) {
                vendors[vendor] = {
                    ven: vendor,
                    sum: 0,
                    contract: 0
                };
            }

            vendors[vendor].sum += contractSum;
            vendors[vendor].contract++;
        });

        // Сортировка по убыванию
        const sortedVendors = Object.values(vendors).sort((a, b) => b.sum - a.sum);

        // Генерация таблицы с суммами
        let summaryTable = "<div class='cat_contract_field'><table class='contract-table'>";
        summaryTable += "<thead><tr><th>Закупщик</th><th>Количество контрактов</th><th>Общая сумма контрактов млн. ₽/год</th></tr></thead>";
        summaryTable += "<tbody>";
        sortedVendors.forEach(item => {
            summaryTable += "<tr><td class='cat_vendor'>" + item.ven + "</td><td class='cat_count'>" + item.contract + "</td><td>" + Math.floor(item.sum) + "</td></tr>";
        });
        summaryTable += "</tbody></table></div>";

        // Добавляем таблицу сразу после .cat_name
       stat_data = "<div class='cat_name'>" + cat + "</div>" + summaryTable + tempContainer.innerHTML;

        // Вставка в DOM
        $(".cat_result").css("display", "block");
        $(".cat_result .res_field").html(stat_data);
        $(".cat_data").tablesorter();
    });



    // Закрытие результата
    $('.cat_result .close').click(function () {
        $(".cat_result").css("display", "none");
        $(".cat_result .res_field").html("");
    });

    // Генерация предложения
    $('.gen_prop').click(function () {
        let proposal_json_data = {};
        if ($(".cat_list .action input:checked").length == 0) {
            alert("Выберите категорию");
            return false;
        }

        let el = $(this);
        el.attr("disabled", "disabled");

        $.each($(".cat_list .action input:checked"), function (key) {
            let prnt = $(this).parents(".data");
            let cat = $(".cat", prnt).text();
            let count = $(".count", prnt).text();
            let sum = $(".sum", prnt).text();
            let vendors = $(".vendors", prnt).text();
            let buyers = $(".buyers", prnt).text();
            proposal_json_data[key] = {
                "cat": "" + cat,
                "count": "" + count,
                "sum": "" + sum,
                "vendors": "" + vendors,
                "buyers": "" + buyers
            };
        });

        let formData = new FormData();
        formData.append("proposal_json_data", JSON.stringify(proposal_json_data));

        AjaxFunc('/project/webroot/ajax/ajax_stat_manager.php', 'post', formData, "json", false, true, false, false, function (msg) {
            if (msg.success !== "") {
                var w = window.open('about:blank');
                setTimeout(function () {
                    w.document.body.appendChild(w.document.createElement('iframe')).src = msg.success;
                    w.document.getElementsByTagName("iframe")[0].style.width = '100%';
                    w.document.getElementsByTagName("iframe")[0].style.height = '100%';
                }, 0);
            } else {
                alert(msg.error);
            }

            el.removeAttr("disabled");
        });
    });
});