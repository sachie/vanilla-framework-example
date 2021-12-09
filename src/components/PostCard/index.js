import { memo } from 'react';
import { Card, Link } from '@canonical/react-components';
import PropTypes from 'prop-types';
import texts from 'utils/texts';
import styles from './postCard.module.scss';

/**
 * PostCard component.
 * Uses Card and Link from Vanilla Framework, with custom styling.
 */
const PostCard = ({ topic, title, postLink, imageSrc, authorName, authorLink, date, category }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card title={topic} className={styles.card}>
      <hr />
      <div className={styles.content}>
        <Link href={postLink}>
          <img src={imageSrc} alt="Post thumbnail" />
          <h4 className={styles.linkText}>{title}</h4>
        </Link>
        <div className={styles.info}>
          {texts.common.by} <Link href={authorLink}>{authorName}</Link> {texts.card.on}{' '}
          {formattedDate}
        </div>
      </div>
      <hr />
      <div className={styles.footer}>{category}</div>
    </Card>
  );
};

PostCard.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postLink: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default memo(PostCard);
