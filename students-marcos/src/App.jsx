import { Student } from './components/Student';
import { initialStudents } from './data/students';
import { Contador } from './components/Contador';
import { Header } from './components/Header';
import { Buscador } from './components/Buscador';
import { useState } from 'react';

export const App = () => {
  const [students, setStudents] = useState(
    initialStudents.map((s) => {
      return { ...s, assistance: 'Present' };
    })
  );

  const changeAssistance = (newAssistance, student) => {
    setStudents(
      students.map((thisStudent) => {
        return student.id === thisStudent.id
          ? { ...student, assistance: newAssistance }
          : thisStudent;
      })
    );
  };

  return (
    <>
      {<Header />}
      <main className="bg-gray-100 h-screen">
        {<Contador students={students} />}
        {<Buscador />}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2">
          {students.map((student) => {
            return (
              <Student
                key={student.id}
                student={student}
                changeAssistance={changeAssistance}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
