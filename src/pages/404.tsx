import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '@/components/common/container/container';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames/bind';
import styles from './404.module.scss';

const cx = classNames.bind(styles);

export default function Custom404(): JSX.Element {
  const { t } = useTranslation('404');

  return (
    <Container className={cx('error')}>
      <h1 className={cx('error__title')}>{t('TEXT_TITLE')}</h1>
    </Container>
  );
}

export async function getStaticProps({
  locale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<unknown>> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', '404']))
    }
  };
}
