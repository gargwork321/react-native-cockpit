import { Animated, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18 },
  fab: {
    position: 'absolute',
    left: 20,
    top: 100,
    backgroundColor: '#222',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  fabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export const getMovementStyle = (pan: Animated.ValueXY, dragging: boolean) => ({
  transform: pan.getTranslateTransform(),
  opacity: dragging ? 0.7 : 1,
});

export type Styles = typeof styles;
