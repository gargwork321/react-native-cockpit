import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './ControlPanel.styles';
import OverviewTab from '../OverviewTab';
import ConsolLogs from '../ConsolLogs';

const TAB_LABELS = ['Overview', 'Logs', 'Flags', 'State', 'Tools'];

export const ControlPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.root}>
      {/* Tab Menu */}
      <View style={styles.tabMenu}>
        {TAB_LABELS.map((label, idx) => (
          <TouchableOpacity
            key={label}
            style={[
              styles.tabButton,
              activeTab === idx
                ? styles.tabButtonActive
                : styles.tabButtonInactive,
            ]}
            onPress={() => setActiveTab(idx)}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === idx
                  ? styles.tabButtonTextActive
                  : styles.tabButtonTextInactive,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Tab Content */}
      <ScrollView
        style={styles.tabContent}
        contentContainerStyle={styles.tabContentContainer}
      >
        {activeTab === 0 && <OverviewTab />}
        {activeTab === 1 && <ConsolLogs />}
        {activeTab === 2 && <Text>Tab 3 Content</Text>}
      </ScrollView>
    </View>
  );
};

export default ControlPanel;
