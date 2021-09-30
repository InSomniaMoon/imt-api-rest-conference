const settings = require('../settings').settings
const TOKEN = settings.token

exports.checkToken = (req,res,next) => {
    let { token } = req.body
    if(token == TOKEN)
    {
        res.status(200)
    }else{
        res.status(403).json({message : "Invalid token."})
    }
    return next()
}