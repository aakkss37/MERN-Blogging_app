import React from 'react'
import './container.css';

const Contact = () => {
	return (
		<div className='contactContainer' style={{ textAlign: 'center', margin: '50px', marginTop: '150px' }}>
			<h1>Contact Me :- </h1>
			<form action="mailto:amarkumar.sharma.124@gmail.com">
				<button type='submit'>E-mail</button>
			</form>
			<div className='iconContainer'>
				<a href='https://github.com/aakkss37' target='_blank' rel='noopener noreferrer'>
					<i className="icon-github"></i> 
				</a>
				<a href='https://twitter.com/aakkss37' target='_blank' rel='noopener noreferrer'>
					<i className="icon-twitter"></i>
				</a>
				<a href='https://www.linkedin.com/in/amar-kumar-sharma-44202a203/' target='_blank' rel='noopener noreferrer'>
					<i className="icon-linkedin"></i> 
				</a>
				<a href='https://www.facebook.com/amarkumar.sharma.37' target='_blank' rel='noopener noreferrer'>
					<i className="icon-facebook"></i>
				</a>
				<a href='https://www.instagram.com/aakkss28/' target='_blank' rel='noopener noreferrer'>
					<i className="icon-instagram"></i>
				</a>
			</div>
		</div>
	);
}

export default Contact