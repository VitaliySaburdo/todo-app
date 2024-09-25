import { useState } from 'react';
import { AddTaskInput } from '../AddTaskInput';
import { Container } from '../Container';
import { TaskList } from '../TaskList';
import { Task } from '../../types';
import { FilterBar } from '../FilterBar';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
    setFilteredTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleOnDeleteBtn = (id: string) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const handleOnChangeStatus = (id: string, status: string) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const handleOnFilter = (status: string) => {
    if (status === 'all') {
      setFilteredTasks(tasks);
    } else {
      const newTasks = tasks.filter((task) => task.status === status);
      setFilteredTasks(newTasks);
    }
  };

  return (
    <>
      <main className={style.main}>
        <section>
          <Container>
            <h1 className={style.title}>TODO</h1>
            <AddTaskInput addTask={createTask} />
            <div className={style.box}>
              <TaskList
                tasks={filteredTasks}
                onDeleteBtn={handleOnDeleteBtn}
                changeStatus={handleOnChangeStatus}
              />
              <FilterBar onFilter={handleOnFilter} />
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
