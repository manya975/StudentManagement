const handleDelete = (id) => {
    axios.delete("http://localhost:8443/students/"+id, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      console.log('Student deleted:', response.data);
      // Optionally refresh the list or redirect
      setStudents(students.filter(student => student.id !== id));
    })
    .catch(error => {
      console.error('Error deleting student:', error);
    });
  };
  