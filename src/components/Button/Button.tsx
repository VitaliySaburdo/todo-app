import style from './Button.module.scss';
import Check from '../../assets/images/icon-check.svg?react';

interface ButtonProps {
  onClick?: () => void;
  isActive: boolean;
  theme: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  isActive = false,
  theme,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${style.btn} ${isActive ? style.active : ''} ${
        theme ? style[theme] : ''
      }`}
    >
      <Check />
    </button>
  );
};
