// Service functions related to Posts.

import constants from 'utils/constants';

/**
 * Get posts function.
 *
 * @returns Parsed data or Error.
 */
export const getPosts = async () => {
  const response = await fetch(constants.endpoints.posts);

  if (!response.ok) {
    throw new Error('Network error');
  }
  return response.json();
};

/**
 * Save posts function (not implemented).
 */
export const savePosts = async () => {
  throw new Error('Not implemented');
};
