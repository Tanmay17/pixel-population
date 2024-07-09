const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const socket = io();


socket.on('mark', (data) => {
    const { x, y } = data;
    context.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    context.fillRect(x, y, 1, 1);
});

const delayButton = document.getElementById("delay");
const speedButton = document.getElementById("speedup");
const saveButton = document.getElementById("save");

delayButton.addEventListener('click', () => {
    socket.emit('delay', 100);
});

speedButton.addEventListener('click', () => {
    socket.emit('delay', -100);
});

saveButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = canvas.toDataURL();
    link.click();
    socket.emit('disconnect');
});