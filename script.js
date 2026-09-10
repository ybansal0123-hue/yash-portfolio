const menuButtons = document.querySelectorAll('.menu');

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const navLinks = document.querySelector('.navlinks');

    if (navLinks) {
      navLinks.classList.toggle('open');
    }
  });
});

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('show'));
}

document.querySelectorAll('form[data-demo]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = form.querySelector('.formmsg');

    if (message) {
      message.textContent = form.dataset.success || 'Thanks! Your request has been received.';
    }

    form.reset();
  });
});
