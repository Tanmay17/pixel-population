const { Pixel } = require('../service')
const initDuration = process.env.INIT_INTERVAL || 100; 

const Socket = (io) => {
    io.on('connection', (socket) => {
        var duration = initDuration;

        console.log('New client connected');

        var interval = setInterval(() => Pixel.sendRandomPixel(socket), duration);

        socket.on('delay', (msg) => {
            console.log('Start msg - delay : ', msg, duration);
            clearInterval(interval);
            duration += msg;
            if (duration < 0) duration = initDuration;
            console.log('End delay : ', duration);
            interval = setInterval(() => Pixel.sendRandomPixel(socket), duration);
        });

        socket.on('save', (msg) => {
            console.log('save message: ' + msg);
            // initiate socket diconnect
        });

        socket.on('disconnect', () => {
            clearInterval(interval);
            console.log('Client disconnected');
        });
    });
};

module.exports = Socket;