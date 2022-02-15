const router = require('express').Router();
// TODO rm validateKey
const validateKey = require('../middleware/validation');
const Score = require('../models/scoreModel');

// Post Score
router.post('/', validateKey, async(req,res) => {
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

// Get all scores
router.get('/', async(req,res) => {
    try {
        const scores = await Score.find();

        return res.json({ 
            scores : scores,
            msg: 'All scores found !',
        })
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
})

// Get Score by player
router.get('/player/:player', async(req,res) => {
    try {
        const scores = await Score.findOne({player : req.params.player});

        return res.json({ 
            scores : scores,
            msg: 'Scores found !',
        })
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
})

// Get best scores
router.get('/best/:limit', async(req,res) => {
    try {
        const limit = Number(req.params.limit);
        const scores = await Score.find().limit(limit).sort({value : -1});

        return res.json({ 
            scores : scores,
            msg: 'Best scores found !',
        });
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
});

module.exports = router;