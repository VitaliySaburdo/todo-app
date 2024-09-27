import { useThemeStore } from '../../store/themeStore';
import { Task } from '../../types';
import { TaskItem } from '../TaskItem';
import style from './TaskList.module.scss';

interface TaskListProps {
  tasks: Task[];
  onDeleteBtn: (id: string) => void;
  changeStatus: (id: string, status: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDeleteBtn,
  changeStatus,
}) => {
  const { theme } = useThemeStore();

  return (
    <>
      <ul className={style.list}>
        {tasks.map(({ id, task, status }) => (
          <li className={`${style.item} ${style[theme]}`} key={id}>
            <TaskItem
              task={task}
              status={status}
              id={id}
              onDeleteBtn={onDeleteBtn}
              changeStatus={changeStatus}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
