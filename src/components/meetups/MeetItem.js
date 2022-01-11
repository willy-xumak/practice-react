import Card from '../ui/Card';
import classes from './MeetItem.module.css';

function MeetItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img className={classes.image} src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>
            <span className="material-icons" style={{ color: 'red' }}>
              favorite
            </span>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetItem;
