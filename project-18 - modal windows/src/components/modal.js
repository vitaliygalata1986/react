function Modal({ id, dataTitle, children }) {
  const closeModal = (event) => {
    const modal = event.target.closest('[data-modal]');
    modal.classList.remove('show-modal');
  };
  const closeOverlayModal = (event) => {
    if (event.currentTarget === event.target) {
      event.target.classList.remove('show-modal');
    }
  };

  return (
    <div onClick={closeOverlayModal} id={id} data-modal className="fade-block">
      <div className="modal-window">
        <div className="card">
          <div className="card-header">{dataTitle}</div>
          <div className="card-body">
            {children}
            <button
              onClick={closeModal}
              data-modal-close
              type="button"
              className="btn btn-dark"
            >
              Закрыть окно
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
