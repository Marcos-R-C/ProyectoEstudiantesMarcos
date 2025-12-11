import { useState, useEffect } from 'react';
import { initialStudents } from '../data/students';

const initialData =
  JSON.parse(localStorage.getItem('students')) ??
  initialStudents.map((s) => {
    return { ...s, assistance: 'Present' };
  });

export const useStudents = () => {
  const [students, setStudents] = useState(initialData);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const changeAssistance = (newAssistance, student) => {
    setStudents(
      students.map((thisStudent) => {
        return student.id === thisStudent.id
          ? { ...student, assistance: newAssistance }
          : thisStudent;
      })
    );
  };

  const eliminarEstudiante = (student) => {
    setStudents(
      students.filter((thisStudent) => student.id !== thisStudent.id)
    );
  };

  return {
    eliminarEstudiante,
    changeAssistance,
    students,
  };
};
