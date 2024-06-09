import './Menu.css'

const Menu = () => {

	const links = [
		{ link: 'home', title: 'Domov', bg: 'bg-green-300 hover:bg-green-400' },
		{ link: 'projects', title: 'Projekty', bg: 'bg-amber-300 hover:bg-amber-400' }
	]

	const scrollIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		const target = e.target as HTMLAnchorElement
		const link_arr = target.href.split("/")
    	const sectionId = link_arr[link_arr.length - 1].toLowerCase();
		const section = document.getElementById(sectionId)
		section?.scrollIntoView()
	}

	return (
		<ul className="main-menu absolute bottom-1/3 block w-screen text-right z-0">
			{
				links.map((el, i) => (
					<li className={ `menu-item w-screen mt-3 ${el.bg}` } key={i}>
						<a onClick = { scrollIn } href={el.link} className='block w-screen px-5 py-3 text-white font-light hover:text-white uppercase tracking-wide'>
							{el.title}
						</a>
					</li>
				))
			}
		</ul>
	)

}

export default Menu