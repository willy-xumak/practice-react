import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetList from '../components/meetups/MeetList';

function FavortiesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if(favoritesCtx.totalFavorites === 0){
      content = <h2>You dont have favorites meets</h2>
  }
  else{
      content=<MeetList items={favoritesCtx.favorites} />
  }
  return (
    <section>
      <h1>My Favorites</h1>
      <h2>Total: {favoritesCtx.totalFavorites}</h2>
      {content}
    </section>
  );
}

export default FavortiesPage;
