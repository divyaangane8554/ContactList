const express = require('express');
const path = require('path')
const port = 8000;


const mongoose = require('./assets/config/mongoose.js');

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded()); //Parser midllewhere
app.use(express.static('assets')); //initialize of asset folder to use further directories

// middlewares
//req is a object

//middleware1
// app.use(function(req,res, next){
//     // console.log('middleware 1 called');
//     req.myname="Divya";
//     next(); //next is mandatory to jump to next steps,funtions
// });

// //middleware2
// app.use(function(req, res, next){
//     console.log("my name from mdw2", req.myname);
//     next();
// })

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
    // other entered array will be added here
]

//controller
app.get("/", function(req, res){
    // console.log(__dirname);
    // res.send("<h1>this is some page</h1>");

    // console.log("my name from route controller" ,req.myname)
    return res.render('home', {
        title: "my contact list",
        contacts_list: contactList
    });
});

//controller forprofile file
app.get("/profile", function(req, res){
    return res.render('profile', { 
        title: "my profile"
    });
});

app.post("/create-contact", function(req, res){
    // return res.redirect('/profile');
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);

    contactList.push({
        name: req.body.name,
        phone: req.body.phone,
    });

    // contactList.push(req.body);

    return res.redirect('back');
});

// :phone is variable
app.get('/delete-contact', function(req, res){
    // get the query from url
    //console.log(req.query);
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
    console.log("YEs! server working fine");
})