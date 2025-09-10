import React from 'react';
import { Image } from 'react-native';
import type { StyleProp, ImageStyle } from 'react-native';
import { getIcon, IconName } from '../utils/icons';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
  testID?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  style,
  testID,
}) => {
  const iconSource = getIcon(name);

  if (!iconSource) {
    return null;
  }

  return (
    <Image
      source={iconSource}
      style={[
        { width: size, height: size },
        color && { tintColor: color },
        style,
      ]}
      testID={testID}
    />
  );
};

export default Icon;
