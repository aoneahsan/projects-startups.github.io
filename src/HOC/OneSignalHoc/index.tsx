import { isHybrid } from '@/utils/constants/capacitor';
import envKeys from '@/utils/envKeys';
import OneSignalMobile from 'onesignal-cordova-plugin';
import { useEffect } from 'react';
import OneSignalWeb from 'react-onesignal';

let _isInitialized = false;

const OneSignalHOC: React.FC = () => {
  useEffect(() => {
    (async () => {
      if (_isInitialized) return;

      _isInitialized = true;

      if (isHybrid) {
        OneSignalMobile.initialize(envKeys.oneSignal.appId);

        await OneSignalMobile.Notifications.requestPermission(true);
        await OneSignalMobile.Notifications.permissionNative();
        await OneSignalMobile.Notifications.getPermissionAsync();
      } else {
        OneSignalWeb.init({
          appId: envKeys.oneSignal.appId,

          allowLocalhostAsSecureOrigin: true,
          autoRegister: true,
          autoResubscribe: true,
          notifyButton: {
            enabled: true,
          },
          path: '/',
          serviceWorkerPath: 'onesignal-push/OneSignalSDKWorker.js',
          serviceWorkerParam: {
            scope: '/onesignal-push/',
          }, // Changed scope
          // Enable for debugging
          enableLogs: true,
        });
      }
    })();
  }, [isHybrid]);

  return <></>;
};

export default OneSignalHOC;
