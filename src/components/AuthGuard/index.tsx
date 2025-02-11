import { getAuthInstance } from '@/firebaseInstance/auth';
import { useZNavigate } from '@/hooks/tanstack/router';
import { appRoutes } from '@/utils/constants/route';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

interface AuthGuardProps {
  isAuthenticatedRoute?: boolean;
  isUnAuthenticatedRoute?: boolean;
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({
  isAuthenticatedRoute,
  isUnAuthenticatedRoute,
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useZNavigate();
  const firebaseAuth = getAuthInstance();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [firebaseAuth]);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated && isUnAuthenticatedRoute) {
        navigate(appRoutes.home);
      } else if (!isAuthenticated && isAuthenticatedRoute) {
        navigate(appRoutes.login);
      }
    }
  }, [
    isLoading,
    isAuthenticated,
    isAuthenticatedRoute,
    isUnAuthenticatedRoute,
    navigate,
  ]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthGuard;
