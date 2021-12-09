import { memo } from 'react';
import { useQuery } from 'react-query';
import { Spinner, Notification, Link } from '@canonical/react-components';
import PostCard from 'components/PostCard';
import { getPosts } from 'services/postService';
import constants from 'utils/constants';
import texts from 'utils/texts';
import pageStyles from 'pages/pages.module.scss';
import styles from './home.module.scss';

/**
 * Finds author, topic and category details from embedded data in a post.
 *
 * @param {*} post Data from a single post.
 * @returns Author details, topic name and category name.
 */
const findEmbeddedDetails = post => {
  // eslint-disable-next-line no-underscore-dangle
  const embeddedData = post._embedded;

  const authorDetails = embeddedData.author
    ? embeddedData.author.find(author => author.id === post.author)
    : { name: 'anonymous', link: '' };

  const [categories, tags, topics] = embeddedData['wp:term'];

  const categoryId = post.categories.length && post.categories[0];
  const categoryDetails = categoryId && categories.find(cat => cat.id === categoryId);

  const topicId = post.topic.length && post.topic[0];
  let topicDetails;
  if (topicId) {
    topicDetails = topicId && topics.find(top => top.id === topicId);
  } else {
    // If topic data is missing, use a tag name instead.
    const tagId = post.tags.length && post.tags[0];
    topicDetails = tagId && tags.find(tag => tag.id === tagId);
  }

  return {
    authorDetails,
    category: categoryDetails ? categoryDetails.name : undefined,
    topic: topicDetails ? topicDetails.name : undefined,
  };
};

/**
 * Decides what content to render, based on provided request data.
 * Uses Spinner and Notification from Vanilla Framework.
 *
 * @param {*} isLoading Is the query still running/retrying?
 * @param {*} posts Posts data.
 * @param {*} error Error data.
 * @returns Node, based on which content should show.
 */
const renderContent = (isLoading, posts, error) => {
  if (isLoading) {
    return <Spinner text={texts.mainPage.loadingPosts} className={styles.spinner} />;
  }

  if (error) {
    return (
      <Notification severity="negative" title={texts.mainPage.error}>
        {texts.mainPage.errorFetchingPosts}
      </Notification>
    );
  }

  return posts.map(post => {
    const { authorDetails, category, topic } = findEmbeddedDetails(post);

    return (
      <PostCard
        key={post.id}
        topic={topic}
        title={post.title.rendered}
        postLink={post.link}
        imageSrc={post.featured_media}
        authorName={authorDetails.name}
        authorLink={authorDetails.link}
        date={post.date}
        category={category}
      />
    );
  });
};

/**
 * Home Page component.
 * Uses a react-query call to fetch Post data.
 */
const Home = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery('posts', getPosts, {
    refetchOnWindowFocus: false, // To avoid unnecessary requests.
  });

  return (
    <div className={pageStyles.container}>
      <h1>{texts.common.title}</h1>
      <h3 className={styles.subtitle}>
        {texts.common.by} <Link href={constants.links.githubProfile}>{texts.mainPage.sachie}</Link>
      </h3>
      <div className={styles.main}>{renderContent(isLoading, posts, error)}</div>
    </div>
  );
};

export default memo(Home);
