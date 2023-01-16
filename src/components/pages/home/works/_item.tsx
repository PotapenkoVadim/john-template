import { Work } from '@/interface';
import NextImage from 'next/image';
import classNames from 'classnames/bind';
import styles from './works.module.scss';
import Marker from '@/components/ui-kit/marker/marker';

const cx = classNames.bind(styles);

export default function HomePageWorksItem({
  work
}: {
  work: Work;
}): JSX.Element {
  return (
    <div className={cx('works__item')}>
      <NextImage
        quality={100}
        className={cx('works__item-poster')}
        src={work.poster}
        alt={work.title}
      />

      <div>
        <div className={cx('works__item-title')}>{work.title}</div>

        <div>
          <Marker>{work.year}</Marker>
          <span className={cx('works__item-tag')}>{work.tag}</span>
        </div>

        <div className={cx('works__item-text')}>{work.text}</div>
      </div>
    </div>
  );
}
