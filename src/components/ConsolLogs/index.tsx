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
        <Text style={styles.title}>Console Logs</Text>
        <TouchableOpacity onPress={clearLogs}>
          <Text style={styles.clearBtn}>Clear</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.search}
        placeholder="Search logs..."
        value={search}
        onChangeText={setSearch}
      />
      <ScrollView style={styles.logs}>
        {filteredLogs.length === 0 ? (
          <Text style={styles.empty}>No logs found.</Text>
        ) : (
          filteredLogs.map((log: LogEntry, idx: number) => (
            <Text
              key={idx}
              style={{ color: LOG_COLORS[log.type], marginBottom: 4 }}
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
