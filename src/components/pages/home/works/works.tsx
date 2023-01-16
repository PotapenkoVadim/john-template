import Container from '@/components/common/container/container';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames/bind';
import styles from './works.module.scss';
import HomePageWorksItem from './_item';
import { configuration } from '@/configuration';

const cx = classNames.bind(styles);

const works = configuration.homePage.works;

export default function HomePageWorks(): JSX.Element {
  const { t } = useTranslation('home');

  return (
    <Container className={cx('works')}>
      <div className={cx('works__title')}>{t('WORKS.TEXT_TITLE')}</div>

      {works.length > 0 &&
        works.map((item) => <HomePageWorksItem
          key={item.id}
          work={item} />)}
    </Container>
  );
}
