import { ReactNode } from "react"

type Props = {
	className?: string,
	children: ReactNode
}

const Section = ({ className, children } : Props) => {

	return (
		<div className={ `section h-screen w-screen ${className}` }>
			{ children }
		</div>
	)

}

export default Section