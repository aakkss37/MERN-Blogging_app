import React, { useState, useEffect, useContext } from 'react';
import { AddCircle as Add } from '@mui/icons-material';
import { Container, StyledFormControl, Image, Label, StyledInputBase, StyledButton, StyledTextArea, } from './CreatePostStyle'
import { useSearchParams, useNavigate } from 'react-router-dom';
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
	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');
	const { userAccount } = useContext(DataContext);
	const navigate = useNavigate();

	// console.log("postData  ===> ", postData);

	// const [displayPicURL, setDisplayPicURL] = useState('');

	const updateImage = async (file) => {
		const data = new FormData();
		data.append("name", file.name);
		data.append("file", file);
		// API CALL
		const responce = await API.uploadDisplayPicture(data); //return a url of the pic
		// console.log("responce ===> ", responce.data);
		// postData.displayPic = responce.data;
		setPostData((prevPostData) => {
			return {
				...prevPostData,
				displayPic: responce.data,
			}
		});

	}



	useEffect(() => {
		// UPDATE postData FIELDS
		setPostData((prevStat)=>{
			return{
				...prevStat,
				category: category,
				displayPic: postData.displayPic ? postData.displayPic : defaultImages[category],
				name: userAccount.name,
				userName: userAccount.userName
			}
		})
		// postData.category = category;
		// postData.displayPic = defaultImages[category];
		// postData.name = userAccount.name;
		// postData.userName = userAccount.userName;
	}, []);

	// console.log("postData after ===> ", postData);

	const blogInputChangeHndler = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });
	};

	const savePost = async()=>{
		try {
			await API.createPost(postData);
			// console.log(responce);
			navigate('/home');
		} catch (error) {
			console.log("something went wrong while crating a new post -->", error );
		}
	}

	//defaultImages[category] ---> we can use the dot notation (.) to access properties
	//of an object,however, when you use the dot notation, you need to know the exact
	// name of the property in advance.
	//In the case where you want to access a property using a variable, 
	//you would use the bracket notation([]) to access the property.This is 
	//because the bracket notation allows you to use a variable as the key to 
	//access the property.
	let imageUrl = postData.displayPic ? postData.displayPic : defaultImages[category]; 	// --> display picture url
	// console.log("imageURL ===>>>>>>>>>>", imageUrl);
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
					onChange={(e) => updateImage(e.target.files[0])}
				/>

				<StyledInputBase
					placeholder="Enter Blog Tile here..."
					onChange={blogInputChangeHndler}
					name='title'
					value={postData.title}
				/>
				<StyledButton onClick={savePost}>Publish</StyledButton>
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