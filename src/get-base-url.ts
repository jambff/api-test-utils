import type { Server } from 'http';

/**
 * Get the base URL of a running server.
 */
export default (server: Server) => {
  const address = server.address();

  if (!address || typeof address === 'string') {
    return undefined;
  }

  return `http://${address.address}:${address.port}`;
};
