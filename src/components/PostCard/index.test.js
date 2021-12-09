import { render, screen } from '@testing-library/react';
import PostCard from './index';

const post = {
  id: 1,
  topic: 'Post Topic',
  title: 'Post Title',
  postLink: 'http://test-post.com',
  imageSrc: 'http://test-image.com/img.png',
  authorName: 'Test Author',
  authorLink: 'http://test-author.com',
  date: '2020-08-25T09:00:51',
  category: 'Post Category',
};

test('renders PostCart component with details', () => {
  render(
    <PostCard
      key={post.id}
      topic={post.topic}
      title={post.title}
      postLink={post.postLink}
      imageSrc={post.imageSrc}
      authorName={post.authorName}
      authorLink={post.authorLink}
      date={post.date}
      category={post.category}
    />,
  );

  expect(screen.getByText(post.topic)).toBeInTheDocument();

  expect(screen.getByRole('img', { name: 'Post thumbnail' })).toBeInTheDocument();
  expect(screen.getByText(post.title)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: `Post thumbnail ${post.title}` })).toHaveAttribute(
    'href',
    post.link,
  );

  expect(screen.getByText(post.authorName)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: post.authorName })).toHaveAttribute(
    'href',
    post.authorLink,
  );

  expect(screen.getByText('25 August 2020', { exact: false })).toBeInTheDocument();
  expect(screen.getByText(post.category)).toBeInTheDocument();
});
