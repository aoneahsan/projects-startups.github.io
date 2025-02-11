import { RouterProvider } from '@tanstack/react-router';
import { DevTools, FormatSimple, Tolgee, TolgeeProvider } from '@tolgee/react';
import { PrimeReactProvider } from 'primereact/api';
import { ToastContainer } from 'react-toastify';
import FirebaseHoc from './HOC/FirebaseHoc';
import OneSignalHOC from './HOC/OneSignalHoc';
import SentryHoc from './HOC/SentryHoc';
import appRouter from './routes';
import envKeys from './utils/envKeys';

const tolgee = Tolgee().use(DevTools()).use(FormatSimple()).init({
  language: envKeys.tolgee.baseLanguage,

  // for development
  apiUrl: envKeys.tolgee.apiUrl,
  apiKey: envKeys.tolgee.apiKey,

  // for production
  // staticData: {
  //   ...
  // }
});

const AppHocWrapper: React.FC = () => {
  return (
    <>
      <TolgeeProvider
        tolgee={tolgee}
        fallback='Loading Translations...' // loading fallback
      >
        <PrimeReactProvider>
          <RouterProvider router={appRouter} />
        </PrimeReactProvider>
      </TolgeeProvider>
      <SentryHoc />
      <OneSignalHOC />
      <ToastContainer />
      <FirebaseHoc />
    </>
  );
};

export default AppHocWrapper;
