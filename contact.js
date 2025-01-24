document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display a confirmation alert
        alert(`Thank you, ${name}! We have received your message and will get back to you soon.`);
        
        // Optionally clear the form
        form.reset();
    });
});
