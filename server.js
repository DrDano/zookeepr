const apiRoutes = require('./routes/apiRoutes/animalRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');
const express = require('express');
const { animals } = require('./data/animals.json');
const PORT = process.env.PORT || 3001

const app = express();

// parses incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parses incoming JSON data
app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.post('/api/animals', (req, res) => {
    // set id based on length of animals array
    req.body.id = animals.length.toString();

    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})