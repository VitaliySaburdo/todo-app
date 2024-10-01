import { useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
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
    <div className={`${style.wrapper} ${style[theme]}`}>
      <p className={style.txt}>items left {activeTaskCount}</p>
      <ul className={style.filterList}>
        <li>
          <button
            onClick={() => handleOnFilter('all')}
            className={`${style.filterBtn} ${style[theme]} ${
              active === 'all' ? style.active : ''
            }`}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => handleOnFilter('active')}
            className={`${style.filterBtn} ${style[theme]} ${
              active === 'active' ? style.active : ''
            }`}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => handleOnFilter('completed')}
            className={`${style.filterBtn} ${style[theme]} ${
              active === 'completed' ? style.active : ''
            }`}
          >
            Completed
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onClearCompleted('completed');
              handleOnFilter('all');
            }}
            className={`${style.filterBtn} ${style[theme]}`}
          >
            Clear Completed
          </button>
        </li>
      </ul>
    </div>
  );
};
