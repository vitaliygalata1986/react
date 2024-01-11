import { FC } from 'react';
import './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

// типизация функционального компонента - альтернатива нижнего
// тоесть мы вернули функциональный компонент вот с такими пропсами: <ButtonProps> - используем дженерик <>
export const ButtonAlt: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  // FC - function component
  return (
    <button className={cn('button accent', className)} {...props}>
      {children}
    </button>
  );
};

function Button({ children, className, ...props }: ButtonProps) {
  // типизируем пропсы, используя ButtonProps

  return (
    <button className={cn('button accent', className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
