import classNames from 'classnames/bind';
import NextImage from 'next/image';
import { Work as WorkInterface } from '@/interface';
import Marker from '@/components/ui-kit/marker/marker';
import styles from './work.module.scss';

const cx = classNames.bind(styles);

export default function Work({ work }: { work: WorkInterface }): JSX.Element {
  return (
    <div className={cx('work')}>
      <NextImage
        quality={100}
        className={cx('work__poster')}
        src={work.poster}
        alt={work.title}
      />

      <div>
        <div className={cx('work__title')}>{work.title}</div>

        <div>
          <Marker>{work.year}</Marker>
          <span className={cx('work__tag')}>{work.tag}</span>
        </div>

        <div className={cx('work__text')}>{work.text}</div>
      </div>
    </div>
  );
}
