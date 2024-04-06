// document.getElementById('sendSignal').addEventListener('click', () => {
//     fetch('/signal', {
//         method: 'POST',
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// });

document.getElementById('sendSignal').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/app', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ signal: 'blink' }) // Example payload
        });
        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error('Error:', error);
    }
});