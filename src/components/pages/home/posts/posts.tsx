import { useTranslation } from 'next-i18next';
import Container from '@/components/common/container/container';
import classNames from 'classnames/bind';
import styles from './posts.module.scss';
import Link from '@/components/ui-kit/link/link';
import HomePagePostsItem from './_item';
import { configuration } from '@/configuration';

const cx = classNames.bind(styles);

const posts = configuration.homePage.posts;

export default function HomePagePosts(): JSX.Element {
  const { t } = useTranslation('home');

  return (
    <div className={cx('posts')}>
      <Container>
        <div className={cx('posts__header')}>
          <h3 className={cx('posts__title')}>{t('POSTS.TEXT_TITLE')}</h3>

          <Link
            className={cx('posts__link')}
            href='#'>
            {t('POSTS.LINK_VIEW_ALL')}
          </Link>
        </div>

        <div className={cx('posts__list')}>
          {posts.length > 0 &&
            posts.map((item) => (
              <HomePagePostsItem
                key={item.id}
                post={item} />
            ))}
        </div>
      </Container>
    </div>
  );
}
