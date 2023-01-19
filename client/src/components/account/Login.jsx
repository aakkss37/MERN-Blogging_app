import React, { useState } from 'react'
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import image from '../../assets/logo.png'


const Component = styled(Box)`
    display: flex;
    height: 100%;
	margin-top: 5rem;
    justify-content: center; 
    align-items: flex-end;    
    padding: 15px;
`;

const LoginContainer = styled(Box)`
	width: 500px;
    box-shadow: 4px 0px 4px 03px rgb(0 0 0/ 0.3);
`

const Image = styled('img')({
	width: 250,
	margin: 'auto',
	padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: rgb(156 211 201);
    color: rgb(69 81 70);
	font-weight: 700;
    height: 48px;
    border-radius: 2px;
	&:hover{
    background: rgb(181 228 220);
  }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: rgb(156 211 201);
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

// const Error = styled(Typography)`
//     font-size: 10px;
//     color: #ff6161;
//     line-height: 0;
//     margin-top: 10px;
//     font-weight: 600;
// `

// const loginInitialValues = {
// 	username: '',
// 	password: ''
// };

// const signupInitialValues = {
// 	name: '',
// 	username: '',
// 	password: '',
// };


const Login = () => {

	const [haveAccount, setHaveAccount] = useState(true)


	return (
		<Component>
			<LoginContainer>
				<Image src={image} alt="blog" />
				{haveAccount ?
					<Wrapper>
						<TextField variant="standard" name='username' label='Enter Username' />
						<TextField variant="standard" name='password' label='Enter Password' />

						<LoginButton variant="contained" >Login</LoginButton>
						<Text style={{ textAlign: 'center' }}>OR</Text>
						<SignupButton style={{ marginBottom: 50 }} onClick={() => { setHaveAccount(false) }}>Create an account</SignupButton>
					</Wrapper>
					:
					<Wrapper>
						<TextField variant="standard" name='name' label='Enter Name' />
						<TextField variant="standard" name='username' label='Enter Username' />
						<TextField variant="standard" name='password' label='Enter Password' />

						<SignupButton >Signup</SignupButton>
						<Text style={{ textAlign: 'center' }}>OR</Text>
						<LoginButton variant="contained" onClick={() => { setHaveAccount(true) }}>Already have an account</LoginButton>
					</Wrapper>
				}

			</LoginContainer>
		</Component>
	)
}

export default Login
