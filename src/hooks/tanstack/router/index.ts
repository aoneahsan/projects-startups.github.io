import { useNavigate } from '@tanstack/react-router';

export const useZNavigate = () => {
  const navigate = useNavigate();

  return (path: string) => {
    navigate({
      from: '/',
      to: path,
    });
  };
};
