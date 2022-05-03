import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  archived: [],
  totalFavorites: [],
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId)=> {},
  itemisFavorite: (meetupId)=> {},
  addArchived: (meetup) => {},
  itemisArchived: (meetup)=> {},
  removeArchived: (meetup)=> {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);
  const [userArchived, setUserArchived] = useState([]);

  const addFavoriteHandler = (meetup) =>{
    setUserFavorites((prevUserFavorites)=>{
        return prevUserFavorites.concat(meetup);
    });
  }

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites)=>{
        return prevUserFavorites.filter(item => item.id !== meetupId)
    })
  }

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some(item => item.id === meetupId)
  }


  const addArchivedHandler = (meetup) =>{
    setUserArchived((prevUserArchiveds)=>{
        return prevUserArchiveds.concat(meetup);
    });
  }

  const removeArchivedHandler = (meetupId) => {
    setUserArchived((prevUserArchiveds)=>{
        return prevUserArchiveds.filter(item => item.id !== meetupId)
    })
  }

  const itemIsArchivedHandler = (meetupId) => {
    return userArchived.some(item => item.id === meetupId)
  }



  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemisFavorite: itemIsFavoriteHandler,
    archived: userArchived,
    addArchived: addArchivedHandler,
    removeArchived: removeArchivedHandler,
    itemisArchived: itemIsArchivedHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;