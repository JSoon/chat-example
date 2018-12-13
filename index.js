var app = require('express')();
var http = require('http').Server(app);
var session = require('express-session');
var Redis = require('ioredis');
var RedisStore = require('connect-redis')(session);
var adapter = require('socket.io-redis');
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// var sessionStore = '';
// var redisClient = {
//     host: '127.0.0.1',
//     port: 6379,
//     ttl: 30 * 60
// };
// sessionStore = new RedisStore(redisClient);
// //开启session
// app.use(session({
//     cookie: {
//         path: '/',
//         httpOnly: true,
//         secure: false,
//         maxAge: 30 * 60 * 1000
//     },
//     secret: '1234567890qwert@',
//     name: 'migu_music_sid',
//     saveUninitialized: false,
//     resave: false,
//     store: sessionStore
// }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// io.adapter(adapter(redisClient));

io.on('connection', function (socket) {

    // 连接数
    io.clients((error, clients) => {
        if (error) throw error;
        // console.log(clients); // => [PZDoMHjiu8PYfRiKAAAF, Anw2LatarvGVVXEIAAAD]
        console.log('当前连接数：', clients.length);
    });

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

require('./client');

http.listen(port, function () {
    console.log('listening on *:' + port);
});