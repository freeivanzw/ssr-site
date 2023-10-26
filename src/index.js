const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const engine = require('ejs-mate');
const bodyParser = require('body-parser');
const router = require('./router');
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('ejs', engine);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'static')));
app.use(router);


const start = async () => {
    try {

        app.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`)
        })
    } catch (err) {
        console.log(err);
    }
}

start();