import React, { useState, useEffect } from 'react';
import { API } from '../../../services/api';

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		
		const fetchData = async()=> {
			try {
				const responce = await API.getAllPosts();
				console.log(responce.data.posts);
				setPosts(responce.data.posts)
			} catch (error) {
				console.log("Error Fetching all posts: ",error.message)
			}
		}
		fetchData();
		
	}, []);
	console.log("all post ===> ", posts)
	let allPost = posts && posts.length>0 ? posts.map(post => (<h2>Fetched data.</h2>)) : <p>No data to display</p>

	return (
		<div>
			{allPost}
		</div>
	)
}

export default Posts
