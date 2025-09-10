import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './ConsolLogs.styles';
import { useLogs, type LogEntry } from './LogContext';
import Icon from '../../components/Icon';
import { IconName } from '../../utils/icons';

const LOG_COLORS: Record<string, string> = {
  log: '#222',
  warn: '#b58900',
  error: '#dc322f',
  info: '#268bd2',
};

const ConsolLogs: React.FC = () => {
  const { logs, clearLogs } = useLogs();
  const [search, setSearch] = useState('');
  const filteredLogs = logs.filter((log: LogEntry) =>
    log.message.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.search}
          placeholder="Search logs..."
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity onPress={clearLogs}>
          <Icon name={IconName.Dustbin} size={25} color="#c00e0eff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.logs}>
        {filteredLogs.length === 0 ? (
          <Text style={styles.empty}>No logs found.</Text>
        ) : (
          filteredLogs.map((log: LogEntry, idx: number) => (
            <Text
              key={idx}
              style={[{ color: LOG_COLORS[log.type] }, styles.logLineSpacing]}
            >
              [{log.timestamp}] {log.type.toUpperCase()}: {log.message}
            </Text>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default ConsolLogs;
