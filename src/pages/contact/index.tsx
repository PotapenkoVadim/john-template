import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';
import styles from './contact.module.scss';
import Container from '@/components/common/container/container';

const cx = classNames.bind(styles);

export default function Contact(): JSX.Element {
  const { t } = useTranslation('contact');

  return (
    <Container className={cx('contact')}>
      <h1>{t('TEXT_TITLE')}</h1>
    </Container>
  );
}

export async function getStaticProps({
  locale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<unknown>> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact']))
    }
  };
}
