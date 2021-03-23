const router = require('express').Router();

router.get('/books', (req, res) => {
	res.send('TEST');
});

module.exports = router;
