import Container from '@/components/common/container/container';
import { useTranslation } from 'next-i18next';
import { configuration } from '@/configuration';
import classNames from 'classnames/bind';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult
} from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Marker from '@/components/ui-kit/marker/marker';
import { MarkerVariant } from '@/enums';
import NextImage from 'next/image';
import styles from './work.module.scss';

import mockImage1 from '../../../public/images/mock-1.png';
import mockImage2 from '../../../public/images/mock-2.png';
import mockImage3 from '../../../public/images/mock-3.png';

const cx = classNames.bind(styles);

const works = configuration.works;
const workPath = configuration.routes.work;

export default function Work(): JSX.Element {
  const { t } = useTranslation('work');

  const router = useRouter();

  return (
    <Container className={cx('work')}>
      <h1 className={cx('work__title')}>
        {t('TEXT_TITLE')} (WorkID: {router.query.id})
      </h1>

      <div className={cx('work__meta')}>
        <Marker variant={MarkerVariant.SECONDARY}>2020</Marker>
        <span className={cx('work__tags')}>{t('TEXT_TAGS')}</span>
      </div>

      <div>
        <p>{t('TEXT_MOCK')}</p>

        <NextImage
          className={cx('work__image')}
          quality={100}
          src={mockImage1}
          alt={t('TEXT_IMAGE_ALT')}
        />

        <h2 className={cx('work__header')}>{t('TEXT_HEADER_1')}</h2>
        <h3 className={cx('work__header')}>{t('TEXT_HEADER_2')}</h3>
        <p>{t('TEXT_MOCK')}</p>

        <NextImage
          className={cx('work__image')}
          quality={100}
          src={mockImage2}
          alt={t('TEXT_IMAGE_ALT')}
        />

        <NextImage
          className={cx('work__image')}
          quality={100}
          src={mockImage3}
          alt={t('TEXT_IMAGE_ALT')}
        />
      </div>
    </Container>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = works.map((item) => `${workPath}/${item.id}`);

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({
  locale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<unknown>> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'work']))
    }
  };
}
