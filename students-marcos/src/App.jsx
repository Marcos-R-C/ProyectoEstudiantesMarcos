import { Student } from './components/Student';
import { Contador } from './components/Contador';
import { Header } from './components/Header';
import { Buscador } from './components/Buscador';
import { useStudents } from './hooks/useStudents';

export const App = () => {
  const { changeAssistance, eliminarEstudiante, students } = useStudents();

  return (
    <>
      {<Header />}
      <main className="bg-gray-100 h-screen">
        {<Contador students={students} />}
        {<Buscador />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2">
          {students.map((student) => {
            return (
              <Student
                key={student.id}
                student={student}
                changeAssistance={changeAssistance}
                eliminarEstudiante={eliminarEstudiante}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
