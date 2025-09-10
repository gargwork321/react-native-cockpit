import { useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';
import Cockpit, { type DeviceInfo } from '../NativeCockpit';

type DeviceInfoState = DeviceInfo & {
  screenWidth: number;
  screenHeight: number;
};

const useDeviceInfo = () => {
  const [info, setInfo] = useState<DeviceInfoState>({
    platform: Platform.OS,
    osVersion: String(Platform.Version),
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    appVersion: '',
    buildNumber: '',
    deviceName: '',
    systemName: '',
    systemVersion: '',
    brand: '',
    model: '',
    deviceId: '',
    locale: '',
    timezone: '',
    isEmulator: false,
    isTablet: false,
    batteryLevel: -1,
    isCharging: false,
    totalDiskCapacity: -1,
    freeDiskStorage: -1,
  });

  useEffect(() => {
    async function fetchInfo() {
      const deviceInfo = await Cockpit.getDeviceInfo();
      setInfo((prev) => ({
        ...prev,
        ...deviceInfo,
      }));
    }
    fetchInfo();
  }, []);

  return info;
};

export default useDeviceInfo;
