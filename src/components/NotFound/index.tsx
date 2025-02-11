import { useZNavigate } from '@/hooks/tanstack/router';
import { appRoutes } from '@/utils/constants/route';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import React from 'react';

const NotFound: React.FC = () => {
  const zNavigate = useZNavigate();

  return (
    <Card className='p-shadow-3'>
      <h1 className='text-center'>404</h1>
      <h2 className='text-center'>Page Not Found</h2>
      <p className='text-center'>
        Sorry, the page you are looking for does not exist.
      </p>
      <div className='text-center'>
        <Button
          label='Go to Home'
          icon='pi pi-home'
          onClick={() => {
            zNavigate(appRoutes.home);
          }}
        />
      </div>
    </Card>
  );
};

export default NotFound;
