import React from 'react';
import './Header.css';

const Header = () => (
	<header className="clearfix">
		<h1>Daniel Thweatt</h1>
		<div className="external-nav-link-container">
			<a className="external-nav-link" href="https://www.linkedin.com/in/daniel-thweatt-21718114b/" target="_blank">LinkedIn</a>
			<a className="external-nav-link" href="https://github.com/Danielthweatt/" target="_blank">GitHub</a>
		</div>
	</header>
);

export default Header;