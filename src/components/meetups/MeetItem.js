import Card from '../ui/Card';
import classes from './MeetItem.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemisFavorite = favoritesCtx.itemisFavorite(props.id);

  const toggleFavoriteButton = () => {
    if (itemisFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        imate: props.imate,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img className={classes.image} src={props.imate} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteButton}>
            {itemisFavorite ? 'Remove favorite' : 'To Favorite'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetItem;
