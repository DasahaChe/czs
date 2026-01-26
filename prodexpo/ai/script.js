const messages = [
    { 
        text: "Привет! Я — бот Платформы Сейл Трекер.\n\nЯ помогу подготовиться к встрече с сетью на мероприятии. Сначала сделаем короткую речь для закупщика, затем подготовим коммерческое предложение.\n\nНачнём?", 
        type: "bot", 
        delay: 2000 
    },
    { 
        text: "Start", 
        type: "user", 
        delay: 1200 
    },
    { 
        text: "Семен, ваша учетная запись создана! Выберите действия:", 
        type: "bot", 
        delay: 1800 
    },    
    { 
        text: "Заполнить анкету", 
        type: "bot-btn", 
        delay: 1000 
    },
    { 
        text: "Мои материалы", 
        type: "bot-btn", 
        delay: 1000 
    },
    { 
        text: "Какую компанию вы представляете?", 
        type: "bot", 
        delay: 1200 
    },
    { 
        text: "me-milkshaiks", 
        type: "user", 
        delay: 1200 
    },
    { 
        text: "Как к вам обращаться?", 
        type: "bot", 
        delay: 1200 
    },    
    { 
        text: "Семен Сергеевич", 
        type: "user", 
        delay: 1200 
    },
    { 
        text: "Категория товаров", 
        type: "bot", 
        highlight: true, 
        delay: 1200 
    },
    { 
        text: "Молочная продукция", 
        type: "user", 
        delay: 1200 
    },
    { 
        text: "Какие именно товары?", 
        type: "bot", 
        delay: 1200 
    },
    { 
        text: "Молочные коктейли", 
        type: "user", 
        delay: 1200 
    },
    { 
        text: "На встречу с какой сетью/закупщиком идете?", 
        type: "bot", 
        action: true, 
        delay: 1200 
    },
    { 
        text: "Ашан, Магнит, Перекресток", 
        type: "user", 
        delay: 1200 
    },
    { 
        text: "📋 Опрос окончен. Ваши ответы будут учтены в дальнейшей работе\n\nКакую компанию вы представляете?\n- me-milkshaiks\n\nКак к вам обращаться?\n- Семен Сергеевич\n\nКатегория товаров\n- молочная продукция\n\nКакие именно товары?\n- молочные коктейли\n\nНа встречу с какой сетью/закупщиком идете?\n- Ашан, Магнит, Перекресток\n\nЕсли есть любые материалы — пришлите сейчас (презентация, прайс, черновик речи, КП). Если нет, то нажмите кнопку «Пропустить»", 
        type: "bot", 
        delay: 3000 
    },
    { 
        text: "Загрузить файлы", 
        type: "bot-btn", 
        delay: 1000 
    },
    { 
        text: "Пропустить", 
        type: "bot-btn", 
        delay: 1000 
    },
];

let currentMessageIndex = 0;
let isRunning = true;
const typingSpeed = 40;
const messagesContainer = document.getElementById('messagesContainer');

// Форматирование времени
function getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

// Эффект печатания текста для пользователя
async function typeWriterEffect(element, text, speed) {
    return new Promise(resolve => {
        let index = 0;
        element.textContent = '';

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }

        type();
    });
}

// Показать индикатор набора текста (для бота)
function showTypingIndicator() {
    return new Promise(resolve => {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        messagesContainer.appendChild(typingDiv);
        scrollToBottom();

        const typingTime = 800 + Math.random() * 400;
        setTimeout(() => {
            typingDiv.remove();
            resolve();
        }, typingTime);
    });
}

// Создать элемент сообщения
function createMessageElement(message) {
    const messageDiv = document.createElement('div');
    
    // Для сообщений типа bot-btn создаем специальный стиль
    if (message.type === 'bot-btn') {
        messageDiv.className = 'message bot-btn';
    } else {
        messageDiv.className = `message ${message.type}${message.highlight ? ' highlight' : ''}${message.action ? ' action' : ''}`;
    }
    
    const textSpan = document.createElement('span');
    textSpan.className = 'message-text';
    
    // Добавляем время только для сообщений, которые не являются bot-btn
    if (message.type !== 'bot-btn') {
        const timeSpan = document.createElement('span');
        timeSpan.className = 'message-time';
        timeSpan.textContent = getCurrentTime();
        messageDiv.appendChild(timeSpan);
    }
    
    messageDiv.appendChild(textSpan);
    
    // Добавляем иконку бота для сообщений от бота и bot-btn
    if (message.type === 'bot' || message.type === 'bot-btn') {
        const avatarContainer = document.createElement('div');
        avatarContainer.className = 'bot-avatar';
        
        const botIcon = document.createElement('div');
        botIcon.className = 'bot-icon-inline';
        
        avatarContainer.appendChild(botIcon);
        messageDiv.appendChild(avatarContainer);
    }
    
    return { container: messageDiv, textElement: textSpan };
}

// Плавный скролл вниз
function scrollToBottom() {
    requestAnimationFrame(() => {
        messagesContainer.scrollTo({
            top: messagesContainer.scrollHeight,
            behavior: 'smooth'
        });
    });
}

// Показать сообщение пользователя (с печатным эффектом)
async function showUserMessage(message) {
    const { container, textElement } = createMessageElement(message);
    messagesContainer.appendChild(container);
    scrollToBottom();
    
    // Для пустого сообщения пропускаем печатный эффект
    if (message.text) {
        // Используем простую версию печатного эффекта
        await typeWriterEffect(textElement, message.text, typingSpeed);
    }
    
    // Задержка перед следующим сообщением
    await new Promise(resolve => setTimeout(resolve, message.delay));
}

// Показать сообщение бота (с индикатором, потом сразу весь текст)
async function showBotMessage(message) {
    // Показываем индикатор набора для обычных сообщений бота
    if (message.type === 'bot') {
        await showTypingIndicator();
    } else if (message.type === 'bot-btn') {
        // Для bot-btn делаем небольшую паузу вместо индикатора
        await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    const { container, textElement } = createMessageElement(message);
    
    // Текст появляется сразу для всех сообщений от бота
    textElement.textContent = message.text;
    
    messagesContainer.appendChild(container);
    scrollToBottom();
    
    // Задержка перед следующим сообщением
    await new Promise(resolve => setTimeout(resolve, message.delay));
}

// Общая функция показа сообщения
async function showMessage(message) {
    if (message.type === 'user') {
        await showUserMessage(message);
    } else {
        await showBotMessage(message);
    }
}

// Сдвиг сообщений вверх и удаление старых
function slideMessagesUp() {
    const allMessages = document.querySelectorAll('.message:not(.slide-up)');
    
    if (allMessages.length > 8) {
        const messagesToRemove = Array.from(allMessages).slice(0, allMessages.length - 8);
        
        messagesToRemove.forEach((msg, index) => {
            setTimeout(() => {
                msg.classList.add('slide-up');
                setTimeout(() => {
                    if (msg.parentNode) {
                        msg.remove();
                    }
                }, 300);
            }, index * 50);
        });
    }
}

// Основной цикл переписки (автоматический, бесконечный)
async function runConversationCycle() {
    while (isRunning) {
        for (let i = 0; i < messages.length; i++) {
            if (!isRunning) break;
            
            currentMessageIndex = i;
            await showMessage(messages[i]);
            
            // Периодически сдвигаем сообщения вверх
            if (i % 4 === 3) {
                slideMessagesUp();
            }
        }
        
        if (!isRunning) break;
        
        // Пауза между циклами
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Сдвигаем все сообщения вверх перед новым циклом
        const allMessages = document.querySelectorAll('.message:not(.slide-up)');
        allMessages.forEach((msg, index) => {
            setTimeout(() => {
                msg.classList.add('slide-up');
                setTimeout(() => {
                    if (msg.parentNode) {
                        msg.remove();
                    }
                }, 300);
            }, index * 100);
        });
        
        // Небольшая пауза перед новым циклом
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Начинаем новый цикл диалога');
    }
}

// Запуск при загрузке страницы
window.addEventListener('load', async () => {
    console.log('Автоматический чат запущен');
    
    // Ждем немного перед началом
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Запускаем основной цикл
    runConversationCycle();
});

// Остановка при скрытии страницы
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Страница скрыта, приостанавливаем диалог');
        isRunning = false;
    } else {
        console.log('Страница снова видима, возобновляем диалог');
        isRunning = true;
        if (currentMessageIndex === 0) {
            runConversationCycle();
        }
    }
});