const express = require('express');
const logger = require('morgan');

const { host, port } = require('./config');


const auth = require('./middleware/auth');

const userRouter = require('./routers/user');

const server = express();

server.use(logger('dev'));

server.use(auth);

server.use('/user', userRouter);

server.listen(port, host, () => console.log(`Your API started at http://${host}:${port}`));