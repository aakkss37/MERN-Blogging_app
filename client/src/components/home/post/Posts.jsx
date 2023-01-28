import { Box } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import { Link } from 'react-router-dom';
import { API } from '../../../services/api';
import PostCard from './PostCard';
import { Container } from './PostCardStyle';


const Posts = () => {
	const [posts, setPosts] = useState([]);
	const { filterCategory } = useContext(DataContext);
	const [filteredPost, setFilteredPost] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const responce = await API.getAllPosts();
				// console.log(responce.data.posts);
				setPosts(responce.data.posts)
			} catch (error) {
				console.log("Error Fetching all posts: ", error.message)
			}
		}
		fetchData();

	}, []);
	// console.log("all post ===> ", posts);

	useEffect(()=>{ 
		// console.log("running*******************");
		if (posts && posts.length > 0) {
			// console.log("condition true =-=-===-=-")
			let filter = []
			// console.log("filterCategory.category ~~~~~~~~~~~~>>>>", filterCategory.category)
			posts.forEach((post) => {
				// console.log("category ==> ", post.category)
				if (filterCategory.category === 'All') {
					// console.log("filter  ==>>>>>>>", filterCategory.category)
					filter.push(
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/?post_id=${post._id}`}>
							<PostCard 
								key={post._id}
								picture={post.displayPic}
								category={post.category}
								title={post.title}
								name={post.name}
								username={post.userName}
								discription={post.blogStory}
							/>
						</Link>
					)
				}
				if (filterCategory.category === post.category) {
					// console.log("filterCategory.category ==>>>>>>>", filterCategory.category)
					filter.push(
						<Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/?post_id=${post._id}`}>
							<PostCard
								key={post._id}
								picture={post.displayPic}
								category={post.category}
								title={post.title}
								name={post.name}
								username={post.userName}
								discription={post.blogStory}
							/>
						</Link>
					)
				}

			});
			// console.log("filter array====> ",filter);
			setFilteredPost(filter)
		}
		else {
			setFilteredPost([<Box>No data to display</Box>]) ;
		}
	}, [filterCategory.category, posts])
	

	// console.log("filteredPost==============> ", filteredPost);

	return (
		<Container>
			{filteredPost}
		</Container>
	)
}

export default Posts
