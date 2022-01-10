import MeetItem from './MeetItem';
import clasess from './MeetList.module.css';

function MeetList(props) {
	return (
		<ul className={clasess.list}>
			{props.items.map((meet) => (
				<MeetItem
					key={meet.id}
					id={meet.id}
                    title={meet.title}
					image={meet.image}
					address={meet.address}
					description={meet.description}
				/>
			))}
		</ul>
	)
}

export default MeetList
