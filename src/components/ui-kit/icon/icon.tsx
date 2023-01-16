import { IconVariant, IconColor } from '@/enums';
import classNames from 'classnames/bind';
import styles from './icon.module.scss';

const cx = classNames.bind(styles);

export default function Link({
  variant,
  color,
  className
}: {
  variant: IconVariant;
  color?: IconColor;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={cx(
        ['icon', `icon__${variant}`],
        `icon_${color ?? IconColor.PRIMARY}`,
        className
      )}
    />
  );
}
