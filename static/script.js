document.addEventListener("DOMContentLoaded", function() {
    // Знайти форму на сторінці за її елементом або класом
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
      // Запобігти стандартній поведінці форми (відправка)
      e.preventDefault();
  
      // Вивести повідомлення користувачеві
      alert('Thanks for sending a request, I will connect with you as soon as possible.');

    });
  });
  