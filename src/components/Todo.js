import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
      setModalIsOpen(false);
  }

  const confirmModalHandler = () => {
    setModalIsOpen(false);
    setModalConfirm(true);
  }

  return (
    <div className={modalConfirm ? 'hidden' : 'card'}>
      <h2>{props.title}</h2>
      <div>
        <button onClick={deleteHandler}>Delete</button>
      </div>

      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={confirmModalHandler}/> }
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
