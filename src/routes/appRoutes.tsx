import AuthGuard from '@/components/AuthGuard';
import NotFound from '@/components/NotFound';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import Home from '@/pages/Home';
import JournalForm from '@/pages/JournalForm';
import { appRoutes } from '@/utils/constants/route';
import { createRoute } from '@tanstack/react-router';
import { appRootRoute } from './routeTress';

export const homePageRoute = createRoute({
  getParentRoute: () => appRootRoute,
  component: () => {
    return (
      <AuthGuard isAuthenticatedRoute>
        <Home />
      </AuthGuard>
    );
  },
  notFoundComponent: () => <NotFound />,
  path: appRoutes.home,
});

export const addJournalEntryPageRoute = createRoute({
  getParentRoute: () => appRootRoute,
  component: () => {
    return (
      <AuthGuard isAuthenticatedRoute>
        <JournalForm />
      </AuthGuard>
    );
  },
  notFoundComponent: () => <NotFound />,
  path: appRoutes.addJournalEntry,
});

export const loginPageRoute = createRoute({
  getParentRoute: () => appRootRoute,
  component: () => {
    return (
      <AuthGuard isUnAuthenticatedRoute>
        <Login />
      </AuthGuard>
    );
  },
  notFoundComponent: () => <NotFound />,
  path: appRoutes.login,
});

export const registerPageRoute = createRoute({
  getParentRoute: () => appRootRoute,
  component: () => {
    return (
      <AuthGuard isUnAuthenticatedRoute>
        <Register />
      </AuthGuard>
    );
  },
  notFoundComponent: () => <NotFound />,
  path: appRoutes.register,
});

export const notFoundPageRoute = createRoute({
  getParentRoute: () => appRootRoute,
  component: () => <NotFound />,
  path: '*',
});
