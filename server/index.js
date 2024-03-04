const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./utils/config');

const app = express();
// app.use(
//   cors({
//     origin: [
//       'https://jp-conjugation.lm.r.appspot.com',
//       'http://localhost:5174',
//     ],
//     methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
//     allowedHeaders: '*',
//   })
// );

app.use(cors());

console.log('hello');

// app.use(cors())

app.options('*', cors());
app.use(express.json());

mongoose.connect(config.MONGODB_URI);

const VerbSchema = new mongoose.Schema({
  japanese: String,
  hiraganaReading: String,
  romanization: String,
  englishTranslation: String,
  verbClass: Number,
  transitiveIntransitive: String,
});

const Verb = mongoose.model('Verb', VerbSchema);

app.get('/', async (req, res) => {
  console.log('get request');
  const wordCount = await Verb.estimatedDocumentCount();
  const randomNum = Math.floor(Math.random() * wordCount);
  const randomWord = await Verb.findOne().skip(randomNum);
  console.log('random word: ', randomWord);
  console.log('word count: ', wordCount);
  res.json(randomWord);
  return res.status(201);
});

// app.post('/', async (req, res) => {
//   console.log(req.body);
//   const newVerb = new Verb({
//     word: req.body.word,
//     type: req.body.type,
//   });
//   try {
//     const response = await newVerb.save();
//     res.json(response)
//     return res.status(201);
//   } catch (err) {
//     console.log('ERROR: ', err);
//     return res.status(400);
//   }
// });

app.get('/ping', (req, res) => {
  res.send('ping');
});

const PORT = process.env.PORT || 3001;

console.log(PORT);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
