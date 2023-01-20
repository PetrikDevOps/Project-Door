const path = require('path');

const express = require('express');
const app = express();
const path = require('path');

const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'termek',
    user: 'postgres',
    password: 'admin'
});
client.connect();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views', 'index.ejs'));
});


app.listen(3000);
