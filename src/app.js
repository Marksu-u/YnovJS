const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// first route GET
app.get('/', function(req, res) {
    // console.log('test');
    res.send({
        message: "200 OK",
        auth: false,
        myproducts: [ { id: 1 }, { id: 2 } ]
    });
});

app.post('/api/v1/auth/login', function(req, res) {
    // console.log(req.body);
    if (!req.body.email) {
        return res.status(404).send({
            auth: false,
            message: "User not found"
        })
        res.send({
            auth: true,
            message: "User logged"
        })
    }
})


const myUser = JSON.stringify( {
    firstName: "Zebi",
    lastName: "Dess"
});

console.log(JSON.parse(myUser));

app.listen("4000", function() {
    console.log('Server Launch');
});