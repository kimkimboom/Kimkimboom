// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation (basic example)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
    } else {
        alert('Form submitted successfully!');
        form.reset();
    }
});
￼Enter
