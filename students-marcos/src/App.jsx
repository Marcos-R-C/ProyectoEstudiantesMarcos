import { Student } from './components/Student';
import { initialStudents } from './data/students';
import { Contador } from './components/Contador';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <main>
        <div>
          {<Header />}
          <main>
            <div>
              <section>{<Contador />}</section>
              <section>
                <div>
                  <label>
                    <div>
                      <span class="material-symbols-outlined">search</span>
                    </div>
                    <input placeholder="Search student name..." />
                  </label>
                </div>
              </section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
                {initialStudents.map((student) => {
                  return <Student key={student.id} student={student} />;
                })}
              </div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
};
