const User = require("../models/user.model.js").User;


async function  registrarUsuario(req,res){
	const nombreUsuario = req.body.usrn;
	const pass = req.body.password;
console.log(nombreUsuario);
console.log(pass);

	try{
		const newUser = await new User ({
			username: nombreUsuario,
			password: pass

		}).save();
	


		res.json({
			obj: newUser

		})

	}catch (error){
		console.log(error);

	}
}
async function login(req,res){
	const nombreUsuario = req.body.usrn;
	const pass = req.body.password;
	console.log(nombreUsuario);
	console.log(pass);

	try{
		const newLog= await User.findOne({ })
	console.log(newLog);

	if (newLog.password === pass){
		res.json({
			message:'login completed',
			username:newLog.username,
			password:newLog.password

		});
	}else{
		res.status(401).json({message: 'login error'})

	}
	
	
	
	}catch(error){
		console.log(error);
	}

}




module.exports = {
	registrarUsuario,
	login
}



