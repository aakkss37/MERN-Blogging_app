import React, {useState, useEffect, useContext} from 'react';
import { AddCircle as Add } from '@mui/icons-material';
import img from '../../assets/img8.jpg';
import {Container, StyledFormControl, Image, Label, StyledInputBase, StyledButton, StyledTextArea, } from './CreatePostStyle'
import {  useSearchParams } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';



const initialPostData = {
	name: '',
	title: '',
	blogStory: '',
	displayPic: '',
	userName: '',
	category: '',
	createdDate: new Date()
}
 


const CreatePost = () => {
	const [postData, setPostData] = useState(initialPostData)
	const [displayPicture, setDisplayPicture] = useState('');
	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');
	const { userAccount } = useContext(DataContext)
	// console.log(userAccount);

	useEffect(()=>{
		const getImage = ()=>{
			if(displayPicture){
				const data = new FormData();
				data.append("name", displayPicture.name);
				data.append("dispalyPicture", displayPicture);

				//API CALL
				postData.displayPic = '' //TODO
			}
		}
		// console.log(displayPicture);
		getImage();

		// UPDATE postData FIELDS
		postData.category = category;
		postData.name = userAccount.name;
		postData.userName = userAccount.userName;

		console.log("updated ====>>> ",postData);
	}, [category, displayPicture] )

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
				<input type='file' id='fileInput' style={{ display: 'none' }} onChange={(e) => setDisplayPicture(e.target.files[0])} />
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