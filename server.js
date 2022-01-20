const apiRoutesAnimals = require('./routes/apiRoutes/animalRoutes');
const apiRoutesZookeepers = require('./routes/apiRoutes/zookeeperRoutes');
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

app.use('/api', apiRoutesAnimals);
app.use('/api', apiRoutesZookeepers)
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})