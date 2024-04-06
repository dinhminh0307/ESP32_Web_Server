const buttonClick = document.getElementById("love-button");
var socket = io();
buttonClick.addEventListener("click", () => {
    console.log('button was clicked');
   // Establish a connection to the server
   socket.emit('buttonPressed');
   console.log('Signal sent to server');

    // Function to send a signal to the server
})