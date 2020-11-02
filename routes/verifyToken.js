const { json } = require('body-parser');
const jsonwebtoken = require('jsonwebtoken');

module.exports = function (req,res,next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('access denied');

    try {
        const verified = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err) {
        req.status(400).send('invalid token');
    }
}