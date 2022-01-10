import clasess from './MeetItem.module.css'

function MeetItem(props) {
	return (
		<li className={clasess.item}>
			<div>
				<img className={clasess.image} src={props.image} alt={props.title} />
			</div>
			<div>
				<h3>{props.title}</h3>
				<address>{props.address}</address>
				<p>{props.description}</p>
			</div>
			<div className={clasess.actions}>
				<button>Favorite</button>
				<span className='material-icons-outlined'>favorite_border</span>
			</div>
		</li>
	)
}

export default MeetItem
