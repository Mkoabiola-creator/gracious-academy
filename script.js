

document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('email-form');

    emailForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;

        if (email) {
            alert(`Thank you for signing up, ${email}! You'll start receiving updates soon.`);
            emailForm.reset(); // Clear the form
        } else {
            alert('Please enter a valid email address.');
        }
    });
});


