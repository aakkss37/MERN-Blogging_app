import React, { useState } from 'react'
import image from '../../assets/logo.png'
import { Component, LoginContainer, Image, Wrapper, LoginButton, SignupButton, Text } from './LoginStyle.js'
import { TextField } from '@mui/material';
import { API } from '../../services/api';

const initialSignUpValue = {
	name: '',
	userName: '',
	password: ''
}

const Login = () => {

	const [haveAccount, setHaveAccount] = useState(true);
	const [signUpInput, setSignUpInput] = useState(initialSignUpValue);
	const [isError, setIsError] = useState(false);
	const [isNewAccountCreated, setIsNewAccountCreated]  = useState(false)

	const signUpInputHandler = (e) => {
		// const inputName = e.target.name;
		// const inputValue = e.target.value;
		// const obj = {inputName: inputValue} ----> "inputName" itself becone a key name here rether then taking value if "inputName" given above.
		// const obj = {[inputName]: inputValue} ----> to do so, we have to keep inputName in [] square bracket.. then it will make the key name as the value if inputName.
		// console.log(obj);
		setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
	}

	const signupUser = async () => {
		try {
			let responce = await API.userSignup(signUpInput);
			console.log("responce <-------- ", responce, )
			setSignUpInput(initialSignUpValue)
			setHaveAccount(true);
			setIsError(false);
			setIsNewAccountCreated(true);
		} catch (error) {
			console.log("error ----> ", error);
			setIsError(true);
		}
			
	}

	return (
		<Component>
			<LoginContainer>
				<Image src={image} alt="blog" />
				{haveAccount ?
					<Wrapper>
						{isNewAccountCreated && <Text style={{ color: 'green' }}>Congratulations! Your account has been cteated successfully. Please Login.</Text>}
						<TextField variant="standard" name='username' label='Enter Username' value={signUpInput.name}/>
						<TextField variant="standard" name='password' label='Enter Password' value={signUpInput.password}/>
						<LoginButton variant="contained" >Login</LoginButton>
						<Text style={{ textAlign: 'center' }}>OR</Text>
						<SignupButton style={{ marginBottom: 50 }} onClick={() => { setHaveAccount(false) }}>Create an account</SignupButton>
					</Wrapper>
					:
					<Wrapper>
						{isError && <Text style={{ color: 'red' }}>Oops.. Something went wrong, Please try again.</Text>}
						<TextField variant="standard" onChange={(e) => signUpInputHandler(e)} name='name' label='Enter Name' required value={signUpInput.name}/>
						<TextField variant="standard" onChange={(e) => signUpInputHandler(e)} name='userName' label='Enter Username' required value={signUpInput.userName}/>
						<TextField variant="standard" onChange={(e) => signUpInputHandler(e)} name='password' label='Enter Password' required value={signUpInput.password}/>
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
