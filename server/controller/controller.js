import User from "../model/userModel.js";
import bcrypt from 'bcrypt';


export const signupUser = async(request, responce)=>{
	console.log('request received ---> signup');
	console.log("userInput: ---> ",request.body)
	try {
		const encryptedPassword = await bcrypt.hash(request.body.password, 10); // --> bcrypt(password, salt_value)
		const newUserDetail = {
			name: request.body.name,
			userName: request.body.userName,
			password: encryptedPassword
		}
		console.log("serverGenerated: ---> ", newUserDetail);
		const newUser = await User.create(newUserDetail);
		await newUser.save();
		return responce.status(200).json({msg: 'signup sucessfull'});
	} catch (error) {
		return responce.status(500).json({msg: 'something went wrong while signing up...'});
	}
}