import React from 'react';
import './Project.css';

const Project = props => (
	<React.Fragment>
		<h3>{props.projectInfo.title}</h3>
	    <img className="project-pic" src={props.projectInfo.image} alt={props.projectInfo.title} />
		<p className="project-description">{props.projectInfo.description}</p>
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