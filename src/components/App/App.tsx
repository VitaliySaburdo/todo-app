import { useState } from 'react';
import { AddTaskInput } from '../AddTaskInput';
import { Container } from '../Container';
import { TaskList } from '../TaskList';
import { Task } from '../../types';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <main className={style.main}>
        <section>
          <Container>
            <h1 className={style.title}>TODO</h1>
            <AddTaskInput addTask={createTask} />
            <TaskList tasks={tasks} />
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
