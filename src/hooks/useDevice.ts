import { PermissionsAndroid, Platform } from 'react-native';
import { useMemo } from 'react';

export const useDevice = () => {
  const isAndroid = useMemo(() => Platform.OS === 'android', []);
  const isIos = useMemo(() => Platform.OS === 'ios', []);

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  return {
    hasAndroidPermission,
    currentPlatform: Platform,
    isAndroid,
    isIos,
  };
};
