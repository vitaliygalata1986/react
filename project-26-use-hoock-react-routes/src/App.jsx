import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModalContext from './context/ModalContext';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Courses from './components/Courses';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import SingleCourse from './components/SingleCourse';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, changeShow] = useState(false);
  return (
    <BrowserRouter>
      <ModalContext.Provider value={{ show, changeShow }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="contacts" element={<Contacts />}></Route>
              <Route path="courses" element={<Courses />}></Route>
              <Route path="courses/:slug" element={<SingleCourse />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </div>
      </ModalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
