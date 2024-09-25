import { Task } from '../../types';
import { TaskItem } from '../TaskItem';
import style from './TaskList.module.scss';

interface TaskListProps {
  tasks: Task[];
  onDeleteBtn: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteBtn }) => {
  return (
    <>
      <ul className={style.list}>
        {tasks.map(({ id, task, status }) => (
          <li className={style.item} key={id}>
            <TaskItem
              task={task}
              status={status}
              id={id}
              onDeleteBtn={onDeleteBtn}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
