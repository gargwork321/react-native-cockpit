import { View, Text, ScrollView } from 'react-native';
import useDeviceInfo from '../../hooks/useDeviceInfo';
import { styles } from './Overview.styles';

const formatBytes = (bytes: number) => {
  if (bytes === -1 || bytes === undefined) return '-';
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const formatBattery = (level: number) => {
  if (level === -1 || level === undefined) return '-';
  return `${Math.round(level * 100)}%`;
};

const infoFields = [
  { label: 'App Version', key: 'appVersion' },
  { label: 'Build Number', key: 'buildNumber' },
  { label: 'Platform', key: 'platform' },
  { label: 'OS Version', key: 'osVersion' },
  { label: 'System Name', key: 'systemName' },
  { label: 'System Version', key: 'systemVersion' },
  { label: 'Brand', key: 'brand' },
  { label: 'Model', key: 'model' },
  { label: 'Device ID', key: 'deviceId' },
  { label: 'Device Name', key: 'deviceName' },
  { label: 'Locale', key: 'locale' },
  { label: 'Timezone', key: 'timezone' },
  { label: 'Is Emulator', key: 'isEmulator' },
  { label: 'Is Tablet', key: 'isTablet' },
];

const batteryAndStorageFields = [
  { label: 'Battery Level', key: 'batteryLevel', format: formatBattery },
  { label: 'Is Charging', key: 'isCharging' },
  {
    label: 'Total Storage',
    key: 'totalDiskCapacity',
    format: formatBytes,
  },
  {
    label: 'Free Storage',
    key: 'freeDiskStorage',
    format: formatBytes,
  },
];

const OverviewTab = () => {
  const deviceInfo = useDeviceInfo();

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>App & Device Information</Text>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Screen:</Text>
            <Text style={styles.value}>
              {deviceInfo.screenWidth} x {deviceInfo.screenHeight}
            </Text>
          </View>
          {infoFields.map(({ label, key }) => (
            <View style={styles.infoBlock} key={key}>
              <Text style={styles.label}>{label}:</Text>
              <Text style={styles.value}>
                {typeof (deviceInfo as any)[key] === 'boolean'
                  ? (deviceInfo as any)[key]
                    ? 'Yes'
                    : 'No'
                  : (deviceInfo as any)[key] || '-'}
              </Text>
            </View>
          ))}
          <Text style={styles.heading}>Battery & Storage</Text>
          {batteryAndStorageFields.map(({ label, key, format }) => (
            <View style={styles.infoBlock} key={key}>
              <Text style={styles.label}>{label}:</Text>
              <Text style={styles.value}>
                {format
                  ? format((deviceInfo as any)[key])
                  : typeof (deviceInfo as any)[key] === 'boolean'
                    ? (deviceInfo as any)[key]
                      ? 'Yes'
                      : 'No'
                    : (deviceInfo as any)[key] || '-'}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default OverviewTab;
