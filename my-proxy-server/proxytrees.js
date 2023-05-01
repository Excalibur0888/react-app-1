const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const treeNameReplacements = require('./treeNameReplacements');

const app = express();

app.use(cors());
app.get('/trees', async (req, res) => {
	try { 
		const treeResponse = await axios.get('https://homesthetics.net/types-of-trees/');
		const treeDom = new JSDOM(treeResponse.data);
		const treeList = treeDom.window.document.querySelectorAll('.entry-content ol li h3 span b');
		const treeNames = Array.from(treeList).map((el) => el.textContent.trim().replace(/ Tree$/, ''));
		treeNames.forEach((tree, index) => {
			const replacement = treeNameReplacements[tree];
			if (replacement) {
				treeNames[index] = replacement;
			}
		});
		treeNames.sort()
		const treeImages = await Promise.all(
			treeNames.map(async (tree) => {
				try {
					const response_img = await axios.get(`https://en.wikipedia.org/wiki/${tree}`);
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
		res.json({ treeNames, treeImages });
	} catch (error) {
		alert('Something went wrong, please try again later');
	}
});

app.listen(5003, () => {
	console.log('Proxy server is listening on port 5003');
}).on('error', (error) => {
	console.error('Error starting server:', error);
});
