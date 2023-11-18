require('dotenv/config');

const express = require('express');
const sequelize = require('./config/db');
const cors = require('cors');
const app = express();

const router = require('./router');

app.use(cors());

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectToDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log('Server running in port ' + PORT);
});
