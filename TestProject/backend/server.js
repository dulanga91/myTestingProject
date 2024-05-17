const express = require('express');
const cors = require('cors');
const connection = require('./database/connection');
const routes = require('./router/routes');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
const FrontURL = process.env.Frontend_URL;
app.use(cors({
    origin: FrontURL,
    credentials: true
}));
app.use(routes);
// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})