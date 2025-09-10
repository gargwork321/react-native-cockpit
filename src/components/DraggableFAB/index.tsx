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
import useDeviceInfo from '../../hooks/useDeviceInfo';
import Icon from '../../components/Icon';
import { IconName } from '../../utils/icons';

export const DraggableFAB = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [showFab, setShowFab] = useState(true);
  const fabSlideAnim = useRef(new Animated.Value(0)).current; // 0 = visible, 1 = offscreen
  const panelSlideAnim = useRef(
    new Animated.Value(Dimensions.get('window').height)
  ).current;
  const { appVersion, buildNumber } = useDeviceInfo();

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
      {/* Boss FAB Button (not in Modal) */}
      {showFab && (
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
          pointerEvents="box-none"
        >
          <TouchableOpacity
            style={styles.fabTouchable}
            activeOpacity={0.7}
            onPress={openPanel}
          >
            <Icon name={IconName.Shuttle} size={30} color="#fff" />
          </TouchableOpacity>
        </Animated.View>
      )}

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
            <Icon name={IconName.Close} size={20} color="#595959ff" />
          </TouchableOpacity>
          <CockpitPanel />
          <View style={styles.bottomInfo}>
            <Text style={styles.infotext}>
              App: v{appVersion} (build {buildNumber})
            </Text>
          </View>
        </Animated.View>
      </Modal>
    </>
  );
};

export default DraggableFAB;
