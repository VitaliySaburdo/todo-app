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
  const handleOnFilter = (status: string) => {
    onFilter(status);
  };
  return (
    <div className={style.item}>
      <p className={style.txt}>items left {activeTaskCount}</p>
      <ul className={style.filterList}>
        <li>
          <button
            onClick={() => handleOnFilter('all')}
            className={style.filterBtn}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => handleOnFilter('active')}
            className={style.filterBtn}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => handleOnFilter('completed')}
            className={style.filterBtn}
          >
            Completed
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onClearCompleted('completed');
            }}
            className={style.filterBtn}
          >
            Clear Completed
          </button>
        </li>
      </ul>
    </div>
  );
};
