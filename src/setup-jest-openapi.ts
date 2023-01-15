import { Server } from 'http';
import jestOpenAPI from 'jest-openapi';
import loadApiDocs from './load-api-docs';

/**
 * Load the OpenAPI docs from the given server.
 */
export default async (server: Server) => {
  const apiDocs = await loadApiDocs(server);

  jestOpenAPI(apiDocs);
};
