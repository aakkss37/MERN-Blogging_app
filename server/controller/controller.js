import User from "../model/userModel.js";
import bcrypt from 'bcrypt';


export const signupUser = async (request, responce) => {
	console.log('request received ---> signup');
	console.log("signup userInput: ---> ", request.body)
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
		return responce.status(200).json({ msg: 'signup sucessfull' });
	} catch (error) {
		return responce.status(500).json({ msg: 'Something went wrong while signing up...' });
	}
}


export const loginUser = async (request, responce) => {
	// console.log('request received -----> login');
	// console.log("login userInput ---> ", request.body);

	const user = User.findOne({ userName: request.body.userName });
	if (!user) {
		return responce.status(400).json({ msg: "Username is invalid." });
	}
	try {
		let isPasswordMatched = await bcrypt.compare(request.body.password, user.password);
		if (isPasswordMatched) {
			// accessToken refreshToken ---JWT
		} else {
			return responce.status(400).json({ msg: "Authantication failed" });
		}
	} catch (error) {
		return responce.status(500).json({ msg: 'Something went wrong...' });
	}
	
}