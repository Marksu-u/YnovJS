const Place = require('../models/place.model');

exports.createPlace = (req, res) => {

  console.log(req.body.description)

  Place.create(req.body).then(
    (place) =>
      res.send(place)
  )
    .catch(err => res.status(400).send(err));
}

exports.getPlaces = (req, res) => {
  Place.find().populate('owner').then(
    (places) => res.send(places)
    .catch(err => res.status(400).send(err)))
}

// createPlace: Créer et utiliser un middleware pour la création des lieux seulement par les utilisateurs de type "OWNER"

exports.createPlace = (req, res) => {
  Place.create(req.body).then(
    (place) => {
      User.findById(req.userToken.id).then(
        (user) => {
          user.places.push(place)
          user.save()
          res.send(place)
        }
      )
    }
  ).catch(err => res.status(400).send(err))
}

// getMyPlaces: finir ce controller et utiliser middleware verifyToken. Récupérer l'id de l'utilisateur pour récupérer le user et ses places.

 exports.getMyPlaces = (req, res) => {
   User.findById(req.userToken.id).populate('places').then(
     (user) => { res.send(user.places) }  
    ).catch(err => res.status(400).send(err))
     }

// getMyPlace : récupérer un lieu créé par un utilisateur

exports.getMyPlace = (req, res) => {
  User.findById(req.userToken.id).populate('places').then(
    (user) => {
      const place = user.places.find(place => place._id == req.params.id)
      res.send(place)
    }
  ).catch(err => res.status(400).send(err))
}

// updateMyPlace : modiifer un lieu par l'utilisateur qui l'a créé

exports.updateMyPlace = (req, res) => {
  User.findById(req.userToken.id).populate('places').then(
    (user) => {
      const place = user.places.find(place => place._id == req.params.id)
      place.title = req.body.title
      place.description = req.body.description
      place.capacity = req.body.capacity
      place.address = req.body.address
      place.pricing = req.body.pricing
      place.save()
      res.send(place)
    }
  ).catch(err => res.status(400).send(err))
}

// deleteMyPlace : supprimer un lieu par l'utilisateur qui l'a créé

exports.deleteMyPlace = (req, res) => {
  User.findById(req.userToken.id).populate('places').then(
    (user) => {
      const place = user.places.find(place => place._id == req.params.id)
      place.remove()
      res.send(place)
    }
  ).catch(err => res.status(400).send(err))
}

// createTypePlace: use verifyAdmin middleware - should only be allowed by admin type users

exports.createTypePlace = (req, res) => {
  TypePlace.create(req.body).then(
    (typePlace) => res.send(typePlace)
  ).catch(err => res.status(400).send(err))
}

// deleteTypePlace: delete a place type (only user admins)

exports.deleteTypePlace = (req, res) => {
  TypePlace.findByIdAndDelete(req.params.id).then(
    (typePlace) => res.send(typePlace)
  ).catch(err => res.status(400).send(err))
}

// updateTypePlace: update a place type (only user admins)

exports.updateTypePlace = (req, res) => {
  TypePlace.findByIdAndUpdate(req.params.id, req.body).then(
    (typePlace) => res.send(typePlace)
  ).catch(err => res.status(400).send(err))
}


