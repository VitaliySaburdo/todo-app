import { useState, useMemo } from 'react';
import { AddTaskInput } from '../AddTaskInput';
import { Container } from '../Container';
import { TaskList } from '../TaskList';
import { Task } from '../../types';
import { FilterBar } from '../FilterBar';
import data from '../../data/data.json';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<Task[]>(data);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const activeTaskCount = useMemo(
    () => tasks.filter((task) => task.status === 'active').length,
    [tasks]
  );

  const filteredTasks = useMemo(() => {
    if (filterStatus === 'all') {
      return tasks;
    }
    return tasks.filter((task) => task.status === filterStatus);
  }, [tasks, filterStatus]);

  const createTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleOnDeleteBtn = (id: string) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const handleOnChangeStatus = (id: string, status: string) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(newTasks);
  };

  const handleOnFilter = (status: string) => {
    setFilterStatus(status);
  };

  const handleOnClearCompleted = () => {
    const newTasks = tasks.filter((task) => task.status !== 'completed');
    setTasks(newTasks);
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
              <FilterBar
                onFilter={handleOnFilter}
                onClearCompleted={handleOnClearCompleted}
                activeTaskCount={activeTaskCount}
              />
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
