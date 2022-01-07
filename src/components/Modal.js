function Modal (props) {
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <div>
                <button className='btn--warning' onClick={props.onCancel}>Cancel</button>
                <button onClick={props.onConfirm}>Confirm</button>
            </div>
        </div>
    );
}

export default Modal;