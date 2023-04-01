function Button({ data, onClick, children }) {
  const openModal = (event) => {
    const modalId = event.target.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    modal.classList.add('show-modal');
  };
  return (
    <button
      onClick={openModal}
      data-modal-button={data}
      className="btn btn-outline-primary mb-1"
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
