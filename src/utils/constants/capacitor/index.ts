import { Capacitor } from '@capacitor/core';

export const isHybrid = Capacitor.getPlatform() !== 'web';
export const isWeb = Capacitor.getPlatform() === 'web';
export const isAndroid = Capacitor.getPlatform() === 'android';
export const isIOS = Capacitor.getPlatform() === 'ios';
