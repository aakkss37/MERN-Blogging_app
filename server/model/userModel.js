import mongoose from "mongoose";


const userSchema = ({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})

const User = mongoose.Schema('User', userSchema);

export default User;