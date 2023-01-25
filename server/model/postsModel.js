import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	blogStory: {
		type: String,
		required: true
	},
	displayPic: {
		type: String,
		required: true
	},
	userName: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	createdDate: {
		type: Date,
	}
});

const Posts = mongoose.model('Post', postSchema);

export default Posts;
