require('dotenv').config();
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const controllers = require('./controllers');

const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'DELETE', 'OPTIONS']
    })
)
app.use(cookieParser());

app.get('/user/profile', controllers.profile);
app.get('/user/profile/:tagName', controllers.profile);
app.post('/photo/deleteimage', controllers.deleteImage);
app.post('/photo/upload', controllers.upload);
app.delete('/user/close', controllers.close);
app.get('/user/userinfo', controllers.userInfo);

// server test code
// app.get('/', (req, res) => {
//     res.status(201).send('hello world.')
// })

const port = 4000;

http.createServer(app).listen(port, () => {
    console.log(`서버가 ${port}에서 정상적으로 작동하고 있습니다.!!`)
});