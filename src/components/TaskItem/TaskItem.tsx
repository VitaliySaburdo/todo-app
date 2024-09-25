import { useState } from 'react';
import Check from '../../assets/images/icon-check.svg?react';
import Cross from '../../assets/images/icon-cross.svg?react';
import style from './TaskItem.module.scss';

interface TaskItemProps {
  id: string;
  task: string;
  status: string;
  onDeleteBtn: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  id,
  task,
  status: initialStatus,
  onDeleteBtn,
}) => {
  const [status, setStatus] = useState(initialStatus);

  const handleClick = () => {
    setStatus((prevState: string) =>
      prevState === 'active' ? 'complete' : 'active'
    );
  };

  const handleOnDelete = () => {
    onDeleteBtn(id);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={
          status === 'active' ? style.btn : `${style.btn} ${style.active}`
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
