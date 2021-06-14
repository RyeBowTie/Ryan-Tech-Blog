const updatePost = async (event) => {
    event.preventDefault();
    const id = event.target.value

    const text = document.getElementById('update-text').value;
    const title = document.getElementById('update-title').value;

    if(title) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, text }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/profile')
        }
    } else if (!title) {
        const oldTitle = document.getElementById('old-title').value
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ oldTitle, text }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/profile')
        }
    }

};

document.getElementById('update').addEventListener('click', updatePost);