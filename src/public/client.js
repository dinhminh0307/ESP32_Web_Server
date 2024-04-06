const buttonClick = document.getElementById("love-button");
buttonClick.addEventListener("click", () => {
    console.log('button was clicked');
    // Send a POST request to the server
    fetch('/button-clicked', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Button clicked!' }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
})