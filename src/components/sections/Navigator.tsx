type Props = {
	id?: string,
	className?: string
}

const Navigator = ({ id, className }: Props) => {

	return (
		<div id={id} className={className}></div>
	)

}

export default Navigator;