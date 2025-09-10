import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface DeviceInfo {
  platform: string;
  osVersion: string;
  appVersion: string;
  buildNumber: string;
  deviceName: string;
  systemName: string;
  systemVersion: string;
  brand: string;
  model: string;
  deviceId: string;
  locale: string;
  timezone: string;
  isEmulator: boolean;
  isTablet: boolean;
  batteryLevel: number;
  isCharging: boolean;
  totalDiskCapacity: number;
  freeDiskStorage: number;
}
export interface Spec extends TurboModule {
  getDeviceInfo(): Promise<DeviceInfo>;
  multiply(a: number, b: number): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Cockpit');
