import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames/bind';
import styles from './works.module.scss';
import Container from '@/components/common/container/container';
import { configuration } from '@/configuration';
import Work from '@/components/common/work/work';

const cx = classNames.bind(styles);

const works = configuration.works;

export default function Works(): JSX.Element {
  const { t } = useTranslation('works');

  return (
    <Container className={cx('works')}>
      <h1 className={cx('works__title')}>{t('TEXT_TITLE')}</h1>

      {works.length > 0 &&
        works.map((item) => <Work
          key={item.id}
          work={item} />)}
    </Container>
  );
}

export async function getStaticProps({
  locale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<unknown>> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'works']))
    }
  };
}
