const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        
        <h1>About Page</h1>
        <p> This is the about page of our website.</p> 
    `); 
});

module.exports = router;