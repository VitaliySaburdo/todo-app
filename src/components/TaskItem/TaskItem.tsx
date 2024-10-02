import { useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import Cross from '../../assets/images/icon-cross.svg?react';
import style from './TaskItem.module.scss';
import { Button } from '../Button';

interface TaskItemProps {
  id: string;
  task: string;
  status: string;
  onDeleteBtn: (id: string) => void;
  changeStatus: (id: string, status: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  id,
  task,
  status: initialStatus,
  onDeleteBtn,
  changeStatus,
}) => {
  const [status, setStatus] = useState(initialStatus);
  const { theme } = useThemeStore();

  const handleClick = () => {
    setStatus((prevState) => {
      const newStatus = prevState === 'active' ? 'completed' : 'active';
      changeStatus(id, newStatus);
      return newStatus;
    });
  };
  const handleOnDelete = () => {
    onDeleteBtn(id);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        isActive={status === 'active'}
        theme={theme}
      />
      <p
        className={
          status === 'active' ? style.task : `${style.task} ${style.complete}`
        }
      >
        {task}
      </p>
      <button className={style.btnCross} onClick={handleOnDelete}>
        <Cross />
      </button>
    </>
  );
};
