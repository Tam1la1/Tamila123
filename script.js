// Переключение темы
const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
};

// Валидация формы
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Сообщение отправлено!');
});

// Создание снежинок (анимация снега)
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    const size = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);

// Добавление кнопки для переключения темы
const themeButton = document.createElement('button');
themeButton.innerText = 'Переключить тему';
themeButton.onclick = toggleTheme;
document.body.appendChild(themeButton);
