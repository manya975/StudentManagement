import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import LoginPage from './components/Login';
import StudentList from './components/StudentList';
import UpdateStudent from './components/UpdateStudent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/students/edit/:id" element={<UpdateStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
