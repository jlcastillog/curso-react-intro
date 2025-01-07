import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import NewTodoPage from './routes/new/NewTodoPage';
import EditTodoPage from './routes/edit/EditTodoPage';
import NotFoundPage from './routes/notfound/NotFoundPage';
import MainHeader from './components/MainHeader';


function App() {

  return (
    <HashRouter>
      <MainHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="/:search" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
