import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffffff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginRight: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearBtn: {
    color: '#dc322f',
    fontWeight: 'bold',
    fontSize: 14,
  },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 6,
    marginBottom: 8,
  },
  logs: {
    flex: 1,
  },
  empty: {
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
