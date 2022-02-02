const Author=require("../models/author")

const getAllAuthors = () => {
    return new Promise((resolve, reject) => {
      Author.find()
        .then((author) => resolve(author))
        .catch((err) => reject(err));
    });
  };

  const addingAuthors = (name="",adress="",phone="",isAliv="",birthday="") => {
    return new Promise((resolve, reject) => {
      let theautor = new Author({
        name,
        adress,
        phone,
        isAliv,
        birthday,
      });
      theautor.save((err, theautor) => (err ? reject(err) : resolve(theautor)));

    })
}
  exports.getAllAuthors=getAllAuthors
  exports.addingAuthors=addingAuthors