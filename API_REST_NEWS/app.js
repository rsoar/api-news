require('dotenv').config();
require('./src/database');

const express = require('express');
const userRoutes = require('./src/routes/user'); // register - user
const newsRoutes = require('./src/routes/news'); // index - homepage
const authRoutes = require('./src/routes/auth'); // login
const auth = require('./src/middlewares/authLogin');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

// routes
app.use('/', userRoutes); // register - user
app.use('/news', newsRoutes); // index - homepage
app.use('/user', authRoutes); // login

app.listen(process.env.PORT, () => {
  console.log('ok'); // eslint-disable-line
});
