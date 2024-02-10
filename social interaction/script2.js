document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const commentText = document.getElementById('comment').value;

        if (username && commentText) {
            const timestamp = new Date().toLocaleString();
            const comment = `${timestamp} - ${username}: ${commentText}`;

            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.textContent = comment;

            commentsContainer.appendChild(commentElement);

            document.getElementById('username').value = '';
            document.getElementById('comment').value = '';
        }
    });
});
