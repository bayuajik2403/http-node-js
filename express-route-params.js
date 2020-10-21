const express = require('express');
const app = express();
const port = 8081;

app.get(`/`, (req, res) => res.send('Hello World!'));

app.get('/post/:id/category/:category_id', (req, res)=>{
    res.send(`<p> here is ${req.params.id}</p> <p> here is ${req.params.category_id}</p>`);
});

app.listen(port, () => console.log(`Example app listening on port port!`));