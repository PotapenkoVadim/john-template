import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

export default function Home(): JSX.Element {
  const { t } = useTranslation('home');

  return (
    <main className={cx('home')}>
      <h1>{t('TEXT_TITLE')}</h1>
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
