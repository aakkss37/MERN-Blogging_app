/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Typography } from '@mui/material'
import React from 'react'

const PostCard = (props) => {
  return (
	<Box>
		<img src={props.picture} alt="Display Picture"/>
		<Typography>{props.Category}</Typography>
		<Typography>{props.title}</Typography>
		<Typography>{props.name}</Typography>
		<Typography>{props.username}</Typography>
		<Typography>{props.discription}</Typography>
	</Box>
  )
}

export default PostCard
