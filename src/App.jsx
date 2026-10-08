import React from 'react';
import Home from './sections/home';
import About from './sections/about';
import Projects from './sections/projects';
import Career from './sections/career';
import Navbar from './components/navbar';
import './App.sass';
import { Link } from './components/button';

function App() {
	const [navExpand, setNavExpand] = React.useState(false);
	const toggleNav = () => {
		console.log('should toggle theme');
		setNavExpand(!navExpand);
	};
	const [theme, setTheme] = React.useState(null);
	const setDark = () => {
		localStorage.setItem('theme', 'dark');
		setTheme('dark');
		document.getElementById('root').className = 'dark';
	};
	const setLight = () => {
		localStorage.setItem('theme', 'light');
		setTheme('light');
		document.getElementById('root').className = 'light';
	};
	const toggleTheme = () => {
		theme === 'light' ? setDark() : setLight();
	};
	React.useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			setDark();
			return;
		} else if (localStorage.getItem('theme') === 'light') {
			setLight();
			return;
		} else {
			const isDarkMode =
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches;
			isDarkMode ? setDark() : setLight();
		}
	}, []);

	return (
		<>
			<header>
				<Navbar
					nav={navExpand}
					onNav={toggleNav}
					theme={theme}
					onTheme={toggleTheme}
				/>
			</header>
			<main>
				<Home />
				<Projects />
				<Career />
				<About />
			</main>
			<footer className="primary">
				© Elias Mjøen {new Date().getFullYear()}
				<Link
					link="https://www.privacypolicygenerator.info/live.php?token=3pLM1x8zUQ0INTedkGP65MOC4uFK3QCO"
					className="btn__inline"
					id="privacy-policy"
					text="Privacy Policy"></Link>
				<Link
					link="https://www.termsandconditionsgenerator.com/live.php?token=3pLM1x8zUQ0INTedkGP65MOC4uFK3QCO"
					className="btn__inline"
					id="terms-and-conditions"
					text="Terms & Conditions"></Link>
			</footer>
		</>
	);
}

export default App;
