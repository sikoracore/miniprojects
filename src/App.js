import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/Counter';
import MainPage from './components/MainPage/MainPage';
import Modal from './components/Modal/Modal';
import Quiz from './components/Quiz/Quiz';
import UsersForm from './components/UsersForm/UsersForm';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='counter' element={<Counter/>} />
        <Route path='modal' element={<Modal open={open} setOpen={setOpen} />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='userlist' element={<UsersForm />} />
      </Routes>
    </div>
  );
}

export default App;
