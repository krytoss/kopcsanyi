import { ReactNode } from "react"

type Props = {
	className?: string,
	children: ReactNode
}

const Section = ({ className, children } : Props) => {

	return (
		<section className={ `section h-screen w-screen snap-start ${className}` }>
			{ children }
		</section>
	)

}

export default Section