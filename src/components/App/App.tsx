import { useState } from 'react';
import { AddTaskInput } from '../AddTaskInput';
import { Container } from '../Container';
import style from './App.module.scss';

interface Task {
  id: string;
  task: string;
  status: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
  };
  console.log(tasks);
  return (
    <>
      <main className={style.main}>
        <section>
          <Container>
            <h1 className={style.title}>TODO</h1>
            <AddTaskInput addTask={createTask} />
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
