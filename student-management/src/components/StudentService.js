import axios from 'axios';

export const getAllStudents = (AuthStr) => axios.get("http://localhost:8443/students",{ headers: { Authorization: AuthStr } });
export const deleteStudentById = (id,AuthStr) => axios.delete(`http://localhost:8443/students/${id}`,{ headers: { Authorization: AuthStr } });
export const getStudentById = (id,AuthStr) => axios.get(`http://localhost:8443/students/${id}`,{ headers: { Authorization: AuthStr } });
export const updateStudent = (id, student,AuthStr) => axios.put(`http://localhost:8443/students/${id}`, student,{ headers: { Authorization: AuthStr } });
