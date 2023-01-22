import React from 'react';
import img from '../../assets/img8.jpg';
import { Box, styled, } from '@mui/system';
import { Button, FormControl, InputBase } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import QuillEditor from './RichText';

const Container = styled(Box)(({ theme }) => ({
	margin: '50px 0px',
	[theme.breakpoints.down('md')]: {
		margin: 0
	}
}));

const StyledFormControl = styled(FormControl)`
	display: flex;
	flex-direction: row;
	align-item: center;
	justify-content: space-between;
	height: 40px;
	margin: 20px;
`

const Image = styled('img')({
	width: '100%',
	height: '50vh',
	objectFit: 'cover'
});

const Label = styled('label')({
	display: 'flex',
	alignItems: 'center',
	color: 'rgb(107 107 107)',
	fontWeight: '500',
	cursor: 'pointer',
	margin: '20px',
})

const StyledInputBase = styled(InputBase)`
	border-bottom: 2px solid rgb(107 107 107);
	font-size: 1.3rem;
	font-weight: 800;
`

const StyledButton = styled(Button)`
    margin: 0px 20px;
    background: rgb(100 210 200);
    color: rgb(68 80 69);
	font-weight: 600;
	&:hover{
		background: rgb(24 24 24);
		color: rgb(155 210 200);
	}
`;
const CreatePost = () => {

	return (
		<Container>
			<Image src={img} alt="post" />
			<StyledFormControl>
				<Label htmlFor='fileInput'>
					<Add fontSize='large' color='action' />
					<span>Display Pic</span>
				</Label>
				<input type='file' id='fileInput' style={{ display: 'none' }} />
				<StyledInputBase placeholder="Enter Blog Tile here..." />
				<StyledButton>Publish</StyledButton>
			</StyledFormControl>
			<div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
				<QuillEditor />
			</div>
		</Container>
	)
}

export default CreatePost;