require('dotenv').config({ path: './config.env' });
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const privateRoutes = require('./routes/private');

const PORT = 5000;
const DB_CONNECTION = 'mongodb://localhost:/webAPP';

const errorHandler = require('./middleware/error');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
	res.send('HOME');
});

app.use('/api/auth', authRoutes);
app.use('/api/private', privateRoutes);

app.use(errorHandler);

mongoose
	.connect(DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => app.listen(PORT, console.log.bind(console, `Server is running on http://localhost:${PORT}`)))
	.catch((error) => console.log(error.message));
