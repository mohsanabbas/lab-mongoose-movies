const mongoose = require('mongoose');
const celebrity = require('../model/celebrity.js');
const dbtitle = 'CelebrityDB';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
celebrity.collection.drop();

const celebrityData = [
    {
        name : 'Morgan freeman',
        occupation : 'actor',
        catchPhrase: 'How do we change the world? One random act of kindness at a time.'
    },
    {
        name : 'Kristen Stewart',
        occupation : 'actor',
        catchPhrase: 'I think romance is anything honest. As long as it\'s honest, it\'s so disarming.'

    },
    {
        name : 'Winona Ryder',
        occupation : 'actor',
        catchPhrase: 'I feel my best when I am happy.'
      }
];


celebrity.create(celebrityData, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrityData.length} books`)
    mongoose.connection.close()
  });


// const createCelebrity = new celebrity (celebrityData);
// // const newAuthor = new Author(book.author)
//   return createCelebrity.save()
//   .then(celebrity => {
//     return celebrity.name;
//   })
//   .catch(error => {
//     throw new Error(`Impossible to add the author. ${error}`)
//   })
