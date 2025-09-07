import { useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const useDeviceInfo = () => {
  const [info, setInfo] = useState({
    platform: Platform.OS,
    osVersion: Platform.Version,
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
  });

  useEffect(() => {
    function fetchInfo() {
      Promise.all([
        DeviceInfo.getVersion(),
        DeviceInfo.getBuildNumber(),
        DeviceInfo.getDeviceName(),
        DeviceInfo.getSystemName(),
        DeviceInfo.getSystemVersion(),
        DeviceInfo.isEmulator(),
      ]).then(
        ([
          appVersion,
          buildNumber,
          deviceName,
          systemName,
          systemVersion,
          isEmulator,
        ]) => {
          setInfo((prev) => ({
            ...prev,
            appVersion,
            buildNumber,
            deviceName,
            systemName,
            systemVersion,
            brand: DeviceInfo.getBrand(),
            model: DeviceInfo.getModel(),
            deviceId: DeviceInfo.getDeviceId(),
            isEmulator,
            isTablet: DeviceInfo.isTablet(),
          }));
        }
      );
    }
    fetchInfo();
  }, []);

  return info;
};

export default useDeviceInfo;
