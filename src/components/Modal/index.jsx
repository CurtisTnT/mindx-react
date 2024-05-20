import "./Modal.css";

export default function Modal(props) {
  const { onClose } = props;
  return (
    <div className="overlay">
      <div className="modal-ctn">
        <div className="modal">
          <button className="close-modal-btn" onClick={onClose}>
            X
          </button>
          {props.children}
        </div>
      </div>
    </div>
  );
}
