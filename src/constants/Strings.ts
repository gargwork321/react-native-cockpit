// src/constants/Strings.ts

export const STRINGS = {
  COMPONENTS: {
    COCKPIT: {
      TITLE: 'React Native Cockpit',
      CLOSE: 'Close',
      DEVICE_INFO_TITLE: 'Device Info',
    },
    DEVICE_INFO_PANEL: {
      PLATFORM: 'Platform',
      OS_VERSION: 'OS Version',
      APP_VERSION: 'App Version',
      // ...
    },
  },
  ERRORS: {
    // ...
  },
} as const; // 'as const' makes the object readonly and enables better type inference

// Alternatively, for simpler cases, just export individual constants
export const PANEL_TITLE = 'React Native Cockpit';
