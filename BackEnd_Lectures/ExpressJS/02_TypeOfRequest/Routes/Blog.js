// // Express routes 
const express = require('express');
const app = express();

app.route('/Blog').get((req, resp) => {
    console.log('Get request')
    resp.send('Get request')
}).post((req, resp) => {
    console.log("Post request")
    resp.send('Post request')
}).put((req, resp) => {
    console.log("Put request")
    resp.send('Put request')
})

module.exports.Blog = app;

// const express = require('express');
const router = express.Router();

// Remove the '/routeExample' prefix from the routes
router.get('/:userId', (req, res) => {
    res.send(`User ID: ${req.params.userId}`);
});

router.post('/NewUser', (req, res) => {
    res.send('Create a new user');
});

router.put('/:userId', (req, res) => {
    res.send(`Update user with ID ${req.params.userId}`);
});

module.exports.router = router;

