import { useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import { NavBar } from '../NavBar';
import style from './FilterBar.module.scss';

interface FilterBarProps {
  onFilter: (status: string) => void;
  onClearCompleted: (status: string) => void;
  activeTaskCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  onFilter,
  onClearCompleted,
  activeTaskCount,
}) => {
  const [active, setActive] = useState('all');
  const { theme } = useThemeStore();

  const handleOnFilter = (status: string) => {
    onFilter(status);
    setActive(status);
  };

  return (
    <>
      <div className={`${style.wrapper} ${style[theme]}`}>
        <p className={style.txt}>items left {activeTaskCount}</p>
        <div className={style.block}>
          <NavBar active={active} handleOnFilter={handleOnFilter} />
        </div>
        <button
          onClick={() => {
            onClearCompleted('completed');
            handleOnFilter('all');
          }}
          className={`${style.filterBtn} ${style[theme]}`}
        >
          Clear Completed
        </button>
      </div>
    </>
  );
};
