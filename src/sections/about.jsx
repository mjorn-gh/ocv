import React from 'react';
import { Link } from '../components/button';
import './about.sass';
import childhood from '../images/childhood.jpg';
import hobbies from '../images/hobbies.jpg';
function About() {
	return (
		<section className="about">
			<div className="container">
				<div className="heading">
					<h3>About Me</h3>
					<p>My past and present, Whoa Computers!</p>
				</div>
				<div className="about__content">
					<article>
						<div className="image__container">
							<img src={childhood} alt=""></img>
						</div>
						<div className="article__body">
							<h4 className="article__heading">Early Life</h4>
							<p>
								I was born on the fifth of August 1998 in the city of Baden,
								Switzerland. I grew up in a small town called Wildegg with my
								Norwegian father and Swiss mother and my two little brothers. I
								spent a large part of my early childhood on my uncle's farm
								&#40;as my parents were both working&#41;, where I learned to
								appreciate the beauty of nature and the importance of hard work.
								During my kindergarten and primary school years you would find
								me with my friends and brothers in the neighborhood or the
								nearby forest.
								<br />
								<br />
							</p>
							<h4 className="article__heading">And then came the internet</h4>
							<p>
								Always having been a technically inclined boy, I was naturally
								fascinated when my father introduced me to the world of
								computers. It didn't take long until I got my hands on a computer
								of my own and started adventuring into the seemingly infinite
								depths of the internet. Whether it was playing games, reading
								about new concepts or just listening to music, computers became
								an influential part of my teenage years.
							</p>
						</div>
					</article>
					<article>
						<div className="image__container">
							<img src={hobbies} alt=""></img>
						</div>
						<div className="article__body">
							<h4>Childhood pastimes</h4>
							<p>
								In primary school I was a member of the local soccer team and
								played for a few years, after which I dipped my toes into
								table-tennis and kung-fu. I also took piano lessons for all my
								school years and participated in the annual theater play of the
								local church a few times &#40;I even got to play the lead role a
								few times&#41;.
								<br />
								<br />
							</p>
							<h4>How I spend my time now :)</h4>
							<p>
								While I still spend a lot of time online, I have a close group
								of friends and a good connection to my family, which keeps me
								socially active. With my friends I often play board-, card- and
								video-games, and like most I also watch movies and series and
								even read the occasional book when I'm alone. I genuinely love
								music and my Spotify is playing almost 24/7.{' '}
								<Link
									className="btn__inline"
									link="https://open.spotify.com/user/cyberniinja?si=7498d95d22e440e0"
									text="Check it out!"
								/>{' '}
								&#40;seriously, my Spotify statistics are a bit scary&#41;.{' '}
								<br />
								<br />
								In winter I spend at least one week on my snowboard in the alps
								and in summer I like to go hiking or camping. I also love
								travelling and would generally describe myself as an
								adventurous and explorative person.
							</p>
						</div>
					</article>
				</div>
			</div>
			<svg className="wave" viewBox="0 0 900 100">
				<path
					d="M0 58L11.5 57C23 56 46 54 69 58.7C92 63.3 115 74.7 138.2 77C161.3 79.3 184.7 72.7 207.8 69.2C231 65.7 254 65.3 277 68.3C300 71.3 323 77.7 346 79.2C369 80.7 392 77.3 415.2 77.2C438.3 77 461.7 80 484.8 81.7C508 83.3 531 83.7 554 78.7C577 73.7 600 63.3 623 61.7C646 60 669 67 692.2 67.2C715.3 67.3 738.7 60.7 761.8 57.7C785 54.7 808 55.3 831 57C854 58.7 877 61.3 888.5 62.7L900 64L900 101L888.5 101C877 101 854 101 831 101C808 101 785 101 761.8 101C738.7 101 715.3 101 692.2 101C669 101 646 101 623 101C600 101 577 101 554 101C531 101 508 101 484.8 101C461.7 101 438.3 101 415.2 101C392 101 369 101 346 101C323 101 300 101 277 101C254 101 231 101 207.8 101C184.7 101 161.3 101 138.2 101C115 101 92 101 69 101C46 101 23 101 11.5 101L0 101Z"
					fill="#3F485F"
					strokeLinecap="round"
					strokeLinejoin="miter"></path>
				{/* <path
							id="varBg"
							d="M0 30L11.5 29.8C23 29.7 46 29.3 69 27C92 24.7 115 20.3 138.2 18.5C161.3 16.7 184.7 17.3 207.8 19.8C231 22.3 254 26.7 277 29.5C300 32.3 323 33.7 346 34.3C369 35 392 35 415.2 36.2C438.3 37.3 461.7 39.7 484.8 38.8C508 38 531 34 554 32C577 30 600 30 623 27.3C646 24.7 669 19.3 692.2 20.7C715.3 22 738.7 30 761.8 29.7C785 29.3 808 20.7 831 19.2C854 17.7 877 23.3 888.5 26.2L900 29L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
							stroke-linecap="round"
							stroke-linejoin="miter"></path> */}
			</svg>
		</section>
	);
}
export default About;
