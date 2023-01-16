import { useTranslation } from 'next-i18next';
import classNames from 'classnames/bind';
import Navigation from '@/components/common/navigation/navigation';
import styles from './layout.module.scss';
import { configuration } from '@/configuration';
import Icon from '@/components/ui-kit/icon/icon';
import { IconVariant } from '@/enums';
import { useState } from 'react';

const cx = classNames.bind(styles);

const paths = configuration.routes;

export default function LayoutHeader(): JSX.Element {
  const { t } = useTranslation('common');

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  const closeModileMenu = (): void => {
    setIsOpenMobileMenu(false);
  };

  const routes = [
    {
      id: 1,
      link: paths.works,
      node: (
        <span onClick={closeModileMenu}>
          {t('HEADER.NAVIGATION.LINK_WORKS')}
        </span>
      )
    },
    {
      id: 2,
      link: paths.blog,
      node: (
        <span onClick={closeModileMenu}>
          {t('HEADER.NAVIGATION.LINK_BLOG')}
        </span>
      )
    },
    {
      id: 3,
      link: paths.contact,
      node: (
        <span onClick={closeModileMenu}>
          {t('HEADER.NAVIGATION.LINK_CONTACT')}
        </span>
      )
    }
  ];

  return (
    <header className={cx('layout__header')}>
      <Icon
        onClick={toggleMobileMenu}
        className={cx('layout__mobile-menu')}
        variant={isOpenMobileMenu ? IconVariant.CLOSE : IconVariant.MENU}
      />

      <Navigation
        className={cx({
          'layout__header-navigation': true,
          'layout__header-navigation_active': isOpenMobileMenu
        })}
        routes={routes}
      />
    </header>
  );
}
