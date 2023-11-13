import ModalContext from './context/ModalContext';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const [show, changeShow] = useState(false);
  return (
    <ModalContext.Provider
      value={{ showModal: show, changeShowModal: changeShow }}
    >
      <div className="App">
        <Modal>
          <h2>Modal window</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consequuntur facilis, obcaecati soluta iste ex illum adipisci veniam
            provident est rerum, minima eaque, consectetur aut velit
            reprehenderit!
          </p>
        </Modal>
        <Button>Открыть модалку</Button>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
