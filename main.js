
const puppeteer = require('puppeteer');
const fs = require('fs');
const { randomInt } = require('crypto');

const motherfuckdic = fs.readFileSync('giteemotherfuck.txt');
let randomFucker = motherfuckdic.toString().split('\r\n');


(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		userDataDir: 'fuckgitee'

	});

	const page = await browser.newPage();

	while (true) {
		try {
			await page.goto('https://gitee.com/projects/new')
			await page.waitForSelector('#project_name')
			await page.type('#project_name', randomFucker[randomInt(randomFucker.length)] + '-' + Date.now())
			await page.type('#project_path', 'suckgitee' + Date.now())
			await page.type('#project_description', randomFucker[randomInt(randomFucker.length)])
			await page.click('#new_project > div.field.public-field > div:nth-child(1) > div.ui.radio.checkbox.public > label')
			await page.click('#submit-project-new')
			await page.waitForNavigation()
		} catch (e) {
			console.log('err', e)
		}
	}
})();