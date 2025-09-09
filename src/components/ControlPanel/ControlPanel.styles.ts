import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    height: '78%',
  },
  tabMenu: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  tabButtonActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#222',
    backgroundColor: '#f7f7f7',
  },
  tabButtonInactive: {
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    backgroundColor: '#fff',
  },
  tabButtonText: {
    color: '#222',
  },
  tabButtonTextActive: {
    fontWeight: 'bold',
  },
  tabButtonTextInactive: {
    fontWeight: 'normal',
  },
  tabContent: {
    flex: 1,
  },
  tabContentContainer: {
    flexGrow: 1,
  },
});
