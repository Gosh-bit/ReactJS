require('dotenv').config({ path: './config.env' });
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const privateRoutes = require('./routes/private');

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
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() =>
		app.listen(process.env.PORT, console.log.bind(console, `Server is running on http://localhost:${process.env.PORT}`))
	)
	.catch((error) => console.log(error.message));
