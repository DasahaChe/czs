const messages = [
    // Пользователь спрашивает
    { text: "Найди сети для продукции", type: "user", delay: 1200 },
    // Бот уточняет
    { text: "продукция какой категории у вас есть", type: "bot", delay: 1800 },
    // Пользователь отвечает
    { text: "молочка", type: "user", delay: 1200 },
    // Бот предлагает варианты
    { text: "ближайшее событие с категориями \"food\" \"молочная продукция\" пройдёт в апреле. Хотите узнать больше и зарегистрироваться на событии или получить список всех подходящих событий?", type: "bot", delay: 2400 },
    // Пользователь выбирает
    { text: "Узнать больше о событии", type: "user", delay: 1200 },
    // Бот рассказывает о событии
    { text: "Отраслевая экосистема, которая создает максимальные возможности для развития бизнеса: от личных встреч и экспертных знаний на выставке и саммите до круглогодичного онлайн-нетворкинга", type: "bot", highlight: true, delay: 3000 },
    // Пользователь спрашивает о сетях
    { text: "Посмотреть сети на мероприятии", type: "user", delay: 1200 },
    // Бот перечисляет сети
    { text: "В списке сетей Ашан, Перекрёсток, ВкусВилл. Хотите полный список сетей?", type: "bot", delay: 1800 },
    // Пользователь хочет зарегистрироваться
    { text: "Зарегистрироваться на событие", type: "user", delay: 1200 },
    // Бот подтверждает
    { text: "✅ Отлично! Регистрация открыта. Отправляю вам ссылку для регистрации и подробную программу мероприятия на апрель.", type: "bot", action: true, delay: 2400 },
    // Бот предлагает дополнительные услуги
    { text: "Также могу предложить подготовить персональные рекомендации по участникам для нетворкинга. Интересует?", type: "bot", delay: 1800 },
    // Пользователь соглашается
    { text: "Да, отправьте рекомендации", type: "user", delay: 1200 },
    // Бот подтверждает подготовку
    { text: "📋 Готовлю подборку компаний с учетом вашей продукции. Пришлю на почту в течение часа. Нужна дополнительная информация по мероприятию?", type: "bot", delay: 2400 },
    // Пользователь спрашивает о вариантах
    { text: "Какие есть варианты участия?", type: "user", delay: 1200 },
    // Бот перечисляет варианты
    { text: "Есть несколько пакетов: Базовый (доступ к выставке), Бизнес (выставка + саммит) и Премиум (все включено + персональные встречи). Какой вариант вас интересует?", type: "bot", delay: 3000 }
];

let currentMessageIndex = 0;
let isRunning = true;
let isFlipAnimationActive = false;
const typingSpeed = 40;
const messagesContainer = document.getElementById('messagesContainer');
const chatWrapper = document.querySelector('.chat-wrapper');

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
    messageDiv.className = `message ${message.type}${message.highlight ? ' highlight' : ''}${message.action ? ' action' : ''}`;
    
    const textSpan = document.createElement('span');
    textSpan.className = 'message-text';
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = getCurrentTime();
    
    messageDiv.appendChild(textSpan);
    messageDiv.appendChild(timeSpan);
    
    // Добавляем иконку бота для сообщений от бота
    if (message.type === 'bot') {
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
    
    await typeWriterEffect(textElement, message.text, typingSpeed);
    await new Promise(resolve => setTimeout(resolve, message.delay));
}

// Показать сообщение бота (с индикатором, потом сразу весь текст)
async function showBotMessage(message) {
    await showTypingIndicator();
    
    const { container, textElement } = createMessageElement(message);
    textElement.textContent = message.text;
    messagesContainer.appendChild(container);
    scrollToBottom();
    
    await new Promise(resolve => setTimeout(resolve, message.delay));
}

// Общая функция показа сообщения
async function showMessage(message) {
    if (message.type === 'bot') {
        await showBotMessage(message);
    } else {
        await showUserMessage(message);
    }
}

// Сдвиг сообщений вверх и удаление старых
function slideMessagesUp() {
    const allMessages = document.querySelectorAll('.message:not(.slide-up)');
    
    if (allMessages.length > 6) {
        const messagesToRemove = Array.from(allMessages).slice(0, allMessages.length - 6);
        
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

// Анимация разворота экрана мессенджера
async function performFlipAnimation() {
    if (isFlipAnimationActive) return;
    isFlipAnimationActive = true;
    
    console.log('Начинаем анимацию разворота...');
    
    // Добавляем стили для анимации
    chatWrapper.style.transition = 'transform 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    chatWrapper.style.transformOrigin = 'center center';
    chatWrapper.style.perspective = '1000px';
    
    // Шаг 1: Наклон вперед
    chatWrapper.style.transform = 'rotateY(0deg) translateZ(0)';
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Шаг 2: Начало вращения
    chatWrapper.style.transform = 'rotateY(20deg) translateZ(50px)';
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Шаг 3: Ускорение вращения
    chatWrapper.style.transform = 'rotateY(60deg) translateZ(100px)';
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Шаг 4: Пик вращения (почти 90 градусов)
    chatWrapper.style.transform = 'rotateY(85deg) translateZ(150px) scale(0.95)';
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // Шаг 5: Завершение первой половины вращения
    chatWrapper.style.transform = 'rotateY(180deg) translateZ(200px) scale(0.9)';
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // Шаг 6: Начало возвращения
    chatWrapper.style.transform = 'rotateY(200deg) translateZ(150px) scale(0.95)';
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Шаг 7: Завершение вращения
    chatWrapper.style.transform = 'rotateY(360deg) translateZ(0) scale(1)';
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Шаг 8: Конец анимации
    chatWrapper.style.transform = 'rotateY(0deg)';
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Убираем стили анимации
    chatWrapper.style.transition = '';
    chatWrapper.style.transform = '';
    chatWrapper.style.transformOrigin = '';
    chatWrapper.style.perspective = '';
    
    console.log('Анимация разворота завершена');
    
    isFlipAnimationActive = false;
}

// Упрощенная версия анимации (альтернатива)
async function performSimpleFlipAnimation() {
    if (isFlipAnimationActive) return;
    isFlipAnimationActive = true;
    
    // Добавляем CSS класс для анимации
    chatWrapper.classList.add('flip-animation');
    
    // Ждем завершения анимации
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Убираем класс
    chatWrapper.classList.remove('flip-animation');
    
    isFlipAnimationActive = false;
}

// Основной цикл переписки (автоматический, бесконечный)
async function runConversationCycle() {
    let cycleCount = 0;
    const maxCyclesBeforeFlip = 2; // Количество циклов перед разворотом
    
    while (isRunning) {
        console.log(`Начало цикла ${cycleCount + 1}`);
        
        for (let i = 0; i < messages.length; i++) {
            if (!isRunning) break;
            
            currentMessageIndex = i;
            await showMessage(messages[i]);
            
            if (i % 4 === 3) {
                slideMessagesUp();
            }
        }
        
        if (!isRunning) break;
        
        cycleCount++;
        
        // Пауза между циклами
        await new Promise(resolve => setTimeout(resolve, 1500));
        slideMessagesUp();
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Проверяем, нужно ли выполнять анимацию разворота
        if (cycleCount % maxCyclesBeforeFlip === 0) {
            console.log(`Выполнено ${cycleCount} циклов, запускаем анимацию разворота`);
            
            // Выполняем анимацию разворота
            await performFlipAnimation();
            
            // Пауза после анимации
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // Небольшая пауза перед новым циклом
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Показать приветственное сообщение отдельно
async function showWelcomeMessage() {
    await showBotMessage({
        text: "Привет! Я ваш ассистент по поиску мероприятий и сетей. Готов помочь с поиском подходящих событий для вашей продукции.",
        type: "bot",
        delay: 1500
    });
}

// Запуск при загрузке страницы
window.addEventListener('load', async () => {
    console.log('Страница загружена, начинаем переписку...');
    
    // Ждем немного перед началом
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Показываем приветственное сообщение
    await showWelcomeMessage();
    
    // Запускаем основной цикл
    runConversationCycle();
});

// Остановка при скрытии страницы
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Страница скрыта, приостанавливаем переписку');
        isRunning = false;
    } else {
        console.log('Страница снова видима, возобновляем переписку');
        isRunning = true;
        if (currentMessageIndex === 0) {
            runConversationCycle();
        }
    }
});

// Добавляем CSS для анимации разворота
(function addFlipAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes flip3D {
            0% {
                transform: rotateY(0deg) scale(1);
                opacity: 1;
            }
            25% {
                transform: rotateY(90deg) scale(0.9);
                opacity: 0.8;
            }
            50% {
                transform: rotateY(180deg) scale(0.8);
                opacity: 0.6;
            }
            75% {
                transform: rotateY(270deg) scale(0.9);
                opacity: 0.8;
            }
            100% {
                transform: rotateY(360deg) scale(1);
                opacity: 1;
            }
        }
        
        .flip-animation {
            animation: flip3D 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
            transform-style: preserve-3d;
            perspective: 1000px;
        }
        
        /* Эффект отражения при развороте */
        .chat-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.3) 100%);
            border-radius: 20px;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .flip-animation::before {
            opacity: 0.5;
            animation: reflectionPulse 2s ease-in-out;
        }
        
        @keyframes reflectionPulse {
            0%, 100% { opacity: 0; }
            25%, 75% { opacity: 0.5; }
            50% { opacity: 0.8; }
        }
    `;
    document.head.appendChild(style);
})();