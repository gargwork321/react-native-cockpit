import { View, Text, ScrollView } from 'react-native';
import useDeviceInfo from '../../hooks/useDeviceInfo';
import { styles } from './Overview.styles';

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
        </View>
      </ScrollView>
    </View>
  );
};

export default OverviewTab;
