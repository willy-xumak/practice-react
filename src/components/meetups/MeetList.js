import MeetItem from './MeetItem';
import clasess from './MeetList.module.css';

function MeetList(props) {
  return (
    <ul className={clasess.list}>
      {props.items.map((meet) => (
        <MeetItem key={meet.id} {...meet} />
      ))}
    </ul>
  );
}

export default MeetList;
