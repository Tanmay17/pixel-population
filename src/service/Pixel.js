const sendRandomPixel = (socket) => {
    const x = Math.floor(Math.random() * 800);
    const y = Math.floor(Math.random() * 600);
    // console.log({x, y})
    socket.emit('mark', { x, y });
};

module.exports = {
    sendRandomPixel
}