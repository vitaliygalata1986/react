import Modal from './components/modal.js';
import Button from './components/button.js';

function App() {
  return (
    <div className="App">
      <div className="btn-block">
        <Button data="modal-1">Открыть модальное окно №1</Button>
        <Button data="modal-2">Открыть модальное окно №2</Button>
        <Button data="modal-3">Открыть модальное окно №3</Button>
      </div>

      <Modal id="modal-1" dataTitle="Модальное окно №1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante 1.
        </p>
      </Modal>

      <Modal id="modal-2" dataTitle="Модальное окно №2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante 2.
        </p>
      </Modal>

      <Modal id="modal-3" dataTitle="Модальное окно №3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante 3.
        </p>
      </Modal>
    </div>
  );
}

export default App;
