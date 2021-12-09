import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { getPosts } from 'services/postService';
import messages from 'utils/texts';
import Home from './index';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      retry: false,
    },
  },
});

jest.mock('services/postService');

// Has post mocks with corrent, incorrect, and missing data.
const mockPosts = [
  {
    id: 1,
    author: 5,
    title: { rendered: 'Post Title 1' },
    categories: [3],
    date: '2020-08-25T09:00:51',
    featured_media: 'http://test-image.com/img.png',
    link: 'http://test-post.com',
    topic: [6],
    tags: [],
    _embedded: {
      author: [{ id: 5, name: 'Test Author', link: 'http://test-author.com' }],
      'wp:term': [[{ id: 3, name: 'Post Category' }], [], [{ id: 6, name: 'Post Topic' }], []],
    },
  },
  {
    id: 2,
    author: 5,
    title: { rendered: 'Post Title 2' },
    categories: [3],
    date: '2020-08-25T09:00:51',
    featured_media: 'http://test-image.com/img.png',
    link: 'http://test-post.com',
    topic: [],
    tags: [6],
    _embedded: {
      author: [{ id: 5, name: 'Test Author', link: 'http://test-author.com' }],
      'wp:term': [[{ id: 3, name: 'Post Category' }], [{ id: 6, name: 'Post Topic' }], [], []],
    },
  },
  {
    id: 3,
    author: 5,
    title: { rendered: 'Post Title 3' },
    categories: [3],
    date: '2020-08-25T09:00:51',
    featured_media: 'http://test-image.com/img.png',
    link: 'http://test-post.com',
    topic: [],
    tags: [6],
    _embedded: {
      'wp:term': [[{ id: 3, name: 'Post Category' }], [{ id: 6, name: 'Post Topic' }], [], []],
    },
  },
  {
    id: 4,
    author: 5,
    title: { rendered: 'Post Title 4' },
    categories: [3],
    date: '2020-08-25T09:00:51',
    featured_media: 'http://test-image.com/img.png',
    link: 'http://test-post.com',
    topic: [],
    tags: [6],
    _embedded: {
      'wp:term': [[], [], [], []],
    },
  },
];

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders home page and multiple posts', async () => {
  getPosts.mockImplementation(() => mockPosts);

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>,
  );

  expect(screen.getByText(messages.mainPage.loadingPosts)).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.queryByText(messages.mainPage.loadingPosts), {
    timeout: 10000,
  });
  expect(screen.getByText(messages.common.title)).toBeInTheDocument();
  expect(screen.getByText(messages.mainPage.sachie)).toBeInTheDocument();
  expect(screen.getByText(mockPosts[0].title.rendered)).toBeInTheDocument();
  expect(screen.getByText(mockPosts[1].title.rendered)).toBeInTheDocument();
});

test('renders home page with error message when request fails', async () => {
  getPosts.mockImplementation(() => {
    throw new Error('Mock Failure');
  });

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>,
  );

  await waitForElementToBeRemoved(screen.queryByText(messages.mainPage.loadingPosts), {
    timeout: 10000,
  });
  expect(screen.getByText(messages.mainPage.error)).toBeInTheDocument();
  expect(screen.getByText(messages.mainPage.errorFetchingPosts)).toBeInTheDocument();
});
