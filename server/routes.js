const router = require('express').Router();

router.get('/books', (req, res) => {
	res.status(200).json({ OK: 'Books' });
});

router.get('/register', (req, res) => {
	res.status(200).json({ OK: 'Register' });
});

router.get('/login', (req, res) => {
	res.status(200).json({ OK: 'Login' });
});

module.exports = router;
