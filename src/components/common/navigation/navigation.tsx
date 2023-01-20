import Link from '@/components/ui-kit/link/link';
import { NavigationItem } from '@/interface';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from './navigation.module.scss';

const cx = classNames.bind(styles);

export default function Navigation({
  routes,
  className
}: {
  routes: Array<NavigationItem>;
  className?: string;
}): JSX.Element {
  const router = useRouter();

  return (
    <nav className={cx(['navigation', className])}>
      {routes.length > 0 &&
        routes.map((route) => (
          <Link
            className={cx({
              navigation__link_active: router.asPath === route.link
            })}
            key={route.id}
            href={route.link}
          >
            {route.node}
          </Link>
        ))}
    </nav>
  );
}
