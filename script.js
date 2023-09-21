// share nd down
const shareButton = document.getElementById('shareButton');
const downloadButton = document.getElementById('downloadButton');

shareButton.addEventListener('click', () => {
    // clip share
    const shareableLink = window.location.href;
    navigator.clipboard.writeText(shareableLink)
        .then(() => {
            alert('Link copied to clipboard: ' + shareableLink);
        })
        .catch((err) => {
            console.error('Failed to copy link: ', err);
        });
});
