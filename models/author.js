const mongoose = require("mongoose");
const { Schema } = mongoose;
const AuthorSchema = Schema;
const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: {
      required: true,
      type: String
    },
    adress: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    isAliv: {
      type: String,
      required: true
    },
    birthday: {
      type: String,
      required: true
    }
  })
);

module.exports = Author;





















// const Auther = new Schema(
//     {
//         name: {
//             type: String,
//         },
//     },
//     {
//         adress: {
//             type: String,
//         },
//     },{
//         phone: {
//             type: String,
//         },
//     },
//     {
//         isAvile: {
//             type: String,
//         },
//     },
//     {
//         birthday: {
//             type: String,
//         },
//     },  
// );
// const author = mongoose.model(
    //   "Author",
    //   new mongoose.Schema({
        // name: {
        //   required: true,
        //   type: String
        // },
        // adress: {
        //   type: String,
        //   required: true
        // },
        // phone: {
        //   type: String,
        //   required: true
        // },
        // isAliv: {
        //   type: String,
        //   required: true
        // },
        // birthday: {
        //   type: String,
        //   required: true
        // }
    //   })
    // );

