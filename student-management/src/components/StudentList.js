import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteStudentById, getAllStudents } from './StudentService';
import './studentList1.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getAllStudents("Bearer " + localStorage.getItem('token'));
        console.log(response.data)
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students', error);
      }
    };
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteStudentById(id,"Bearer "+localStorage.getItem('token'));
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error('Error deleting student', error);
    }
  };

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <Link to="/students/add" className="add-student-button">Add Student</Link>
      <table className="student-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.contactNumber}</td>
              <td>{student.address}</td>
              <td>{student.pincode}</td>
              <td>
                <button class="edit-button"><Link to={`/students/edit/${student.id}`} className="edit-button">Edit</Link></button>
                <button onClick={() => handleDelete(student.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
