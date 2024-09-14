const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const vegNameReplacements = require('./vegNameReplacements');

const app = express();

app.use(cors());
app.get('/Gallery', async (req, res) => {
	try { 
		const vegResponse = await axios.get('https://onlymyenglish.com/Gallery-name-english/');
		const vegDom = new JSDOM(vegResponse.data);
		const vegList = vegDom.window.document.querySelectorAll('.entry-content .wp-block-table table tbody tr td');
		const vegNames = (Array.from(vegList).map((el) => el.textContent.trim())).filter(el => el.length>3);

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
					const imageUrl_three = dom_img.window.document.querySelector('.mw-file-element')?.src;
					if (imageUrl) {
						return imageUrl;
					}
					else if (imageUrl_two) {
						return imageUrl_two;
					}
					else {
						return imageUrl_three
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
		alert('Something went wrong, please try again later');
	}
});

app.listen(5002, () => {
	console.log('Proxy server is listening on port 5002');
}).on('error', (error) => {
	console.error('Error starting server:', error);
});