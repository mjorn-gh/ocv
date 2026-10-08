import React from 'react';
import './home.sass';
import Logo from '../components/Logo';
import { Link } from '../components/button';
function Home() {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__content">
					<h1>Elias Mj&oslash;en</h1>
					<h2>Fullstack Developer | UI/UX Designer</h2>
					<h4>Hi! Nice to meet you :)</h4>
					<h5>
						I'm an IT guy based in Switzerland who specializes in designing and
						developing beautiful and user-friendly web solutions. I finished my
						bachelor's degree in 2023 and I'm currently the UI/UX designer and a
						developer at Bertschi Digital Logistics AG, where I also lead the UI
						Expert Group.
					</h5>
					<div className="links">
						<Link
							link="mailto:elias@mjoen.ch"
							text="elias@mjoen.ch"
							icon="fa-solid fa-envelope"
						/>
						<Link
							link="https://www.linkedin.com/in/mjorn/"
							text="mjorn"
							icon="fa-brands fa-linkedin-in"
						/>
						<Link
							link="https://github.com/mjorn-gh"
							text="mjorn-gh"
							icon="fa-brands fa-github"
						/>
					</div>
				</div>
				<div className="hero__img">
					<div className="circle">
						<Logo className="logo" />
					</div>
				</div>
			</div>
			<svg
				className="wave"
				viewBox="0 0 900 100"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0 46L18.8 45.8C37.7 45.7 75.3 45.3 112.8 45.5C150.3 45.7 187.7 46.3 225.2 48.7C262.7 51 300.3 55 337.8 57.8C375.3 60.7 412.7 62.3 450.2 61.2C487.7 60 525.3 56 562.8 51.3C600.3 46.7 637.7 41.3 675.2 42.8C712.7 44.3 750.3 52.7 787.8 54.3C825.3 56 862.7 51 881.3 48.5L900 46L900 101L881.3 101C862.7 101 825.3 101 787.8 101C750.3 101 712.7 101 675.2 101C637.7 101 600.3 101 562.8 101C525.3 101 487.7 101 450.2 101C412.7 101 375.3 101 337.8 101C300.3 101 262.7 101 225.2 101C187.7 101 150.3 101 112.8 101C75.3 101 37.7 101 18.8 101L0 101Z"
					fill="#3F485F"
					strokeLinecap="round"
					strokeLinejoin="miter"></path>
			</svg>
		</section>
	);
}

export default Home;
