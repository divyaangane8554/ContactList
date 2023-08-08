const express = require('express');
const path = require('path')
const port = 8000;

const mongoose = require("mongoose")
const Contact = require('./models/contacts.js');

const app = express();


app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets')); 

mongoose.connect("mongodb://0.0.0.0:27017/Contact")
.then(()=>console.log("Database connected"))
.catch((err)=>console.log(err))
var contactList = [
    {
        name: "divya",
        phone: "389889873"
    },
    {
        name: "snehal",
        phone: "30490848843"
    },
    {
        name: "samir",
        phone: "8439898585"
    }
]

//controller
app.get("/",async function(req, res){
  
    const getAllContacts = await Contact.find();
    return res.render('home', {
        title: "my contact list",
        contacts_list: getAllContacts
    });
});

//controller forprofile file
app.get("/profile", function(req, res){
    return res.render('profile', { 
        title: "my profile"
    });
});

app.post("/create-contact", async function(req, res){
    try{
        await Contact.create(req.body)
        res.redirect("/")
    
}
catch(error){
    return res.status(500).json({error})
}
});

app.get('/delete-contact', function(req, res){
    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    
    if (contactIndex != -1){
        contactList.splice(contactIndex, 1);
    }

    return res.redirect('back'); //redirecting too back after deleting
});

app.listen(port, function(err){
    if(err){
        console.log("Oops there is prob;em in server...");
    }
    console.log(`YEs! server working fine on port ${port}`);
})