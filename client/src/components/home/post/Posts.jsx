import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { API } from '../../../services/api';
import PostCard from './PostCard';

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {

		const fetchData = async () => {
			try {
				const responce = await API.getAllPosts();
				console.log(responce.data.posts);
				setPosts(responce.data.posts)
			} catch (error) {
				console.log("Error Fetching all posts: ", error.message)
			}
		}
		fetchData();

	}, []);
	console.log("all post ===> ", posts)
	let allPost = posts && posts.length > 0
		?
		posts.map(post => (
			<PostCard
				key={post._id}
				picture={post.displayPic}
				category={post.category}
				title={post.title}
				name={post.name}
				username={post.userName}
				discription={post.blogStory}
			/>
		))
		:
		<Box>No data to display</Box>

	return (
		<div>
			{allPost}
		</div>
	)
}

export default Posts
