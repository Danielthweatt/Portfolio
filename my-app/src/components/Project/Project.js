import React from 'react';
import './Project.css';

const Project = props => (
	<React.Fragment>
		<h3>{props.projectInfo.title}</h3>
	    <p>{props.projectInfo.image}</p>
		<p>{props.projectInfo.description}</p>
		<p>{props.projectInfo.liveLink}</p>
		<p>{props.projectInfo.gitHubLink}</p>
	</React.Fragment>
);

export default Project;