import type { Response } from 'node-fetch';

/**
 * Convert a node fetch response into the format required for jest-openapi.
 * @see https://github.com/facebook/jest/issues/2547
 */
export default (res: Response, method: string, body: Object) => {
  const obj = {
    req: {
      path: res.url,
      method,
    },
    status: res.status,
  };

  if (body) {
    Object.assign(obj, { body });
  }

  return obj;
};
