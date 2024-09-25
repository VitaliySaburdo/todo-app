import { nanoid } from 'nanoid';
import style from './AddTaskInput.module.scss';
import { useState } from 'react';
import Check from '../../assets/images/icon-check.svg?react';

interface Task {
  id: string;
  task: string;
  status: string;
}

interface AddTaskInputProps {
  addTask: (task: Task) => void;
}

export const AddTaskInput: React.FC<AddTaskInputProps> = ({ addTask }) => {
  const [active, setActive] = useState(false);
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
      task: name.value,
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
        <input className={style.input} name="task" type="text" />
        <button
          type="submit"
          className={active ? `${style.btn} ${style.active}` : style.btn}
        >
          <Check />
        </button>
      </form>
    </>
  );
};
