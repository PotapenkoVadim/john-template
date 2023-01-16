import { MarkerVariant } from '@/enums';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './marker.module.scss';

const cx = classNames.bind(styles);

export default function Marker({
  children,
  className,
  variant = MarkerVariant.PRIMARY
}: {
  children: ReactNode;
  className?: string;
  variant?: MarkerVariant;
}): JSX.Element {
  return (
    <span className={cx(['marker', `marker__${variant}`, className])}>
      {children}
    </span>
  );
}
