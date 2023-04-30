const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
  res.send('Dragon is running');
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (id === '0') {
    res.send(news);
  } else {
    const selectedCategories = news.filter((cid) => cid.category_id === id);
    res.send(selectedCategories);
  }
});

app.get('/news', (req, res) => {
  res.send(news);
});

app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((nid) => nid._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Dragon news is running on port: ${port}`);
});
