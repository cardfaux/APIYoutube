const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post(
	'/',
	[
		check('name', 'Name Is Required')
			.not()
			.isEmpty(),
		check('email', 'Please Use A Valid E-Mail').isEmail(),
		check(
			'password',
			'Please Enter A Password With 6 or More Characters'
		).isLength({ min: 6 })
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.send('User Route');
	}
);

module.exports = router;
