// src/index.tsx
import { useRef, useState } from 'react';
import {
  Text,
  PanResponder,
  Animated,
  Modal,
  Platform,
  Dimensions,
} from 'react-native';
import { styles } from './DraggableFAB.styles';
import { FAB_SIZE } from '../../constants';
import { getMovementStyle } from './DraggableFAB.styles';

export const DraggableFAB = () => {
  const pan = useRef(new Animated.ValueXY({ x: 20, y: 100 })).current;
  const [dragging, setDragging] = useState(false);
  const [visible] = useState(true);

  const fabSize = FAB_SIZE;
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  let lastOffset = useRef({ x: 20, y: 100 }).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setDragging(true);
        pan.setOffset(lastOffset);
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (_, gestureState) => {
        let newX = gestureState.dx + lastOffset.x;
        let newY = gestureState.dy + lastOffset.y;
        // Clamp to screen bounds
        newX = Math.max(0, Math.min(newX, screenWidth - fabSize));
        newY = Math.max(0, Math.min(newY, screenHeight - fabSize));
        pan.x.setValue(newX - lastOffset.x);
        pan.y.setValue(newY - lastOffset.y);
      },
      onPanResponderRelease: (_, gestureState) => {
        setDragging(false);
        let newX = gestureState.dx + lastOffset.x;
        let newY = gestureState.dy + lastOffset.y;
        newX = Math.max(0, Math.min(newX, screenWidth - fabSize));
        newY = Math.max(0, Math.min(newY, screenHeight - fabSize));
        lastOffset = { x: newX, y: newY };
        pan.flattenOffset();
        pan.setValue({ x: 0, y: 0 });
        pan.setOffset(lastOffset);
      },
      onPanResponderTerminate: () => {
        setDragging(false);
        pan.flattenOffset();
      },
    })
  ).current;

  // Used Modal to float above all other content
  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      hardwareAccelerated
      statusBarTranslucent={Platform.OS === 'android'}
    >
      <Animated.View
        style={[styles.fab, getMovementStyle(pan, dragging)]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.fabText}>Boss</Text>
      </Animated.View>
    </Modal>
  );
};

export default DraggableFAB;
