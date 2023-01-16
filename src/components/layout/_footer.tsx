import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';
import Navigation from '@/components/common/navigation/navigation';
import styles from './layout.module.scss';
import { useEffect, useState } from 'react';
import Icon from '@/components/ui-kit/icon/icon';
import { IconVariant } from '@/enums';
import { NavigationItem } from '@/interface';

const cx = classNames.bind(styles);

export default function LayoutFooter(): JSX.Element {
  const { t } = useTranslation('common');
  const [routes, setRoutes] = useState<Array<NavigationItem>>([]);

  useEffect(() => {
    setRoutes([
      {
        id: 1,
        link: '#',
        node: <Icon variant={IconVariant.FACEBOOK} />
      },
      {
        id: 2,
        link: '#',
        node: <Icon variant={IconVariant.INSTAGRAM} />
      },
      {
        id: 3,
        link: '#',
        node: <Icon variant={IconVariant.TWITTER} />
      },
      {
        id: 4,
        link: '#',
        node: <Icon variant={IconVariant.LINKEDIN} />
      }
    ]);
  }, []);

  return (
    <footer className={cx('layout__footer')}>
      <Navigation
        className={cx('layout__footer-navigation')}
        routes={routes} />

      <div className={cx('layout__footer-subtitle')}>
        {t('FOOTER.TEXT_SUBTITLE')}
      </div>
    </footer>
  );
}
