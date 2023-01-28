import React from 'react'
import './about.css'

const About = () => {
  
	return (
		<div className='aboutConatiner'>
			<h1>About</h1>
			<p>
				This is a simple blog website developed by Amar Kumar, a full-stack developer. The website is designed to provide users with an easy and user-friendly interface for creating and managing their own blogs. Amar Kumar, the developer behind the website, is a highly skilled and experienced full-stack developer who has put in a lot of effort to ensure that the website is functional, efficient, and user-friendly. The website's features have been carefully crafted to cater to the needs of bloggers and make the process of creating and managing blogs as smooth as possible.
			</p>
			<h2>Features:</h2>
			<ul>
				<li>Login/Signup</li>
				<li>Write blogs with title and add pictures</li>
				<li>Update own blogs</li>
				<li>Change display picture of own blogs</li>
				<li>Filter blogs by category (movie, music, sports, tech, fashion)</li>
				<li>Multi-page website</li>
				<li>Delete own blogs</li>
			</ul>
		</div>
	);
  
}

export default About