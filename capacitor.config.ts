import type { CapacitorConfig } from '@capacitor/cli';
import { config } from 'dotenv';

config();

const googleWebClientID = process.env.VITE_GOOGLE_MOBILE_AUTH_CLIENT_ID;
const googleIosClientID = process.env.VITE_GOOGLE_AUTH_IOS_APP_CLIENT_ID;

const viteConfig: CapacitorConfig = {
	appId: 'com.zaions.reflectify',
	appName: 'Reflectify',
	webDir: 'dist',
	backgroundColor: '#ffffff',
	plugins: {
		SplashScreen: {
			launchShowDuration: 3000,
		},
		PushNotifications: {
			presentationOptions: ['badge', 'sound', 'alert'],
		},
		CapacitorCookies: {
			enabled: true,
		},
		LocalNotifications: {
			smallIcon: 'ic_stat_icon_config_sample',
			iconColor: '#488AFF',
			sound: 'beep.wav',
		},
		GoogleAuth: {
			scopes: ['profile', 'email'],
			clientId: googleWebClientID,
			iosClientId: googleIosClientID,
			androidClientId: googleWebClientID,
			forceCodeForRefreshToken: true,
		},
	},
	ios: {
		preferredContentMode: 'mobile',
	},
	cordova: {},
};

export default viteConfig;
