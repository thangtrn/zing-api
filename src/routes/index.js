const express = require('express');
const { ZingMp3 } = require('zingmp3-api-full');

const router = express.Router();

// Get Song
router.get('/songs/:id', async (req, res) => {
    try {
        const data = await ZingMp3.getSong(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get Detail Playlist
router.get('/detail-playlist/:id', async (req, res) => {
    try {
        const data = await ZingMp3.getDetailPlaylist(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get Home
router.get('/home', async (req, res) => {
    try {
        const data = await ZingMp3.getHome();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get Top 100
router.get('/top-100', async (req, res) => {
    try {
        const data = await ZingMp3.getTop100();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get Chart Home
router.get('/chart-home', async (req, res) => {
    try {
        const data = await ZingMp3.getChartHome();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get New Release Chart
router.get('/new-release-chart', async (req, res) => {
    try {
        const data = await ZingMp3.getNewReleaseChart();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get Song Info
router.get('/song-info/:id', async (req, res) => {
    try {
        const data = await ZingMp3.getInfoSong(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get Artist /artist?name="sontungmtp"
router.get('/artist', async (req, res) => {
    try {
        const data = await ZingMp3.getArtist(req.query.name);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get List Song Artist /list-song-artist?id={IWZ9ZD8A}&page={1}&count={15}
router.get('/list-song-artist', async (req, res) => {
    const { id, page = 1, count = 15 } = req.query;
    if(!id) return res.status(400).json({msg: 'Please enter List song artist id!'})
    try {
        const data = await ZingMp3.getListArtistSong(id, page, count);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get Lyric Song
router.get('/lyric-song/:id', async (req, res) => {
    try {
        const data = await ZingMp3.getLyric(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Search Song /search?q={sontungmtp}
router.get('/search', async (req, res) => {
    try {
        const data = await ZingMp3.search(req.query.q);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get List MV /list-mv?id={IWZ9ZD8A}&page={1}&count={15}
router.get('/list-mv', async (req, res) => {
    const { id, page = 1, count = 15 } = req.query;
    if(!id) return res.status(400).json({msg: 'Please enter List MV id!'})
    try {
        const data = await ZingMp3.getListMV(id, page, count);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get Category MV
router.get('/category-mv/:id', async (req, res) => {
    try {
        const data = await ZingMp3.getCategoryMV(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get Video MV
router.get('/video-mv/:id', async (req, res) => {
    try {
        const data = await ZingMp3.getVideo(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router