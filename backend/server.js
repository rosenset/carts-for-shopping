const express = require('express');
const port = 9999;
const app = express();
const cart = require('./routes/cartItems');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/', cart);

app.listen(port, () => console.log(`runnin on ${port}`))