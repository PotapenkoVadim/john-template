import { Post as PostInterface } from '@/interface';
import classNames from 'classnames/bind';
import styles from './post.module.scss';

const cx = classNames.bind(styles);

export default function Post({
  post,
  className
}: {
  post: PostInterface;
  className?: string;
}): JSX.Element {
  return (
    <div className={cx(['post', className])}>
      <div className={cx('post__title')}>{post.title}</div>

      <span className={cx('post__data')}>{post.data}</span>
      <span className={cx('post__tags')}>{post.tags.join(', ')}</span>

      <div className={cx('post__text')}>{post.text}</div>
    </div>
  );
}
