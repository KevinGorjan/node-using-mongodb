import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routes from './src/routes/routes';

const app = express();
const PORT = 4000;

// mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb');

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
