import Link from '@/components/ui-kit/link/link';
import { NavigationItem } from '@/interface';
import classNames from 'classnames/bind';
import styles from './navigation.module.scss';

const cx = classNames.bind(styles);

export default function Navigation({
  routes,
  className
}: {
  routes: Array<NavigationItem>;
  className?: string;
}): JSX.Element {
  return (
    <nav className={cx(['navigation', className])}>
      {routes.length > 0 &&
        routes.map((route) => (
          <Link
            key={route.id}
            href={route.link}>
            {route.node}
          </Link>
        ))}
    </nav>
  );
}
