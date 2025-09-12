import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from './AsyncStorageTab.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getAllAsyncStorageData = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const stores = await AsyncStorage.multiGet(keys);
  return stores.map(([key, value]) => ({ key, value }));
};

export const AsyncStorageTab: React.FC = () => {
  const [data, setData] = useState<{ key: string; value: string | null }[]>([
    { key: 'userToken', value: 'abc123' },
    { key: 'theme', value: 'dark' },
    { key: 'language', value: 'en' },
  ]);
  const [loading, setLoading] = useState(false);

  const loadAsyncStorage = async () => {
    setLoading(true);
    try {
      const stores = await getAllAsyncStorageData();
      setData(stores);
    } catch (e) {
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAsyncStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Refresh" disabled={loading} />
      <ScrollView style={styles.scroll}>
        {data.length === 0 && !loading ? (
          <Text style={styles.empty}>No data in AsyncStorage.</Text>
        ) : (
          data.map(({ key, value }) => (
            <View key={key} style={styles.item}>
              <Text style={styles.key}>{key}:</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};
