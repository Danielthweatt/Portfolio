import React from 'react';
import img from '../../../assets/images/DanielThweatt.jpg';
import { Link } from 'react-router-dom';
import './PicturePanel.css';

const PicturePanel = () => (
	<div className="picture-panel">
		<img alt="Daniel" src={img} />
		<hr />
		<Link to="/about">About Me</Link>
		<Link to="/portfolio">Portfolio</Link>
		<Link to="/contact">Contact Me</Link>
	</div>
);

export default PicturePanel;