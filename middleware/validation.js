const validateKey = (req, res, next) => {
    try{
        const apiKey = req.header('api-key');

        if (apiKey == process.env.API_KEY) {
            next();
        } else {
            return res.status(404).json({msg: 'YOU SHALL NOT PASS !'});
        }

    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = validateKey;