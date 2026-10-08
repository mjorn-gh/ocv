import React from 'react';
import Project from '../components/project';
import './projects.sass';
import bachelorImg from '../images/bachelor.jpg';
import ivisImg from '../images/Ivis.jpg';
import geigerImg from '../images/GEIGER.jpg';
import leadImg from '../images/Leadtool.jpg';
export default function Projects() {
	return (
		<section className="projects primary">
			<div className="container">
				<div className="heading">
					<h3>Projects</h3>
					<p>These are some of my interesting projects</p>
				</div>

				<div className="projects__list">
					<div className="circle"></div>
					<Project
						id="bachelor"
						name="Scheduling problems"
						short="Research and development of a universal model for scheduling 
                                        problems, with a website connected to a solver that allows 
                                        users to formulate their own scheduling problems using the model. 
                                        The website was developed as part of a bachelor thesis and was 
                                        done in a team of 2 people."
						tags={['Thesis', 'C#', '.NET6', 'Blazor', 'gurobi']}
						picture={bachelorImg}
						code="https://github.com/mjorn-gh/bachelors-thesis"
					/>
					<Project
						id="ivis"
						name="Covid-19 internet"
						short="Research and development of a website that illustrates the internet
                                        usage of swiss people during the Covid-19 pandemic. The data was 
                                        collected in a national survey and was made available by the swiss
                                        federal office for statistics. The website was developed as part of a
                                        school project during my sixth semester at FHNW and was done in a team
                                        of 2 people."
						tags={['D3.js', 'HTML/CSS/JS']}
						picture={ivisImg}
						code="https://github.com/mjorn-gh/internet-usage"
						site="https://mjorn-gh.github.io/internet-usage/"
					/>
					<Project
						id="geiger"
						name="Ethical nudging"
						short="Research and development of a website that should demonstrate the
                                        effectiveness of ethical nudging in the context of cyber security advisories.
                                        The website was developed as part of a bachelor thesis precursor and was done in a
                                        team of 2 people."
						tags={['Thesis', 'React', 'HTML/CSS/JS']}
						picture={geigerImg}
						code="https://github.com/mjorn-gh/geiger-nudging"
						site="https://mjorn-gh.github.io/geiger-nudging/"
					/>
					<Project
						id="leadtool"
						name="Lead management"
						short="Development of a lead management application for Allianz Suisse
                                        during my third and fourth semester at FHNW. The project served as an 
                                        introduction to the agile development process and was done in a team
                                        of 7 people."
						tags={['React', 'Java', 'Spring Boot', 'REST API', 'Agile']}
						picture={leadImg}
					/>
				</div>
			</div>
		</section>
	);
}
