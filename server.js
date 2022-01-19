require("dotenv").config();
require("./src/database/sequelize");

const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const PORT = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(express.json());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    app.use(cors());
    next();
});
app.use(routes);

app.listen(PORT, function () {
    console.log(`Server runing on port ${PORT}`);
});