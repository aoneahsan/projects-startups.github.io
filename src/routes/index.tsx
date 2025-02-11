import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTress';

const appRouter = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof appRouter;
  }
}

export default appRouter;
