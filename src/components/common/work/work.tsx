import classNames from 'classnames/bind';
import NextImage from 'next/image';
import { Work as WorkInterface } from '@/interface';
import Marker from '@/components/ui-kit/marker/marker';
import Link from '@/components/ui-kit/link/link';
import styles from './work.module.scss';
import { configuration } from '@/configuration';

const cx = classNames.bind(styles);

const workPath = configuration.routes.work;

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
        <Link
          href={`${workPath}/${work.id}`}
          className={cx('work__title')}>
          {work.title}
        </Link>

        <div>
          <Marker>{work.year}</Marker>
          <span className={cx('work__tag')}>{work.tag}</span>
        </div>

        <div className={cx('work__text')}>{work.text}</div>
      </div>
    </div>
  );
}
