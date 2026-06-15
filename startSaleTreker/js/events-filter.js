document.addEventListener('DOMContentLoaded', function() {
    filterEvents();
    updateEventCountdowns();
    initToggleEvents();
    
    setInterval(updateEventCountdowns, 60 * 60 * 1000);
});

function filterEvents() {
    const eventLinks = document.querySelectorAll('.event-link-wrapper');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const futureEvents = [];
    const pastEvents = [];
    
    eventLinks.forEach(link => {
        const dateStr = link.getAttribute('data-date');
        if (dateStr) {
            const eventDate = new Date(dateStr);
            eventDate.setHours(0, 0, 0, 0);
            
            const daysDiff = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
            
            const eventData = {
                element: link,
                date: eventDate,
                daysDiff: daysDiff
            };
            
            if (daysDiff >= 0) {
                futureEvents.push(eventData);
            } else {
                pastEvents.push(eventData);
            }
        }
    });
    
    futureEvents.sort((a, b) => a.daysDiff - b.daysDiff);
    pastEvents.sort((a, b) => b.daysDiff - a.daysDiff);
    
    const visibleEvents = [];
    
    if (futureEvents.length >= 3) {
        visibleEvents.push(...futureEvents.slice(0, 3));
    } else {
        visibleEvents.push(...futureEvents);
        const remainingSlots = 3 - futureEvents.length;
        visibleEvents.push(...pastEvents.slice(0, remainingSlots));
    }
    
    eventLinks.forEach(link => {
        if (!visibleEvents.find(e => e.element === link)) {
            link.classList.add('none');
        } else {
            link.classList.remove('none');
        }
    });
}

function updateEventCountdowns() {
    const eventLinks = document.querySelectorAll('.event-link-wrapper');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    eventLinks.forEach(link => {
        const dateStr = link.getAttribute('data-date');
        if (dateStr) {
            const eventDate = new Date(dateStr);
            eventDate.setHours(0, 0, 0, 0);
            
            const daysDiff = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
            const daysLeftElement = link.querySelector('.days-left strong');
            
            if (daysLeftElement) {
                if (daysDiff > 0) {
                    daysLeftElement.textContent = `${daysDiff} ${getDaysWord(daysDiff)}`;
                } else if (daysDiff === 0) {
                    daysLeftElement.textContent = 'сегодня';
                } else {
                    const daysAgo = Math.abs(daysDiff);
                    daysLeftElement.textContent = `${daysAgo} ${getDaysWord(daysAgo)} назад`;
                }
            }
        }
    });
}

function getDaysWord(number) {
    const lastTwoDigits = number % 100;
    const lastDigit = number % 10;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'дней';
    }
    
    if (lastDigit === 1) {
        return 'день';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return 'дня';
    } else {
        return 'дней';
    }
}

function initToggleEvents() {
    const toggleBtn = document.getElementById('toggleEventsBtn');
    if (!toggleBtn) return;
    
    let isExpanded = false;
    
    toggleBtn.addEventListener('click', function() {
        const eventLinks = document.querySelectorAll('.event-link-wrapper');
        
        if (isExpanded) {
            filterEvents();
            toggleBtn.textContent = 'УЗНАТЬ БОЛЬШЕ О МЕРОПРИЯТИЯХ';
            isExpanded = false;
        } else {
            eventLinks.forEach(link => {
                link.classList.remove('none');
            });
            toggleBtn.textContent = 'СВЕРНУТЬ';
            isExpanded = true;
        }
    });
}