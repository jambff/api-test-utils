import { Server } from 'http';
import fetch from 'node-fetch';
import { OpenAPIV3 } from 'openapi-types';
import getBaseUrl from './get-base-url';

/**
 * Load the OpenAPI docs from the given server.
 */
export default async (server: Server): Promise<OpenAPIV3.Document> => {
  const res = await fetch(`${getBaseUrl(server)}/docs.json`);

  return res.json();
};
