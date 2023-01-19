import React, { useState } from 'react'
import image from '../../assets/logo.png'
import { Component, LoginContainer, Image, Wrapper, LoginButton, SignupButton, Text } from './LoginStyle.js'
import { TextField } from '@mui/material';




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
