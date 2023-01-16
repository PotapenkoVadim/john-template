import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import HomePageIntroduce from '@/components/pages/home/introduce/introduce';

const cx = classNames.bind(styles);

export default function Home(): JSX.Element {
  return (
    <main className={cx('home')}>
      <HomePageIntroduce />
    </main>
  );
}

export async function getStaticProps({
  locale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<unknown>> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home']))
    }
  };
}
