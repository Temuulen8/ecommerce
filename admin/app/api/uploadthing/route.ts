import { createNextRouteHandler } from 'uploadthing/Next';

import { ourFileRouter } from './core';

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter
});
