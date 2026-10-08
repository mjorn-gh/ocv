import React from 'react';
import './career.sass';
import { Link } from '../components/button';
import portrait from '../images/carreer.jpg';
import pdf from '../images/Dossier.pdf';
export default function Career() {
	return (
		<section className="career">
			<svg
				className="wave"
				viewBox="0 0 900 100"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0 62L18.8 57.8C37.7 53.7 75.3 45.3 112.8 44C150.3 42.7 187.7 48.3 225.2 50.7C262.7 53 300.3 52 337.8 49C375.3 46 412.7 41 450.2 42.3C487.7 43.7 525.3 51.3 562.8 52.2C600.3 53 637.7 47 675.2 44.7C712.7 42.3 750.3 43.7 787.8 46.2C825.3 48.7 862.7 52.3 881.3 54.2L900 56L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
					fill="#3F485F"
					strokeLinecap="round"
					strokeLinejoin="miter"></path>
			</svg>
			<div className="container">
				<div className="heading ">
					<div>
						<h3>Career</h3>
						<p>My Journey in IT</p>
					</div>
					<Link
						link={pdf}
						icon="fa-solid fa-download"
						text="CV"
						download="CV_Elias_Mjoen.pdf"
					/>

					<div className="image__container">
						<img
							className="image gutter"
							alt="portrait of elias"
							src={portrait}></img>
					</div>
				</div>

				<div className="career__content">
					<div className="visual">
						<div className="circle">
							<i className="fa-solid fa-briefcase"></i>
						</div>
						<div className="line"></div>
					</div>
					<div className="text">
						<h6>07/2023 - today</h6>
						<h4>UI/UX Designer & Software Engineer</h4>
						<h5>Bertschi Digital Logistics AG</h5>
						<p>
							At Bertschi Digital Logistics I combine design and development
							across several roles:
						</p>
						<ul>
							<li>UI/UX designer for Bertschi Digital Logistics</li>
							<li>Lead of the UI Expert Group</li>
							<li>
								Managing and maintaining our frontend component library
							</li>
							<li>Developer in the ordering team</li>
						</ul>
					</div>
					<div className="visual">
						<div className="circle">
							<i className="fa-solid fa-graduation-cap"></i>
						</div>
						<div className="line"></div>
					</div>
					<div className="text">
						<h6>09/2019 - 03/2023</h6>
						<h4>
							BSc in Computer Science &#40;Specialization in design &
							management&#41;
						</h4>
						<h5>
							University of Applied Sciences and Art North-western Switzerland
							FHNW School of Engineering
						</h5>
						<p>
							During my seven semesters at FHNW I enhanced my skills as a
							software engineer, designer, and programmer and was able to
							participate in projects like:
						</p>
						<ul>
							<li>
								Creation of lead management application for Allianz Suisse
								&#40;React front-end & Spring Boot API&#41;
							</li>
							<li>
								Research for and Development of a CyberSec info-website
								&#40;React&#41;
							</li>
							<li>
								Research for and Development of a general model for scheduling
								problems &#40;C# .NET 6 & Gurobi Optimizer&#41;
							</li>
						</ul>
					</div>
					<div className="visual">
						<div className="circle">
							<i className="fa-solid fa-briefcase"></i>
						</div>
						<div className="line"></div>
					</div>
					<div className="text">
						<h6>08/2017 - 12/2018</h6>
						<h4>Software Engineer &#40;C# .NET WPF &#41;</h4>
						<h5>Mammut Soft Computing AG</h5>
						<p>
							First as Intern and then as fulltime employee I worked as a .NET
							developer, building small desktop applications.
						</p>
					</div>
					<div className="visual">
						<div className="circle">
							<i className="fa-solid fa-graduation-cap"></i>
						</div>
						<div className="line"></div>
					</div>
					<div className="text">
						<h6>08/2014 - 06/2018</h6>
						<h4>EFZ Application Developer & BM &#40;commerce&#41; </h4>
						<h5>Old Cantonal School Aarau & BBBaden</h5>
						<p>
							I took my first step into the world of computer science after
							mandatory school was a program called IMS
							&#40;Informatikmittelschule&#41; where I learned a lot of
							fundamentals in subjects like:
						</p>
						<ul>
							<li>OOP &#40;Java, C#&#41;</li>
							<li>HTML, CSS, JS</li>
							<li>Databases &#40;SQL&#41;</li>
							<li>
								Software engineering &#40;Requirements, Project management&#41;
							</li>
							<li>Computer Systems &#40;Binary/Hex, Networks, History&#41;</li>
						</ul>
						<p>I also completed the following language diplomas:</p>
						<ul>
							<li>English: Cambridge CAE &#40;Test C1 - Result C2&#41; </li>
							<li>French: Delf B2</li>
						</ul>
					</div>
					<div className="visual">
						<div className="circle">
							<i className="fa-solid fa-graduation-cap"></i>
						</div>
					</div>
					<div className="text">
						<h6>08/2005 - 06/2014</h6>
						<h4>Mandatory Education &#40;Bez. Diploma&#41;</h4>
						<h5>Kreisschule Kestenberg</h5>
						<p>
							After going to primary school I was submitted to the highest
							middle school track &#40;Bezirkschule&#41;.
						</p>
					</div>
				</div>
			</div>
			<svg id="wave" viewBox="0 0 900 100">
				<path
					d="M0 44L13.7 48.2C27.3 52.3 54.7 60.7 82 65.5C109.3 70.3 136.7 71.7 163.8 69.3C191 67 218 61 245.2 53.7C272.3 46.3 299.7 37.7 327 40C354.3 42.3 381.7 55.7 409 55.3C436.3 55 463.7 41 491 34.2C518.3 27.3 545.7 27.7 573 29.7C600.3 31.7 627.7 35.3 654.8 42C682 48.7 709 58.3 736.2 61.7C763.3 65 790.7 62 818 59.3C845.3 56.7 872.7 54.3 886.3 53.2L900 52"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="miter"
					stroke="#3F485F"
					strokeWidth="2"></path>
			</svg>
		</section>
	);
}
