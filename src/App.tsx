import './App.css'
import Home from './components/sections/Home'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navigator from './components/sections/Navigator'

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
	<div className="wrapper block h-[400vh]">
		<Navigator id="home" className="absolute top-0" />
		<Home />
		<Navigator id="projects" className="absolute top-[100vh]" />
		<Projects />
		<Navigator id="about" className="absolute top-[200vh]" />
		<About />
		<Navigator id="contact" className="absolute top-[300vh]" />
		<Contact />
	</div>
	)
}

export default App
