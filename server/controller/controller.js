import User from "../model/userModel.js";



export const signupUser = async(request, responce)=>{
	console.log('request received ---> signup');
	// console.log(request.body)
	try {
		const newUser = await User.create(request.body)
		await newUser.save();
		return responce.status(200).json({msg: 'signup sucessfull'});
	} catch (error) {
		return responce.status(500).json({msg: 'something went wrong while signing up...'});
	}
}