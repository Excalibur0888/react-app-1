const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const vegNameReplacements = require('./vegNameReplacements');

const app = express();

app.use(cors());
app.get('/vegetables', async (req, res) => {
	try { 
		const vegResponse = await axios.get('https://onlymyenglish.com/vegetables-name-english/');
		const vegDom = new JSDOM(vegResponse.data);
		const vegList = vegDom.window.document.querySelectorAll('.entry-content .wp-block-table table tbody tr td');
		const vegNames = (Array.from(vegList).map((el) => el.textContent.trim())).filter(el => el.length > 3);

		vegNames.forEach((veg, index) => {
			const replacement = vegNameReplacements[veg];
			if (replacement) {
				vegNames[index] = replacement;
			}
		});

		vegNames.sort()
		const vegImages = await Promise.all(
			vegNames.map(async (veg) => {
				try {
					const response_img = await axios.get(`https://en.wikipedia.org/wiki/${veg}`);
					const dom_img = new JSDOM(response_img.data);
					const imageUrl = dom_img.window.document.querySelector('.infobox tbody tr td a img')?.src;
					const imageUrl_two = dom_img.window.document.querySelector('.thumbimage')?.src;
					if (imageUrl) {
						return imageUrl;
					}
					else {
						return imageUrl_two;
					}
				} catch (error) {
					console.error(error);
					return null;
				}
			})
		);

		res.set('Access-Control-Allow-Origin', '*');
		res.set('Cache-Control', 'public, max-age=86400'); // Кэшировать на 1 день (86400 секунд)
		res.json({ vegNames, vegImages });
	} catch (error) {
		console.error(error);
	}
});

app.listen(5001, () => {
	console.log('Proxy server is listening on port 5001');
});
