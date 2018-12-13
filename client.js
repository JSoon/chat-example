let connectionInterval = 100;
let numberOfUsersToConnect = 1000;

for (let i = 1; i <= numberOfUsersToConnect; i++) {

    // setTimeout(() => {
        let socket = require('socket.io-client')('http://localhost:3000', {
            transports: ['polling', 'websocket'],
            forceNew: true
        });
        socket.on('connect', function () {

        });
        socket.on('pulse', function (data) {
            console.log('pulse', data);

        });
        socket.on('disconnect', function (reason) {
            console.error('reason', reason);

        });
        socket.on('error', function (error) {
            console.error('error', error);
        });
    // }, i * connectionInterval);

}