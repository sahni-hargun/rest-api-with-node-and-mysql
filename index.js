var express = require('express');
var bodyParser = require("body-parser");
const council = require('./council');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET ALL
app.get('/council', async function(req, res){
    const councilMembers = await council.getCouncilMembers();
    res.send({councilMembers});
});

// GET
app.get("/council/:id", async function(req, res) {
    const id = req.params.id;
    const councilMember = await council.getCouncilMemberById(id);
    res.send(councilMember);
});

// POST
app.post("/council", async function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    await council.addCouncilMember(firstName, lastName);
    res.send({"message": "Success"});
});

// PUT
app.put("/council/:id", async function(req, res) {
    const id = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    await council.editCouncilMember(id,firstName,lastName);
    res.send({"message": "Success"});
});

// DELETE
app.delete("/council/:id", async function(req, res) {
    const id = req.params.id;
    await council.removeCouncilMember(id);
    res.send({"message": "Success"});
});

app.listen(process.env.PORT || 3000,function(req,res){
    console.log("Server Started!");
});