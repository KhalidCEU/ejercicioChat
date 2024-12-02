const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat', { username: username, message: input.value });
        input.value = '';
    }
});

socket.on('chat', (data) => {
    console.log("Mensaje recibido: ");
    const item = document.createElement("li");
    item.textContent = `${data.username}: ${data.message}`;
    messages.appendChild(item);
});