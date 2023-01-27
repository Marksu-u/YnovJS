const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const typePlaceRouter = require('./typePlace.route');
const placeRouter = require('./place.route');
// add middlewares here
const errorHandler = require('../middlewares/errorHandler');

router.use(errorHandler);
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/type-place', typePlaceRouter);
router.use('/place', placeRouter);

module.exports = router;