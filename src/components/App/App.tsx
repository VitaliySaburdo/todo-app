import { useState, useMemo } from 'react';
import { useThemeStore } from '../../store/themeStore';
import { AddTaskInput } from '../AddTaskInput';
import { Container } from '../Container';
import { TaskList } from '../TaskList';
import { Task } from '../../types';
import { FilterBar } from '../FilterBar';
import Sun from '../../assets/images/icon-sun.svg?react';
import Moon from '../../assets/images/icon-moon.svg?react';
import bgLight from '../../assets/images/bg-desktop-light.jpg';
import bgDark from '../../assets/images/bg-desktop-dark.jpg';
import data from '../../data/data.json';
import style from './App.module.scss';
import { NavBar } from '../NavBar';

function App() {
  const [tasks, setTasks] = useState<Task[]>(data);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const { theme, changeTheme } = useThemeStore();

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
      <main
        className={style.main}
        style={{
          backgroundImage: `url(${theme === 'light' ? bgLight : bgDark})`,
        }}
      >
        <section>
          <Container>
            <div className={style.titleWrapper}>
              <h1 className={style.title}>TODO</h1>
              <button onClick={() => changeTheme()} className={style.themeBtn}>
                {theme === 'light' ? <Moon /> : <Sun />}
              </button>
            </div>
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
            <div className={`${style.item} ${style[theme]}`}>
              <NavBar active={filterStatus} handleOnFilter={handleOnFilter} />
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
