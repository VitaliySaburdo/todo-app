import style from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  style: inlineStyle,
}) => {
  return (
    <div className={style.container} style={inlineStyle}>
      {children}
    </div>
  );
};
