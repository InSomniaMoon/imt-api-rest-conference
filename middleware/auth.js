const settings = require('../settings').settings
const TOKEN = settings.token

exports.checkToken = (req,res,next) => {
    let { token } = req.body
    if(token == TOKEN)
    {
        res.status(200).send("Token is valid.")
    }else{
        res.status(403).send("Token is invalid")
    }
    return next()
}