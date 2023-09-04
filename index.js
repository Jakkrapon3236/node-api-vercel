const express = require('express');
const app = express();
const PORT = 8080;





app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
