const jwt = require ('jsonwebtoken');

const { config } = require('../config/config');



async function firmarJwt(req,res){
    try{
const nuevoToken = await jwt.sign(
    {email:"salvadorer935@gmail.com"},
    config.auth.secretKey,
    {
        algorithm:"HS256"
    }
);

res.status(200).json({
    message:"ok",
    jwt: nuevoToken

});

}catch(error){
    console.log(error)
    res.status(500).json({
        message: "Error al crear token jwt"
    })
 }
}
async function verifyJwt(req,res,next){
    const headerToken = req.header.authorization;
    console.log(headerToken);
    res.status(200);
    (next);
    
}

module.exports={
    firmarJwt,verifyJwt
} 



