const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

// App
const app = express();

// Middlware 
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Database Connection
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    let port = server.address().port;
    console.log(`SERVER IS RUNNING ON PORT ${port} AND SERVER MODE ON ${process.env.NODE_ENV}`);

    if (process.env.NODE_ENV === 'production') {
        mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@e-ticketing-hdgjp.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true }, () => {
            console.log('Live Database Connected...')
        })
    } else {
        mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Local Database Connected Successfully'))
            .catch(err => console.log(err));
    }
})