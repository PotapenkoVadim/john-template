import { IconVariant, IconColor } from '@/enums';
import classNames from 'classnames/bind';
import styles from './icon.module.scss';

const cx = classNames.bind(styles);

export default function Icon({
  variant,
  color,
  className,
  onClick
}: {
  variant: IconVariant;
  color?: IconColor;
  className?: string;
  onClick?: () => void;
}): JSX.Element {
  return (
    <span
      onClick={onClick}
      className={cx([
        'icon',
        `icon__${variant}`,
        `icon_${color ?? IconColor.PRIMARY}`,
        className
      ])}
    />
  );
}
