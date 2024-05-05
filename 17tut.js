// console.log("Hello World");
//  First Backend Tutorial 
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Akash Singh</title>
        <link rel="stylesheet" href="styles.css">
        <style>
            body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    
    header {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 20px;
    }
    
    section {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ddd;
    }
    
    footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    
        </style>
    </head>
    <body>
    
        <header>
            <h1>Your Website</h1>
        </header>
    
        <section>
            <h2>Welcome to My First Backend Tutotial!</h2>
            <p>This is a simple webpage designed with HTML and CSS.</p>
        </section>
    
        <footer>
            <p>&copy; 2023 Your Website. All rights reserved.</p>
        </footer>
    
    </body>
    </html>
    `);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

