import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../../assets/images/DanielThweatt.jpg';
import './PicturePanel.css';

const PicturePanel = () => (
	<section className="picture-panel">
		<img alt="Daniel" src={me} />
		<nav>
			<Link className="internal-nav-link" to="/about">About Me</Link>
			<Link className="internal-nav-link" to="/portfolio">Portfolio</Link>
			<Link className="internal-nav-link" to="/contact">Contact Me</Link>
		</nav>
	</section>
);

export default PicturePanel;