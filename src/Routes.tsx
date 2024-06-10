import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import NewUserForm from './components/NewUserForm/NewUserForm';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-user" element={<NewUserForm />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;