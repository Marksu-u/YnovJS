const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const models = require('.user.model');
const app = express();

const url = "mongodb+srv://root:root@clusterynovjs2022.vyzrjhs.mongodb.net/?retryWrites=true&w=majority"

async function main() {
    await mongoose.connect(url);
}

const userM = mongoose.model('user', userSchema)

app.use(bodyParser.json());





app.post('/auth/register', function(req, res) {
    const newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })
    newUser.save().then((user) => {
        res.send(user);
    })
    .catch(err => {
        res.status(404).send(err);
    })
})


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