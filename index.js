const express = require('express');
const app = express();
const PORT = 3000;

require('./middlewares/load.middleware')(app);
require('./middlewares/dbConnect').connectDb();

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})

module.exports = app;