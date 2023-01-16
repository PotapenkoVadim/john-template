import { Post } from '@/interface';
import classNames from 'classnames/bind';
import styles from './posts.module.scss';

const cx = classNames.bind(styles);

export default function HomePagePostsItem({
  post
}: {
  post: Post;
}): JSX.Element {
  return (
    <div className={cx('posts__item')}>
      <div className={cx('posts__item-title')}>{post.title}</div>

      <span className={cx('posts__item-data')}>{post.data}</span>
      <span className={cx('posts__item-tags')}>{post.tags.join(', ')}</span>

      <div className={cx('posts__item-text')}>{post.text}</div>
    </div>
  );
}
