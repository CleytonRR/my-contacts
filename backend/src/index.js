require('dotenv').config();
const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  response.sendStatus(500);
});

app.listen(process.env.SERVER_PORT, () => console.log(`Server running at ${process.env.SERVER_PORT}`));
