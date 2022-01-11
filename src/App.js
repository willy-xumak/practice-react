// import './App.css';
// import Todo from './components/Todo';

// function App() {
//   return (
//     <div>
//       <h1>My To-do's</h1>
//       <Todo title="Check your task" />
//       <Todo title="Review the dashboard" />
//       <Todo title="Give up from life" />
//     </div>
//   );
// }

// export default App;

import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetUpPage from './pages/AllMeetUps';
import FavortiesPage from './pages/Favorites';
import NewMeetUpPage from './pages/NewMeetUp';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favorites">
          <FavortiesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
