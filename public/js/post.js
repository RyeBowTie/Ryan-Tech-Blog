const postForm = async (event) => {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const text = document.getElementById('post-text').value;

    if (title && text) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        }
    } else {
        alert('There was a problem posting!')
    }
};

document.getElementById('post').addEventListener('click', postForm);
