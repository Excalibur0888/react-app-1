const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const app = express();

app.use(cors());
app.get('/api', async (req, res) => {
	try {
		const response = await axios.get('https://simple.m.wikipedia.org/wiki/List_of_fruits');
		const dom = new JSDOM(response.data);
		const fruitList = dom.window.document.querySelectorAll('#mw-content-text .div-col ul li a');
		const fruitNames = Array.from(fruitList).map((el) => el.textContent.trim());
		res.set('Access-Control-Allow-Origin', '*'); 
		res.json(fruitNames);
	} catch (error) {
		console.error(error);
	}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Proxy server is listening on port ${PORT}`);
});
