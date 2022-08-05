const router = require('express').Router();
const User = require('../models/User');


//Regester
router.get("/register", async (req, res) => {
    const user = await new User({
        username: "Aron",
        password: "123456",
        email: "aron@gmail.com"
});
await user.save();

res.send("User created");
});

module.exports = router;