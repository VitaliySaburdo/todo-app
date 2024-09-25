import { Task } from '../../types';
import { TaskItem } from '../TaskItem';

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks.map(({ id }, task) => {
          return (
            <li key={id}>
              <TaskItem task={task} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
