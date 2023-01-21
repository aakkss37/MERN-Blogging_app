import { Link } from 'react-router-dom';
import { Component, Container, Image } from './HeaderStyle.js';
import image from '../../assets/logo.png'


const Header = () => {

	return (
		<Component>
			<Container>
				<div>
					<Link to='/home'><Image src={image} alt="blog" /></Link>
					<Link to='/'>HOME</Link>
					<Link to='/about'>ABOUT</Link>
					<Link to='/contact'>CONTACT</Link>
				</div>
				<div>
					<Link to='/account'>LOGOUT</Link>
				</div>
			</Container>
		</Component>
	)
}

export default Header;