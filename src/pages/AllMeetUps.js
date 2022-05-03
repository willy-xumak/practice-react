import MeetList from '../components/meetups/MeetList';
import { useState, useEffect, useContext } from 'react';
import { Button } from '../stories/Button';
import TaskList from '../stories/TaskList';
import FavoritesContext from '../store/favorites-context';

function AllMeetUpPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  const favoritesCtx = useContext(FavoritesContext);

  const toggleFavoriteButton = (id) => {
    console.log('text');
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-practice-430dc-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupss = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupss.push(meetup);
        }
        setIsLoading(false);
        setMeetups(meetupss);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  const Tasks = [
    {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
      updateAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: '2',
      title: 'Test Task 2',
      state: 'TASK_INBOX',
      updateAt: new Date(2021, 0, 1, 9, 0),
    },
  ];

  return (
    <section>
      <TaskList key={1} id="1" tasks={Tasks} />
      
      <Button
        primary
        label="Click me!"
        size="large"
        backgroundColor="black"
        onClick={() => console.log('hola')}
      />
      <h1>All meets</h1>
      <MeetList items={meetups} />
    </section>
  );
}

export default AllMeetUpPage;
