const validateKey = (req, res, next) => {
    try{
        // Next security step : recongnize our app host
        // console.log(req.headers.host);

        const apiKey = req.header('api-key');

        if (apiKey == process.env.API_KEY) {
            next();
        } else {
            return res.status(403).json({msg: 'YOU SHALL NOT PASS !'});
        }

    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = validateKey;