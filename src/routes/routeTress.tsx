import assetsImages from '@/assets';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useMemo } from 'react';
import {
  addJournalEntryPageRoute,
  homePageRoute,
  loginPageRoute,
  notFoundPageRoute,
  registerPageRoute,
} from './appRoutes';

const AppRouteRouteLayout: React.FC = () => {
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url(${assetsImages.FormPageBG1})`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      minHeight: '100vh',
      minWidth: '100vw',
    };
  }, []);
  return (
    <div style={containerStyle}>
      <Outlet />
    </div>
  );
};

export const appRootRoute = createRootRoute({
  component: AppRouteRouteLayout,
});

export const routeTree = appRootRoute.addChildren([
  homePageRoute,
  addJournalEntryPageRoute,
  loginPageRoute,
  registerPageRoute,
  notFoundPageRoute,
]);
