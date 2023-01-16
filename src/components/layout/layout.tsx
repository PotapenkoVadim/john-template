import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import LayoutHeader from './_header';
import styles from './layout.module.scss';
import LayoutFooter from './_footer';

const cx = classNames.bind(styles);

export default function Layout({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className={cx('layout')}>
      <LayoutHeader />

      {children}

      <LayoutFooter />
    </div>
  );
}
