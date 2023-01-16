import { useTranslation } from 'next-i18next';
import classNames from 'classnames/bind';
import NextImage from 'next/image';
import Container from '@/components/common/container/container';
import styles from './introduce.module.scss';
import Button from '@/components/ui-kit/button/button';
import { configuration } from '@/configuration';
import { ButtonVariant } from '@/enums';

const johnImage = configuration.homePage.mainImage;

const cx = classNames.bind(styles);

export default function HomePageIntroduce(): JSX.Element {
  const { t } = useTranslation('home');

  return (
    <Container className={cx('introduce')}>
      <div className={cx('introduce__info')}>
        <h1 className={cx('introduce__title')}>{t('INTRODUCE.TEXT_TITLE')}</h1>

        <div className={cx('introduce__description')}>
          {t('INTRODUCE.TEXT_DESCRIPTION')}
        </div>

        <Button variant={ButtonVariant.SECONDARY}>
          {t('INTRODUCE.BUTTON_TEXT')}
        </Button>
      </div>

      <NextImage
        className={cx('introduce__image')}
        width={johnImage.width}
        height={johnImage.height}
        src={johnImage.image}
        quality={johnImage.quality}
        alt={t('INTRODUCE.IMAGE_ALT')}
      />
    </Container>
  );
}
