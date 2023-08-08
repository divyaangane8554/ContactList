const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;


// const mongoose = require('mongoose');

// const contactShcema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     phone: {
//         type: String,
//         require: true
//     }
// });

// //collection name contact collection
// const Contact = mongoose.model('Contact', contactShcema);

// //exporting the 
// module.exports = Contact;

