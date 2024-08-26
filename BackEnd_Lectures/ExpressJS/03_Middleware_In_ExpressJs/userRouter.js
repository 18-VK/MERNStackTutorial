const express = require('express');
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
    console.log('Router-Level Middleware');
    next();
});

router.get('/profile', (req, res) => {
    res.send('User profile');
});

module.exports = router;

