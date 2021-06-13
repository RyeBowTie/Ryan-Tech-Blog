const submitComment =  async (event) => {
    event.preventDefault();
    const comment = document.getElementById('comment').value;
    const postId = parseInt(event.target.value);
    console.log(comment)
    console.log(typeof postId)
    if (comment && postId) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify( { comment, postId }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        }
    }

};

document.getElementById('submit').addEventListener('click', submitComment);