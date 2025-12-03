import { Student } from './components/Student';
import { initialStudents } from './data/students';
import { Contador } from './components/Contador';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      {<Header />}
      <main className="bg-gray-100 h-screen">
        {<Contador />}
        <div>
          <label>
            <div>
              <span class="material-symbols-outlined">search</span>
            </div>
            <input placeholder="Search student name..." />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2">
          {initialStudents.map((student) => {
            return <Student key={student.id} student={student} />;
          })}
        </div>
      </main>
    </>
  );
};
