import { useRef, useState } from 'react';
import {
  Text,
  Modal,
  Platform,
  TouchableOpacity,
  Animated,
  Dimensions,
  View,
} from 'react-native';
import { styles } from './DraggableFAB.styles';
import { openPanelHelper, closePanelHelper } from './DraggableFAB.utils';
import CockpitPanel from '../ControlPanel';

export const DraggableFAB = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [showFab, setShowFab] = useState(true);
  const fabSlideAnim = useRef(new Animated.Value(0)).current; // 0 = visible, 1 = offscreen
  const panelSlideAnim = useRef(
    new Animated.Value(Dimensions.get('window').height)
  ).current;

  const openPanel = () =>
    openPanelHelper({ fabSlideAnim, setShowFab, setShowPanel, panelSlideAnim });
  const closePanel = () =>
    closePanelHelper({
      fabSlideAnim,
      setShowFab,
      setShowPanel,
      panelSlideAnim,
    });

  return (
    <>
      {/* Boss FAB Button */}
      <Modal
        visible={showFab}
        transparent
        animationType="none"
        hardwareAccelerated
        statusBarTranslucent={Platform.OS === 'android'}
      >
        <Animated.View
          style={[
            styles.fab,
            {
              transform: [
                {
                  translateX: fabSlideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 120], // Slide right by 120px
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity
            style={styles.fabTouchable}
            activeOpacity={0.7}
            onPress={openPanel}
          >
            <Text style={styles.fabText}>Boss</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>

      {/* Sliding Panel */}
      <Modal
        visible={showPanel}
        transparent
        animationType="none"
        hardwareAccelerated
        statusBarTranslucent={Platform.OS === 'android'}
      >
        <Animated.View
          style={[
            styles.panel,
            {
              transform: [{ translateY: panelSlideAnim }],
            },
          ]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={closePanel}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <CockpitPanel />
          <View style={styles.bottomInfo}>
            <Text style={styles.infotext}>Environment: prod</Text>
            <Text style={styles.infotext}>App: v1.0.0 (build 123)</Text>
          </View>
        </Animated.View>
      </Modal>
    </>
  );
};

export default DraggableFAB;
