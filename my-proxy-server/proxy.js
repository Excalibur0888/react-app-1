const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fruitNameReplacements = require('./fruitNameReplacements');

const app = express();

app.use(cors());
app.get('/api', async (req, res) => {
	try {
		const response = await axios.get('https://simple.m.wikipedia.org/wiki/List_of_fruits');
		const dom = new JSDOM(response.data);
		const fruitList = dom.window.document.querySelectorAll('#mw-content-text .div-col ul li a');
		const fruitsToRemove = ["Catmon", "Dragonfruit", "Caviar Lime", "Sampaloc"];
		const fruitNames = (Array.from(fruitList).map((el) => el.textContent.trim())).filter((fruit) => !fruitsToRemove.includes(fruit));;
		fruitNames.forEach((fruit, index) => {
			const replacement = fruitNameReplacements[fruit];
			if (replacement) {
				fruitNames[index] = replacement;
			}
		});
		fruitNames.sort()
		const fruitImages = await Promise.all(
			fruitNames.map(async (fruit) => {
				try {
					const response_img = await axios.get(`https://en.wikipedia.org/wiki/${fruit}`);
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
		res.json({ fruitNames, fruitImages });
	} catch (error) {
		alert('Something went wrong, please try again later');
	}
});

app.listen(5000, () => {
	console.log('Proxy server is listening on port 5000');
}).on('error', (error) => {
	console.error('Error starting server:', error);
});