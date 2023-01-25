import React, { useState, useEffect, useContext } from 'react';
import { AddCircle as Add } from '@mui/icons-material';
import { Container, StyledFormControl, Image, Label, StyledInputBase, StyledButton, StyledTextArea, } from './CreatePostStyle'
import { useSearchParams } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../services/api';
// DEFAULT DISPLAY PICTURE.
import Tech from '../../assets/Tech.jpg';
import Music from '../../assets/Music.jpg';
import Movies from '../../assets/Movies.jpg';
import Sports from '../../assets/Sports.jpg';
import Fashion from '../../assets/Fashion.jpg';


const defaultImages = {
	Tech: Tech,
	Music: Music,
	Movies: Movies,
	Fashion: Fashion,
	Sports: Sports,
}


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
	// const [displayPicURL, setDisplayPicURL] = useState('');
	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');
	const { userAccount } = useContext(DataContext);
	// const updateImage = ()=>{
	// 	setPostData((prevPostData)=>( {...prevPostData, displayPic: displayPicURL}))
	// }
	// console.log("displayPicURL =====>>>>>>>>>>>>>",displayPicURL)

	useEffect(() => {
		const getImage = async () => {
			if (displayPicture) {
				// console.log("before ===> ", postData);
				const data = new FormData();
				data.append("name", displayPicture.name);
				data.append("file", displayPicture);
				//API CALL
				const responce = await API.uploadDisplayPicture(data); //return a url of the pic
				console.log("responce ===> ",responce.data);
				postData.displayPic = responce.data;
				// setPostData((prevPostData) => { 
				// 	return {
				// 		...prevPostData, 
				// 		displayPic: responce.data,
				// 		category: category,
				// 		name: userAccount.name,
				// 		userName: userAccount.userName,
				// 	}} );
			}
		}
		getImage();
		// updateImage();
		// UPDATE postData FIELDS
		postData.category = category;
		postData.name = userAccount.name;
		postData.userName = userAccount.userName;
	}, [category, displayPicture, postData, userAccount.name, userAccount.userName]);

	console.log("outside useEffect ===> ", postData);


	const blogInputChangeHndler = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });
	};


	
	//defaultImages[category] ---> we can use the dot notation (.) to access properties
	//of an object,however, when you use the dot notation, you need to know the exact
	// name of the property in advance.
	//In the case where you want to access a property using a variable, 
	//you would use the bracket notation([]) to access the property.This is 
	//because the bracket notation allows you to use a variable as the key to 
	//access the property.
	let imageUrl = postData.displayPic ? postData.displayPic : defaultImages[category]; 	// --> display picture url
console.log("imageURL ===>>>>>>>>>>", imageUrl);
	return (
		<Container>

			<Image src={imageUrl} alt="post" />

			<StyledFormControl>
				<Label htmlFor='fileInput'>
					<Add fontSize='large' color='action' />
					<span>Display Pic</span>
				</Label>
				<input
					type='file'
					id='fileInput'
					style={{ display: 'none' }}
					onChange={(e)=> setDisplayPicture(e.target.files[0])}
				/>

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
				placeholder="What's your story...."
				onChange={blogInputChangeHndler}
				name='blogStory'
				value={postData.blogStory}
			/>

		</Container>
	)
}

export default CreatePost;