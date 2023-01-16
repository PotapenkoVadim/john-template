import { ButtonVariant } from '@/enums';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export default function Button({
  children,
  onClick,
  variant = ButtonVariant.PRIMARY
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={cx(['button', `button__${variant}`])}>
      {children}
    </button>
  );
}
