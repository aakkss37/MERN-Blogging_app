
import React, { useEffect, useState, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API } from '../../services/api'
import { Link, } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider';

import { Box, Typography } from '@mui/material';

import { Container, Image, EditIcon, DeleteIcon, Heading, Author } from './DetailedViewStyle.js'



 

const DetailedView = () => {
	const { userAccount } = useContext(DataContext);
	const [searchParams] = useSearchParams();
	const postId = searchParams.get('post_id');

	const [postDetail, setPostDetail] = useState({});

	useEffect(()=>{
		const getPostDetail = async()=>{
			try {
				// const responce = await axios.get(`http://localhost:8000/posts-detail?post_id=${postId}`)
				const responce = await API.getPostDetail(postId)
				// console.log(responce.data.post)
				setPostDetail(responce.data.post);
			} catch (error) {
				console.log("error while loading post detail: -> ", error)
			}
		}
		getPostDetail();
	},[postId])

	console.log(postDetail);
	return (
		<div>
			<Container>
				<Image src={postDetail.displayPic } alt="post" />
				<Box style={{ float: 'right' }}>
					{
						userAccount.userName === postDetail.userName &&
						<>
							<Link to={`/update/${postDetail._id}`}><EditIcon color="primary" /></Link>
							<DeleteIcon  />
						</>
					}
				</Box>
				<Heading>{postDetail.title}</Heading>

				<Author>
					<Link to={`/?username=${postDetail.userName}`} style={{ textDecoration: 'none', color: 'inherit' }}>
						<Typography>Author: <span style={{ fontWeight: 600 }}>{postDetail.userName}</span></Typography>
					</Link>
					<Typography style={{ marginLeft: 'auto' }}>{new Date(postDetail.createdDate).toDateString()}</Typography>
				</Author>

				<Typography>{postDetail.blogStory}</Typography>
				{/* <Comments post={postDetail} /> */}
			</Container>
		</div>
	) 
}

export default DetailedView
