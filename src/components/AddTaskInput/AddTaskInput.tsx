import { useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import { nanoid } from 'nanoid';
import { Task } from '../../types';
import { Button } from '../Button';
import style from './AddTaskInput.module.scss';

interface AddTaskInputProps {
  addTask: (task: Task) => void;
}

export const AddTaskInput: React.FC<AddTaskInputProps> = ({ addTask }) => {
  const [active, setActive] = useState(false);
  const { theme } = useThemeStore();

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem('task') as HTMLInputElement;
    if (name.value === '') {
      alert('Enter the task');
      return;
    }
    const task = {
      id: nanoid(6),
      task: name.value.trim(),
      status: 'active',
    };
    addTask(task);
    setActive(true);
    form.reset();
    setTimeout(() => {
      setActive(false);
    }, 400);
  };

  return (
    <>
      <form onSubmit={createTodo} className={style.inputShell}>
        <label htmlFor="task"></label>
        <input
          className={`${style.input} ${style[theme]}`}
          name="task"
          type="text"
          placeholder={
            active ? 'Yore task is confirmed' : 'Please enter your task'
          }
        />
        <Button isActive={active} theme={theme} />
      </form>
    </>
  );
};
