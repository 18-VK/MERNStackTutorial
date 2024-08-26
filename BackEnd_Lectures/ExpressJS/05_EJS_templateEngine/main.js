const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for EJS templates
app.set('views', path.join(__dirname, 'views')); // i think this is not mandatory to do 

// Define a route
app.get('/HomePage', (req, res) => {
  const data = {
    title: 'Home Page',
    message: 'Welcome to our website!',
    users: [{ name: 'Alice' }, { name: 'Bob' }],
    username : "<script>alert('XSS');</script>",
    bio : "<strong>Welcome to my profile!</strong>",
    siteName : "One8"
  };
  res.render('index', data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
