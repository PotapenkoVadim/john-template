import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames/bind';
import styles from './blog.module.scss';
import Container from '@/components/common/container/container';
import Post from '@/components/common/post/post';
import { configuration } from '@/configuration';

const cx = classNames.bind(styles);

const posts = configuration.posts;

export default function Blog(): JSX.Element {
  const { t } = useTranslation('blog');

  return (
    <Container className={cx('blog')}>
      <h1 className={cx('blog__title')}>{t('TEXT_TITLE')}</h1>

      {posts.length > 0 &&
        posts.map((item) => (
          <Post
            key={item.id}
            post={item}
            className={cx('blog__post')} />
        ))}
    </Container>
  );
}

export async function getStaticProps({
  locale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<unknown>> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog']))
    }
  };
}
