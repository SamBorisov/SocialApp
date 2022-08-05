const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Welcome to this social app from routes/users.js");
});

module.exports = router;