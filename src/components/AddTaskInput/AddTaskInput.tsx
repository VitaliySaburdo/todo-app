import { nanoid } from 'nanoid';
import style from './AddTaskInput.module.scss';

interface Task {
  id: string;
  task: string;
  status: string;
}

interface AddTaskInputProps {
  addTask: (task: Task) => void;
}

export const AddTaskInput: React.FC<AddTaskInputProps> = ({ addTask }) => {
  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem('task') as HTMLInputElement;
    const task = {
      id: nanoid(6),
      task: name.value,
      status: 'active',
    };
    addTask(task);
    form.reset();
  };

  return (
    <>
      <form onSubmit={createTodo} className={style.inputShell}>
        <label htmlFor="task"></label>
        <input className={style.input} name="task" type="text" />
        <button type="submit" className={style.btn}></button>
      </form>
    </>
  );
};
