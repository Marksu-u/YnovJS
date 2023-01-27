const errorHandler = (err, req, res, next) => {
    console.log(err);

    // renvoyer une réponse avec le statut approprié
    req.status(500).json({
        success: false,
        status: err,
        message: 'Internal Server Error',
        env: process.env.NODE_ENV
    });

    req.status(404).json({
        success: false,
        status: err,
        message: 'Not Found',
        env: process.env.NODE_ENV
    });

    req.status(400).json({
        success: false,
        status: err,
        message: 'Bad Request',
        env: process.env.NODE_ENV
    });

    // appliquer le middleware sur toutes l'app

    }

    module.exports = errorHandler;