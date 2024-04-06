document.getElementById('sendSignal').addEventListener('click', () => {
    fetch('/signal', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
