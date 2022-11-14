require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const router2 = require('./routes/rutebaru');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/aku', router2);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running');
});
