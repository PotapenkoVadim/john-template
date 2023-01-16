import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames/bind';
import Navigation from '@/components/common/navigation/navigation';
import styles from './layout.module.scss';
import { configuration } from '@/configuration';
import { NavigationItem } from '@/interface';

const cx = classNames.bind(styles);

const paths = configuration.routes;

export default function LayoutHeader(): JSX.Element {
  const { t } = useTranslation('common');
  const [routes, setRoutes] = useState<Array<NavigationItem>>([]);

  useEffect(() => {
    setRoutes([
      {
        id: 1,
        link: paths.works,
        node: t('HEADER.NAVIGATION.LINK_WORKS')
      },
      {
        id: 2,
        link: paths.blog,
        node: t('HEADER.NAVIGATION.LINK_BLOG')
      },
      {
        id: 3,
        link: paths.contact,
        node: t('HEADER.NAVIGATION.LINK_CONTACT')
      }
    ]);
  }, [t]);

  return (
    <header className={cx('layout__header')}>
      <Navigation routes={routes} />
    </header>
  );
}
