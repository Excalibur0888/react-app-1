const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const flowNameReplacements = require('./flowNameReplacements');

const app = express();

app.use(cors());
app.get('/flowers', async (req, res) => {
	try { 
		const flowResponse = await axios.get('https://onlymyenglish.com/flowers-name-english/');
		const flowDom = new JSDOM(flowResponse.data);
		const flowList = flowDom.window.document.querySelectorAll('.entry-content .wp-block-table table tbody tr td');
		const flowersToRemove = ["Apple Flower", "Ashok Flower", "Cobra Saffron", "Common crape Mrytle", "Dandelion Dewdrop", "Sweet Jasmine", "Tuberose Flower", "Papaya Flower"];
		const flowNames = ((Array.from(flowList).map((el) => el.textContent.trim())).filter(el => !el.includes('.') && el.length>3).filter((flower) => !flowersToRemove.includes(flower)));
		flowNames.forEach((flower, index) => {
			const replacement = flowNameReplacements[flower];
			if (replacement) {
				flowNames[index] = replacement;
			}
		});
		flowNames.forEach((flower, index) => {
			const replacement = flowNameReplacements[flower];
			if (replacement) {
				flowNames[index] = replacement;
			}
		});
		flowNames.sort()
		const flowImages = await Promise.all(
			flowNames.map(async (flow) => {
				try {
					const response_img = await axios.get(`https://en.wikipedia.org/wiki/${flow}`);
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
		res.json({ flowNames, flowImages });
	} catch (error) {
		alert('Something went wrong, please try again later');
	}
});

app.listen(5002, () => {
	console.log('Proxy server is listening on port 5002');
});
