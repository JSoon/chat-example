let connectionInterval = 100;
let numberOfUsersToConnect = 1000;

for (let i = 1; i <= numberOfUsersToConnect; i++) {

    setTimeout(() => {
        let socket = require('socket.io-client')('http://localhost:3000', {
            transports: ['websocket'],
            forceNew: true
        });
        socket.on('connect', function () {

        });
        socket.on('event', function (data) {});
        socket.on('disconnect', function (reason) {
            console.error('reason', reason);

        });
        socket.on('error', function (error) {
            console.error('error', error);
        });
    }, i * connectionInterval);

}