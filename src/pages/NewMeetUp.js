import { useHistory } from 'react-router-dom';
import NewMeetForm from '../components/meetups/NewMeetForm';

function NewMeetUpPage() {
    const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://react-practice-430dc-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>NewMeetUpPage</h1>
      <NewMeetForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
