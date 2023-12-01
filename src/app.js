require('dotenv/config');

const express = require('express');
const sequelize = require('./config/db');
const cors = require('cors');
const app = express();

app.use(cors());

// Enable CORS for all routes
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://fe-greenworldaware.vercel.ap');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const router = require('./router');

connectToDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log('Server running in port ' + PORT);
});
