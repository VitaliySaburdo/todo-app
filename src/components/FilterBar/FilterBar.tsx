import style from './FilterBar.module.scss';

interface FilterBarProps {
  onFilter: (status: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onFilter }) => {
  const handleOnFilter = (status: string) => {
    onFilter(status);
  };
  return (
    <div className={style.item}>
      <p className={style.txt}>items left</p>
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
          <button className={style.filterBtn}>Clear Completed</button>
        </li>
      </ul>
    </div>
  );
};
