import React from 'react';
import img from '../../../assets/images/DanielThweatt.jpg';
import { Link } from 'react-router-dom';
import './PicturePanel.css';

const PicturePanel = () => (
	<div className="picture-panel">
		<img alt="Daniel" src={img} />
		<Link className="internal-nav-link" to="/about">About Me</Link>
		<Link className="internal-nav-link" to="/portfolio">Portfolio</Link>
		<Link className="internal-nav-link" to="/contact">Contact Me</Link>
	</div>
);

export default PicturePanel;