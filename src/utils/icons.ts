export enum IconName {
  Dustbin = 'dustbin',
  Close = 'close',
  Shuttle = 'shuttle',
}

// Simple icon registry that maps names to image sources
const icons: { [key in IconName]: any } = {
  [IconName.Dustbin]: require('../assets/icons/dustbin.png'),
  [IconName.Close]: require('../assets/icons/close.png'),
  [IconName.Shuttle]: require('../assets/icons/shuttle.png'),
};

export const getIcon = (name: IconName) => {
  const icon = icons[name];
  if (!icon) {
    console.warn(
      `Icon "${name}" not found. Available icons: ${Object.keys(icons).join(
        ', '
      )}`
    );
    return null;
  }
  return icon;
};

export default icons;
