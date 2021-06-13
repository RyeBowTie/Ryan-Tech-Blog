const deletePost = async (event) => {
    event.preventDefault();
    const post = event.target.value;

    const response = await fetch(`/api/posts/${post}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/profile');
    } 
};

document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener("click", deletePost);
})

