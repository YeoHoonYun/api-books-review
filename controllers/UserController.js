const {Router} = require('express');

const router = Router();

router.post('/login', (req, res, next) => {
    console.log(req.body);

    const {email, password} = req.body;

    res.json({
        token: '',
    })
})

module.exports = router;