import http from 'http';
import fs from 'fs/promises';
import cats from './cats.js';
import { URLSearchParams } from 'url';

const server = http.createServer(async (req, res) => {
	let html;

	if (req.method === "POST") {
		console.log('POST HAS BEEN MADE');
		let data = '';

		req.on('data', (chunk) => {
			data += chunk.toString();
		});

		req.on('end', () => {
			const searchParams = new URLSearchParams(data);
			const newCat = Object.fromEntries(searchParams.entries());
			cats.push(newCat);

			res.writeHead(301, {
				'location': '/'
			});

			res.end();
		});

		return;
	}

	switch (req.url) {
		case '/':
			html = await homeView();
			break;

		case '/cats/add-breed':
			html = await addBreedView();
			break;

		case '/cats/add-cat':
			html = await addCatView();
			break;

		default:
			return res.end();
			break;

		case '/styles/site.css':
			const siteCss = await readFile('./src/styles/site.css');
			res.writeHead(200, {
				'content-type': 'text/css',
			});
			res.write(siteCss);
			return res.end();
	}
	res.writeHead(200, {
		'content-type': 'text/html',
	});

	res.write(html);

	res.end();
});

function readFile(path) {
	return fs.readFile(path, { encoding: 'utf-8' });
}

async function homeView() {
	const html = await readFile('./src/views/home/index.html');

	let catsHtml = '';
	if (cats.length === 0) {
		catsHtml = "No cats available"
	} else {
		catsHtml = cats.map(cat => catTemplate(cat)).join('\n');
	}
	const result = html.replace('{{cats}}', catsHtml);
	return result;
}

async function addBreedView() {
	const html = await readFile('./src/views/addBreed.html');

	return html;
}

async function addCatView() {
	const html = await readFile('./src/views/addCat.html');

	return html;
}

function catTemplate(cat) {
	return `
		<li>
			<img
					src="${cat.imageUrl}"	alt="${cat.name}"/>
			<h3>${cat.name}</h3>
			<p><span>Breed: </span>${cat.breed}</p>
			<p>
					<span>Description: </span>${cat.description}
			</p>
			<ul class="buttons">
					<li class="btn edit"><a href="">Change Info</a></li>
					<li class="btn delete"><a href="">New Home</a></li>
			</ul>
	</li>
	`
}

server.listen(5000);

console.log('Server is listening on http://localhost:5000...');