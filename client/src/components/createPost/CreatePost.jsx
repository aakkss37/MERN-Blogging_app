import React from 'react';
import img from '../../assets/img8.jpg';
import { Box, styled,  } from '@mui/system';
import { Button, FormControl } from '@mui/material';
import {AddCircle as Add} from '@mui/icons-material';

const Container = styled(Box)(({ theme }) => ({
	margin: '50px 0px',
	[theme.breakpoints.down('md')]: {
		margin: 0
	}
}));

const Image = styled('img')({
	width: '100%',
	height: '50vh',
	objectFit: 'cover'
});

const Label = styled('label')({
	display: 'flex',
	alignItems: 'center',
	color: 'rgb(107 107 107)',
	fontWeight: '700',
	cursor:'pointer',
	margin:'20px',
})

const StyledButton = styled(Button)`
    margin: 0px 20px;
    width: 75%;
    background: rgb(100 210 200);
    color: rgb(68 80 69);
	font-weight: 700;
	padding: 0;
	&:hover{
		background: rgb(155 210 200);
	}
`;

const CreatePost = () => {
	
	return (
		<Container>
			<Image src={img} alt="post" />
			<FormControl>
				<Label htmlFor='fileInput'>
					<Add fontSize='large' color='action'/>
					<span>Display Pic</span>
				</Label>
				<input type='file' id='fileInput' style={{ display: 'none' }} />
				<StyledButton>Publish</StyledButton>
			</FormControl>
		</Container> 
	)
}

export default CreatePost;