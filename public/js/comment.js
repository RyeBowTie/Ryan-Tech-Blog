const commentForm = (event) => {
    event.preventDefault();
    const id = event.target.value
    document.location.replace(`/post/${id}`)
};

const comments = document.querySelectorAll('.comment').forEach(comment => {
    comment.addEventListener('click', commentForm);
});

