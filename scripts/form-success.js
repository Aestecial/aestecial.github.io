// Обработка отправки формы
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Получаем значения из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Проверяем, что все поля заполнены
    if (name && email && message) {
        alert('Форма отправлена!');
        document.querySelector('.contact-form').reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});