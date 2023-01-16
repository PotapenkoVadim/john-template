import classNames from 'classnames/bind';
import RouterLink from 'next/link';
import { ReactNode } from 'react';
import styles from './link.module.scss';

const cx = classNames.bind(styles);

export default function Link({
  children,
  href,
  className
}: {
  children: ReactNode;
  href: string;
  className?: string;
}): JSX.Element {
  return (
    <RouterLink
      className={cx(['link', className])}
      href={href}>
      {children}
    </RouterLink>
  );
}
