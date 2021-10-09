require('dotenv').config();
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// const userRouter = require('./routers/UserRouter');
// const personRouter = require('./routers/PersonRouter');
// const photoRouter = require('./routers/PhotoRouter');

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

// app.use('/user', userRouter);
// app.use('/person', personRouter);
// app.use('/photo', photoRouter);

app.get('/person/profile', controllers.profile);
app.get('/person/profilebytag', controllers.profilebytag);
// app.get('/info', controllers.info);
// app.post('/signup', controllers.signup);
// app.post('/login', contollers.login);
// app.post('/logout', contollers.logout);
app.post('/user/userinfo', controllers.userinfo);
app.post('/photo/upload', controllers.upload);
app.post('/photo/deleteimage', controllers.deleteimage);
app.delete('/user/close', controllers.close);

// server test code
// app.get('/', (req, res) => {
//     res.status(201).send('hello world.')
// })

const port = 4000;

http.createServer(app).listen(port, () => {
    console.log(`서버가 ${port}에서 정상적으로 작동하고 있습니다.!!`)
});