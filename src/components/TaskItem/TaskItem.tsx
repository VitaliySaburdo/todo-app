import { useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import Check from '../../assets/images/icon-check.svg?react';
import Cross from '../../assets/images/icon-cross.svg?react';
import style from './TaskItem.module.scss';

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
      <button
        onClick={handleClick}
        className={
          status === 'active'
            ? `${style.btn} ${style.active}`
            : `${style.btn} ${style[theme]}`
        }
      >
        <Check />
      </button>
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
