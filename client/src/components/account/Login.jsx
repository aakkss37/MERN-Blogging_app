import React, { useState } from 'react'
import image from '../../assets/logo.png'
import { Component, LoginContainer, Image, Wrapper, LoginButton, SignupButton, Text } from './LoginStyle.js'
import { TextField } from '@mui/material';
import { API } from '../../services/api';

const initialSignUpValue = {
	name: '',
	email: '',
	password: ''
}

const Login = () => {

	const [haveAccount, setHaveAccount] = useState(true);
	const [signUpInput, setSignUpInput] = useState(initialSignUpValue);

	const signUpInputHandler = (e) => {
		// const inputName = e.target.name;
		// const inputValue = e.target.value;
		// const obj = {inputName: inputValue} ----> "inputName" itself becone a key name here rether then taking value if "inputName" given above.
		// const obj = {[inputName]: inputValue} ----> to do so, we have to keep inputName in [] square bracket.. then it will make the key name as the value if inputName.
		// console.log(obj);
		setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
	}

	const signupUser = async()=>{
		let responce = await API.userSignup(signUpInput);
		console.log(responce);
	}

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
						<TextField variant="standard" onChange={(e) => signUpInputHandler(e)} name='name' label='Enter Name' required />
						<TextField variant="standard" onChange={(e) => signUpInputHandler(e)} name='username' label='Enter Username' required />
						<TextField variant="standard" onChange={(e) => signUpInputHandler(e)} name='password' label='Enter Password' required />
						<SignupButton onClick={signupUser} >Signup</SignupButton>
						<Text style={{ textAlign: 'center' }}>OR</Text>
						<LoginButton variant="contained" onClick={() => { setHaveAccount(true) }}>Already have an account</LoginButton>
					</Wrapper>
				}
			</LoginContainer>
		</Component>
	)
}

export default Login
