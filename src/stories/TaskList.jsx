import Task from './Task';
import PropTypes from 'prop-types';

import FavoritesContext from '../store/favorites-context';
import { useContext } from 'react';

const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };
  const favoritesCtx = useContext(FavoritesContext);

  events.onPinTask = (id) => {
    if (favoritesCtx.itemisFavorite(id)) favoritesCtx.removeFavorite(id);
    else {
      favoritesCtx.addFavorite({
        id: id,
        title: tasks[tasks.findIndex((task) => task.id === id)].title,
      });
    }
  };

  events.onArchiveTask = (id) => {
    if (favoritesCtx.itemisArchived(id)) favoritesCtx.removeArchived(id);
    else {
      favoritesCtx.addArchived({
        id: id,
        title: tasks[tasks.findIndex((task) => task.id === id)].title,
      });
    }
    // console.log(tasks);
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items" key={'empty'} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  //   const tasksInOrder = [
  //     ...tasks.filter((task) => task.state === 'TASK_PINNED'),
  //     ...tasks.filter((task) => task.state !== 'TASK_PINNED'),
  //   ];

  tasks.map((task) => {
    if (favoritesCtx.itemisFavorite(task.id)) task.state = 'TASK_PINNED';
    if (favoritesCtx.itemisArchived(task.id)) task.state = 'TASK_ARCHIVED';
    return task;
  });

  const tasksInOrder = tasks.sort((t1, t2) => {
    if (t1.state === 'TASK_PINNED') return -1;
    return 0;
  });

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task
          key={task.id}
          task={task}
          {...events}
          onPinTask={events.onPinTask}
          onArchiveTask={events.onArchiveTask}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
};

TaskList.defaultProps = {
  loading: false,
};

export default TaskList;
