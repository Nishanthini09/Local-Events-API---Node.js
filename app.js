const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3003;

// Serve static files (like CSS and images) if needed
app.use(express.static(__dirname));

// Endpoint to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to get events data
app.get('/api/events', (req, res) => {
    fs.readFile(path.join(__dirname, 'events.json'), 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading events data');
            return;
        }
        res.json(JSON.parse(data)); // Return JSON data from the file
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
