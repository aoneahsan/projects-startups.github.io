import { useNavigate, useParams, useSearch } from '@tanstack/router';

export const useZRoute = () => {
  const navigate = useNavigate();
  const params = useParams();
  const search = useSearch();

  return {
    navigate,
    params,
    search,
    goTo: (path: string) => navigate({ to: path }),
    goBack: () => navigate({ to: '..' }),
  };
};
