const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.use(cors());
app.get('/api', async (req, res) => {
  try {
    const response = await axios.get('https://simple.wikipedia.org/wiki/List_of_fruits');
    const $ = cheerio.load(response.data);
    const fruitList = $('#mw-content-text .div-col ul li');
		const fruitItems = fruitList.find('a');
    const fruitNames = fruitItems.map((el) => $(el).text().trim()).get();
    res.set('Access-Control-Allow-Origin', '*'); 
    res.json(fruitNames);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Proxy server is listening on port ${PORT}`);
});
