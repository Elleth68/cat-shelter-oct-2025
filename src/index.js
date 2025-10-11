import http from 'http';

const server = http.createServer((req, res) => {

	if (req.url === '/') {
		res.writeHead(200, {
			'content-type': 'text/html',
		});

		res.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="/styles/site.css">
    <link rel="shortcut icon" href="https://img.icons8.com/ios-filled/50/000000/cat-footprint.png" type="image/png">
    <title>Cat Shelter</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cats/add-breed">Add Breed</a></li>
                <li><a href="/cats/add-cat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
        <form action="/search">
            <input type="text">
            <button type="button">Search</button>
        </form>
    </header>

    <main>
        <section class="cats">
            <ul>
                <li>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" alt="Black Cat">
                    <h3></h3>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
                <li>
                    <img src="https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg" alt="">
                    <h3>Pretty Kitty</h3>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
                <li>
                    <img src="https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg" alt="Black Cat">
                    <h3>Pretty Kitty</h3>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
                <li>
                    <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alt="Black Cat">
                    <h3>Pretty Kitty</h3>
                    <p><span>Price: </span>350$</p>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
                <li>
                    <img src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg" alt="Black Cat">
                    <h3>Pretty Kitty</h3>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
            </ul>
        </section>
    </main>

</body>

</html>`);

	} else if (req.url === '/styles/site.css') {
		res.writeHead(200, {
			'content-type': 'text/css',
		});

		res.write(`@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

* {
    margin: 0;
    padding: 0;
}

html, body {
    font-family: 'Lato', sans-serif;
    background-color: #F2F2F2;
    color: #333;
}

.navigation {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    padding: 1rem;
    background-color: #fff;
}

.navigation li a {
    text-decoration: none;
    color: #333;
}

.navigation li a::before {
    font-family: "Font Awesome 5 Free";
    content: "\f015";
    font-weight: 900;
    padding: 5px;
}

.navigation li:nth-child(2) a::before {
    content: "\f055";   
}

.navigation li:nth-child(3) a::before {
    content: "\f1b0";
}

.navigation li:nth-child(4) a::before {
    content: "\f2f6";
}

.navigation li:nth-child(5) a::before {
    content: "\f234";
}

h1 {
    font-size: 40px;
    text-align: center;
    margin-top: 1rem;
}

form {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

input[type=text], input[type="file"], input[type="number"], textarea, select {
    padding: 0.5rem 7.5rem 0.5rem 1rem;
    border-radius: 7px;
    border: none ;
    outline: none;
    margin-bottom: 1rem;
}

input[type="number"] {
    padding: 0.5rem 0.5rem 0.5rem 1rem;
}

textarea {
    max-width: 19.5rem;
    min-width: 19.5rem;
    max-height: 15rem;
    min-height: 3rem;
}

form button {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    color: #fff;
    background-color: lightskyblue;
    font-weight: 700;
    border-radius: 7px;
    padding-left: 5px;
    margin-bottom: 1rem;
    border: none;
    padding: 15px;
}

form button:hover {
    background-color: white;
    color: lightblue;
}

.cats {
    margin-left: 5rem;
    margin-right: 5rem;
}

.cats ul {
    display: flex;
    list-style: none;
    margin-top: 3rem;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.cats li {
    width: 26.5%;
    margin-left: 5rem;
    margin-bottom: 1.5rem;
    background-color: #fff;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
}

.cats ul li .buttons {
    margin-top: 1.5rem;
    position: relative;
    left: 1rem;
    border:1px splid black;
}

.buttons li {
    margin-left: 2rem;
}

.cats ul li .buttons .btn a{
    text-align: center;
    padding: 5px;
    border-radius: 17px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 1rem;
}


.cats ul li .buttons .edit a{
    background-color: #3d99e3;
}

.cats ul li .buttons .delete a{
    background-color: #ff0000d6;
}


.cats li img {
    width: 350px;
    height: 250px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    margin: 0 auto;
    display: block;
}

.cat-form img {
    height: 250px;
    width: 350px;
    margin: auto;
    border-radius: 7px;
}

body > form > label:nth-child(3) {
    margin-top: 1.5rem;
}

.cats li h3 {
    text-align: center;
    margin: 0.5rem;
}

.cats li span {
    font-weight: 900;
}

.cats li p {
    margin: 0.5rem;
}

.cats ul li:hover {
    opacity: 0.75;
    transform: scale(0.98);
}

.cat-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 450px;
    margin: auto;
    margin-top: 2.5rem;
}

.cat-form h2 {
    margin-bottom: 1rem;
    text-align: center;
}

.cat-form label {
    margin: 0 0 0.3rem 0.3rem;
}

.cat-form button{
    width: 100px;
    margin: auto;
    text-align: center;
    padding: 0.5rem;
    border: none;
    border-radius: 7px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    background-color: lightskyblue;
    margin-bottom: 1.5rem;
}`);
	};


	res.end();
});

server.listen(5000);

console.log('Server is listening on http://localhost:5000...');