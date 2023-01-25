const Place = require('../models/place.model.js');

exports.createPlace = (req, res) => {
    const place = new Place(req.body);
    place.save()
        .then((place) => {
        res.send(place);
        })
        .catch(err => {
        res.status(400).send(err)
        })
}

exports.getOnePlace = (req, res) => {
    Place.findById(req.params.id).then((place) => {
        if (!place) {
        return res.status(404).send({
            message: "Place not found"
        })
        }
        res.send(place);
    })
        .catch(err => {
        res.status(400).send(err)
        })
}

exports.deleteOnePlace = (req, res) => {
    Place.findByIdAndDelete(req.params.id)
        .then(place => res.send({ message: `place with id ${place._id} successfully deleted` }))
        .catch(err => res.status(400).send(err))
}

exports.getPlaces = (req, res) => {
    Place.find().then(
        (places) => {
        res.send(places)
        })
        .catch(err => res.send(err))
}
