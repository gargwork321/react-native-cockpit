import { Animated, Dimensions, Easing } from 'react-native';

export function openPanelHelper({
  fabSlideAnim,
  setShowFab,
  setShowPanel,
  panelSlideAnim,
}: {
  fabSlideAnim: Animated.Value;
  setShowFab: (v: boolean) => void;
  setShowPanel: (v: boolean) => void;
  panelSlideAnim: Animated.Value;
}) {
  Animated.timing(fabSlideAnim, {
    toValue: 1,
    duration: 250,
    useNativeDriver: true,
    easing: Easing.in(Easing.cubic),
  }).start(() => {
    setShowFab(false);
    setShowPanel(true);
    Animated.timing(panelSlideAnim, {
      toValue: Dimensions.get('window').height * 0.25,
      duration: 350,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();
  });
}

export function closePanelHelper({
  fabSlideAnim,
  setShowFab,
  setShowPanel,
  panelSlideAnim,
}: {
  fabSlideAnim: Animated.Value;
  setShowFab: (v: boolean) => void;
  setShowPanel: (v: boolean) => void;
  panelSlideAnim: Animated.Value;
}) {
  Animated.timing(panelSlideAnim, {
    toValue: Dimensions.get('window').height,
    duration: 350,
    useNativeDriver: true,
    easing: Easing.in(Easing.cubic),
  }).start(() => {
    setShowPanel(false);
    setShowFab(true);
    Animated.timing(fabSlideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();
  });
}
