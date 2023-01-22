import React, {useState} from 'react';
import { AddCircle as Add } from '@mui/icons-material';
import img from '../../assets/img8.jpg';
import {Container, StyledFormControl, Image, Label, StyledInputBase, StyledButton, StyledTextArea, } from './CreatePostStyle'




const initialPostData = {
	title: '',
	blogStory: '',
	displayPic: '',
	userName: '',
	category: '',
	createdDate: new Date()
}
 


const CreatePost = () => {
	const [postData, setPostData] = useState(initialPostData)


	const blogInputChangeHndler = (e)=>{
		setPostData({...postData, [e.target.name]: e.target.value});

	};
	return (
		<Container>

			<Image src={img} alt="post" />

			<StyledFormControl>
				<Label htmlFor='fileInput'>
					<Add fontSize='large' color='action' />
					<span>Display Pic</span>
				</Label>
				<input type='file' id='fileInput' style={{ display: 'none' }} />
				<StyledInputBase 
					placeholder="Enter Blog Tile here..."  
					onChange={blogInputChangeHndler}
					name='title'
					value={postData.title}
				/>
				<StyledButton>Publish</StyledButton>
			</StyledFormControl>
			
			<StyledTextArea 
				minRows={5}
				placeholder= "What's your story...."
				onChange={blogInputChangeHndler}
				name='blogStory'
				value={postData.blogStory}
			/>

		</Container>
	)
}

export default CreatePost;