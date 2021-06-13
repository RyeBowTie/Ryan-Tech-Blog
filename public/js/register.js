const registerForm = async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name-register').value;
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;

    if (name && email && password) {
        const response = await fetch('api/users/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to register!');
        }
    }
};

document.getElementById('register').addEventListener('click', registerForm)