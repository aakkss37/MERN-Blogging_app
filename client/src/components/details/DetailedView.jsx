import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API } from '../../services/api'


const DetailedView = () => {
	const [searchParams] = useSearchParams();
	const postId = searchParams.get('post_id');

	const [postDetail, setPostDetail] = useState({});

	useEffect(()=>{
		const getPostDetail = async()=>{
			try {
				const responce = await API.getPostDetail(postId)
				console.log(responce.data)
			} catch (error) {
				console.log("error while loading post detail: -> ", error.message)
			}
		}
		getPostDetail();
	},[])

	console.log(postId);
	return (
		<div>
			Detailed view.
		</div>
	)
}

export default DetailedView
