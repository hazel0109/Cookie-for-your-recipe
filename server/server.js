const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3000;
const { db } = require('./database/database.js');
const { config } = require('./config.js');
const { recipeController } = require('./controllers/recipeController');

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use(cors());

app.use('/recipes', recipeController.getRecipes, (req, res) => {
  return res.status(200).send(res.recipes);
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

db.initialize();
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server listening on port: ${PORT}`);
//     });
//   })
//   .catch(console.error);

module.exports = app; //-> http://localhost:3000/
// localhost:8080

// const leaderList = [
//   { name: 'Anna', id: 'a0' },
//   { name: 'Ben', id: 'b0' },
//   { name: 'Clara', id: 'c0' },
//   { name: 'David', id: 'd0' },
// ];

// app.get('/api/leaders', (req, res) => {
//   return res.status(200).send(leaderList);
// });

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://erina0109:<password>@cluster0.oqv6f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//mongodb+srv://erina0109:<password>@cluster0.oqv6f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
