const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the home page");
});

app.listen(3000, () => {
    console.log("Wazzzapp");
});

