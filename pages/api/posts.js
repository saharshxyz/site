import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://shuy.ghost.io',
  key: '4b1a5b85b966c4f3072ca8b307', // This shouldn't be publicly exposed, but it's not a big deal since it will not work soon enough, and even now, it does not provide access to much.
  version: 'v3',
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags',
      limit: 'all',
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
}

export default getPosts();
