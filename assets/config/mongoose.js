// //require the l
// const e = require('express');
// const mongoose = require('mongoose');

// const url = "mongodb://localhost:27017/ContactList"

// // mongoose.connect('mongodb://localhost:8000/contacts_list_db',{
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   });

// //mongoose.connect("mongodb+srv://root:root@cluster0.czwkk2i.mongodb.net/?retryWrites=true&w=majority")
// mongoose.connect(url, {})
// .then(()=>{
//     console.log('Database connected')
// })
// .catch(err=>console.log(err))

// // const db = mongoose.connection;

// // db.on('error', console.error.bind(console, 'error connecting to db'));

// // db.once('open', function(){
// //     console.log('successfully connected to the database');
// // });

const mongoose = require('mongoose');

const url = "mongodb://0.0.0.0:27017/Contact";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database connected');
})
.catch(err => {
  console.error('Error connecting to the database:', err);
});
