const router = require('express').Router();
const Score = require('../models/scoreModel');

// Post Score
router.post('/', async(req,res) => {
    try {
        const score = req.body;
        const new_score = new Score(score);
        await new_score.save();

        return res.json({ 
            score : new_score,
            msg: 'Score enregistré !',
        })
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
})

// Get Score by player
router.get('/:player', async(req,res) => {
    try {
        const scores = await Score.find({player : req.params.player});

        return res.json({ 
            score : scores,
            msg: 'Scores found !',
        })
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
})

module.exports = router;