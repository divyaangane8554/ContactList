//require the l
const e = require('express');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:8000/contacts_list_db',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

mongoose.connect("mongodb+srv://root:root@cluster0.czwkk2i.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Database connected')
})
.catch(err=>console.log(err))

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'error connecting to db'));

// db.once('open', function(){
//     console.log('successfully connected to the database');
// });
