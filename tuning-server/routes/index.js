const express = require('express');
const router = express.Router();

let items = [];

// Create an item
router.post('/', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read all items
router.get('/', (req, res) => {
  res.json(items);
});

// Read a single item by ID
router.get('/:id', (req, res) => {
  const itemId = req.params.id;
  const item = items.find(item => item.id === itemId);
  
  if (!item) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    res.json(item);
  }
});

// Update an item by ID
router.put('/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  
  const index = items.findIndex(item => item.id === itemId);
  
  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    items[index] = { ...items[index], ...updatedItem };
    res.json(items[index]);
  }
});

// Delete an item by ID
router.delete('/:id', (req, res) => {
  const itemId = req.params.id;
  
  const index = items.findIndex(item => item.id === itemId);
  
  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem[0]);
  }
});

module.exports = router;
