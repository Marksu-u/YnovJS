const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const placeRouter = require('./place.route');
const typePlaceRouter = require('./typePlace.route');

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.user('/place', placeRouter);
router.use('/typePlace', typePlaceRouter);

module.exports = router;