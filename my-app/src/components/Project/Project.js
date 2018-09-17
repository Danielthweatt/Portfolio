import React from 'react';
import './Project.css';

const Project = props => (
	<React.Fragment>
		<h3>{props.projectInfo.title}</h3>
	    <p>{props.projectInfo.image}</p>
		<p>{props.projectInfo.description}</p>
		{props.projectInfo.liveLink ? (
		    <a href={props.projectInfo.liveLink} target="_blank">
				<p>
                    Deployed App
				</p>
			</a>
		) : (
			null
		)}
		<a href={props.projectInfo.gitHubLink} target="_blank">
			<p>
                GitHub Repository
			</p>
		</a>
	</React.Fragment>
);

export default Project;