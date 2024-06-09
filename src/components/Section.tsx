import { ReactNode } from "react"
import Menu from "./Menu"

type Props = {
	id?: string,
	className?: string,
	children: ReactNode
}

const Section = ({ id, className, children } : Props) => {

	return (
		<section id={id} className={ `section relative h-screen w-screen snap-start ${className}` }>
			{ children }
			<Menu />
		</section>
	)

}

export default Section