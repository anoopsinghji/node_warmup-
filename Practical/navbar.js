const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Simple Navbar</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              font-family: 'Roboto', sans-serif;
            }

            nav {
              background-color: #333;
              padding: 0;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            nav ul {
              list-style: none;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: 0 20px;
            }

            nav li {
              margin: 0;
            }

            nav a {
              display: block;
              color: white;
              text-decoration: none;
              padding: 15px 20px;
              transition: background-color 0.3s ease;
            }

            nav a:hover {
              background-color: #555;
            }

            .navbar-brand {
              font-size: 20px;
              font-weight: bold;
              margin-right: auto;
              padding: 15px 20px;
              color: white;
            }

            .content {
              padding: 20px;
            }
          </style>
        </head>
        <body>
          <nav>
            <div class="navbar-brand">MyApp</div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
          <div class="content">
            <h1>Welcome</h1>
            <p>This is a simple navbar with Home, About Us, Services, and Login links.</p>
          </div>
        </body>
      </html>
    `); 
});

module.exports = router;