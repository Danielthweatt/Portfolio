import React from 'react';
import './Project.css';

const Project = props => (
	<React.Fragment>
		<h3>{props.projectInfo.title}</h3>
	    <img className="project-pic" src={props.projectInfo.image} alt={props.projectInfo.title} />
		<p>{props.projectInfo.description}</p>
		<a className="github-link" href={props.projectInfo.gitHubLink} target="_blank">
            GitHub Repo
		</a>
		{props.projectInfo.liveLink ? (
			<a className="deployed-link" href={props.projectInfo.liveLink} target="_blank">
                Deployed App
			</a>
		) : (
			null
		)}
	</React.Fragment>
);

export default Project;