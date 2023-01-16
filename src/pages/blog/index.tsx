import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames/bind';
import styles from './blog.module.scss';

const cx = classNames.bind(styles);

export default function Blog(): JSX.Element {
  return <main className={cx('blog')}>Blog Page</main>;
}

export async function getStaticProps({
  locale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<unknown>> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
