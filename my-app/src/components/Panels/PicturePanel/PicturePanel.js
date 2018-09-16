import React from 'react';
import { Link } from 'react-router-dom';
import './PicturePanel.css';
import Img from '../../../assets/images/DanielThweatt.jpg';

const PicturePanel = () => (
	<div className="picture-panel">
		<img alt="Daniel" src={Img} />
		<Link className="internal-nav-link" to="/about">About Me</Link>
		<Link className="internal-nav-link" to="/portfolio">Portfolio</Link>
		<Link className="internal-nav-link" to="/contact">Contact Me</Link>
	</div>
);

export default PicturePanel;