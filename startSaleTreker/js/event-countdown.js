/**
 * event-countdown.js — Автоматический подсчет дней до события
 * Работает с форматом: "ДД—ДД месяц ГГГГ" или "ДД месяц ГГГГ"
 */
(function() {
    'use strict';

    // Маппинг русских месяцев
    const MONTHS = {
        'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3, 'мая': 4, 'июня': 5,
        'июля': 6, 'августа': 7, 'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
    };

    /**
     * Парсит дату из текста вида "15—18 сентября 2026"
     * Берет ПЕРВУЮ дату в диапазоне как дату старта
     */
    function parseRussianDate(text) {
        const regex = /(\d{1,2})\s*[—–-]?\s*(?:\d{1,2}\s+)?([а-яёА-ЯЁ]+)\s+(\d{4})/;
        const match = text.match(regex);
        if (!match) return null;

        const day = parseInt(match[1], 10);
        const month = MONTHS[match[2].toLowerCase()];
        const year = parseInt(match[3], 10);

        if (month === undefined) return null;
        const date = new Date(year, month, day);
        date.setHours(0, 0, 0, 0); // Нормализуем до начала суток
        return date;
    }

    /**
     * Склонение слова "день"
     */
    function getDaysWord(days) {
        const abs = Math.abs(days);
        const last2 = abs % 100;
        const last1 = abs % 10;

        if (last2 >= 11 && last2 <= 19) return 'дней';
        if (last1 === 1) return 'день';
        if (last1 >= 2 && last1 <= 4) return 'дня';
        return 'дней';
    }

    /**
     * Основная функция обновления
     */
    function updateCountdowns() {
        const cards = document.querySelectorAll('.event-card');
        
        cards.forEach(card => {
            // Ищем блок с датой (по наличию иконки календаря)
            const dateEl = card.querySelector('.event-info img[alt="data"]')?.closest('.event-info');
            if (!dateEl) return;

            const dateText = dateEl.textContent.trim();
            const eventDate = parseRussianDate(dateText);
            if (!eventDate) return;

            // Считаем разницу в днях
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            const diffMs = eventDate.getTime() - now.getTime();
            const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

            // Обновляем DOM
            const targetEl = card.querySelector('.days-left strong');
            if (targetEl) {
                if (daysLeft < 0) {
                    targetEl.textContent = 'Событие прошло';
                    card.dataset.status = 'passed';
                } else if (daysLeft === 0) {
                    targetEl.textContent = 'Сегодня';
                    card.dataset.status = 'today';
                } else {
                    targetEl.textContent = `${daysLeft} ${getDaysWord(daysLeft)}`;
                    card.dataset.status = 'future';
                }
            }
        });
    }

    // Запуск при готовности DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateCountdowns);
    } else {
        updateCountdowns();
    }

    // Авто-обновление раз в 6 часов (если страница долго открыта)
    setInterval(updateCountdowns, 6 * 3600 * 1000);

    // Публичный API для ручного вызова
    window.CZSEvents = { updateCountdowns };
})();