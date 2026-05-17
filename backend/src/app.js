const express = require('express');
const { getInventory } = require('./inventoryService');

const app = express();

app.get('/inventory', (req, res) => {
    res.json(getInventory());
});

module.exports = app;