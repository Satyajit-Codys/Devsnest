const express = require('express');
const app = express();

// need to take care of security, performace and edge cases
//CRUD -> POST, GET, PUT, DELETE
const slash =  (req, res) => {
    //res.send("Hello");
    //res.json(a:1) only for json file types
    res.status(200).send("hello");
};

//HTTP response codes:
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
app.get('/', slash);
app.post('/', slash);
app.put('/', slash);
app.delete('/', slash);


app.get('/products', (req, res) => {
    res.send(req.query.q);
})

//when we want to have same endpoint for closely different

//for acd or abcd
app.get('/ab?cd', (req, res) => {
    res.send("abcd");
})

//for as many times of b
app.get('/ab+cd', (req, res) => {
    res.send("ab+cd");
})
//anything after ab and ending with cd
app.get('/ab*cd', (req, res) => {
    res.send("ab*cd");
})
// for optional cd
app.get('/ab(cd)?e', (req, res) => {
    res.send("ab(cd)?e");
})

// we can use js regex here like this
app.get('/.*fly', (req, res) => {
    res.send("ending with fly using regex");
})

//for dynamic url routing
// variables starting with :
app.get('/user/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
})

app.listen(5000);