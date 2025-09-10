import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
    flex: 1,
    marginRight: 10,
  },
  clearBtn: {
    color: '#dc322f',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 8,
  },
  logs: {
    flex: 1,
  },
  empty: {
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  logLineSpacing: {
    marginBottom: 4,
  },
});

export default styles;
