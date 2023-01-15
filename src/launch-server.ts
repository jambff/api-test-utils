import getPort from 'get-port';
import { launchServer, JamBffServer } from '@jambff/api';

/**
 * Launch a real server for integration testing.
 */
export default async (options = {}): Promise<JamBffServer> =>
  launchServer({
    port: await getPort(),
    host: '127.0.0.1',
    throwOnInvalidOpenApiResponse: true,
    ...options,
  });
