const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('<h1> ISIMM 24/25 : ING2 Updated CI CD Watchtower v </h1>');
});
module.exports = app;
