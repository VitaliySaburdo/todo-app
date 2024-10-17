import { useThemeStore } from '../../store/themeStore';
import style from './NavBar.module.scss';

interface NavBarProps {
  handleOnFilter: (status: string) => void;
  active: string;
}

export const NavBar: React.FC<NavBarProps> = ({ active, handleOnFilter }) => {
  const { theme } = useThemeStore();

  return (
    <>
      {' '}
      <nav className={style.navBar}>
        <ul className={style.filterList}>
          <li>
            {' '}
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
        </ul>
      </nav>
    </>
  );
};
