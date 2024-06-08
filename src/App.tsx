import './App.css'
import Home from './components/Home'
import Section from './components/Section'

function App() {

  return (
  	<div className='snap-y snap-mandatory'>
		<Home />
		<Section className='bg-cyan-100'>asd</Section>
		<Section className='bg-blue-100'>asd</Section>
		<Section className='bg-red-100'>asd</Section>
		<h1>Kopcsányi</h1>
	</div>
	)
}

export default App
