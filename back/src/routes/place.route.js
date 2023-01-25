const express = require('express');
const router = express.Router();
const placeController = require('../controllers/place.controller');
const verifyToken = require('../middlewares/verifyToken');

router.get('/places', verifyToken, placeController.getPlaces);
router.get('/places/:id', verifyToken, placeController.getOnePlace);
router.post('/places/add', verifyToken, placeController.createPlace);
router.delete('places/:id', placeController.deleteOnePlace)

module.exports = router;