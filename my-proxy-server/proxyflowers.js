const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const flowNameReplacements = require('./flowNameReplacements');

const app = express();

app.use(cors());
app.get('/Services', async (req, res) => {
	try { 
		const flowResponse = await axios.get('https://onlymyenglish.com/Services-name-english/');
		const flowDom = new JSDOM(flowResponse.data);
		const flowList = flowDom.window.document.querySelectorAll('.entry-content .wp-block-table table tbody tr td');
		const ServicesToRemove = ["Apple Flower", "Ashok Flower", "Cobra Saffron", "Common crape Mrytle", "Dandelion Dewdrop", "Sweet Jasmine", "Tuberose Flower", "Papaya Flower"];
		const flowNames = ((Array.from(flowList).map((el) => el.textContent.trim())).filter(el => !el.includes('.') && el.length>3).filter((flower) => !ServicesToRemove.includes(flower)));
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
		res.json({ flowNames, flowImages });
	} catch (error) {
		alert('Something went wrong, please try again later');
	}
});

app.listen(5001, () => {
	console.log('Proxy server is listening on port 5001');
}).on('error', (error) => {
	console.error('Error starting server:', error);
});