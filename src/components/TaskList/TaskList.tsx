import { useRef } from 'react';
import { useThemeStore } from '../../store/themeStore';
import { Task } from '../../types';
import { TaskItem } from '../TaskItem';
import style from './TaskList.module.scss';

interface TaskListProps {
  tasks: Task[];
  onDeleteBtn: (id: string) => void;
  changeStatus: (id: string, status: string) => void;
  changeTaskList: (tasks: Task[]) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDeleteBtn,
  changeStatus,
  changeTaskList,
}) => {
  const { theme } = useThemeStore();
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (position: number) => {
    dragItem.current = position;
  };

  const handleDragEnter = (position: number) => {
    dragOverItem.current = position;
  };

  const handleDragEnd = () => {
    const draggedIndex = dragItem.current!;
    const targetIndex = dragOverItem.current!;

    const updatedTasks = [...tasks];
    const draggedTask = updatedTasks.splice(draggedIndex, 1)[0];
    updatedTasks.splice(targetIndex, 0, draggedTask);

    dragItem.current = null;
    dragOverItem.current = null;
    changeTaskList(updatedTasks);
  };

  return (
    <>
      <ul className={style.list}>
        {tasks.map(({ id, task, status }, index) => (
          <li
            className={`${style.item} ${style[theme]}`}
            key={id}
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
            draggable
          >
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
