const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the home page");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Wazzzapp");
});

