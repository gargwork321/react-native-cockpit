# React Native Cockpit 🛩️

[![npm version](https://img.shields.io/npm/v/react-native-cockpit.svg)](https://www.npmjs.com/package/react-native-cockpit)
[![npm downloads](https://img.shields.io/npm/dm/react-native-cockpit.svg)](https://www.npmjs.com/package/react-native-cockpit)

**React Native Cockpit** is an in-app developer panel that provides tools to inspect and debug your React Native application directly from within the app itself. No need to be tethered to a computer to see logs or device info.

## ✨ Features

- **🎛️ Draggable Floating Button:** A simple, draggable button to launch the control panel without interfering with your app's UI.
- **📱 Overview Tab:** Get a quick snapshot of essential information:
  - **App & Device Info:** Version, build number, bundle ID, device model, OS version, and more.
  - **System Status:** Real-time battery level and storage space.
- **📝 Console Log Inspector:**
  - Intercepts all `console.log`, `warn`, `error`, and `info` messages.
  - Search through logs to find exactly what you need.

## 📝 Version Support Policy

We actively support the following versions:

### React Native 0.74.x - 0.81.x

For older versions (below 0.74.x), limited support is provided, and some features may not work as expected.

## 📦 Installation

```bash
npm install react-native-cockpit@alpha
# or
yarn add eact-native-cockpit@alpha
```

## 🚀 Usage

Simply wrap your root component with the `Cockpit` provider. The floating button will automatically appear over your app, giving you instant access to the control panel.

```tsx
// App.tsx
import { Cockpit } from 'react-native-cockpit';
import { YourApp } from './YourApp';

function App() {
  return (
    <>
      <Cockpit />
      <YourApp />
    </>
  );
}

export default App;
```

## ⚠️ Troubleshooting

If you encounter any issues, please:

1. Checkout [troubleshooting guide](TROUBLESHOOTING.MD)
2. Check our [existing issues](https://github.com/gargwork321/react-native-cockpit/issues)
3. Create a new issue with:
   - React Native version
   - Error logs
   - Steps to reproduce
   - Device/emulator information

## 🛣️ Roadmap

Here are some of the features planned for upcoming releases:

- **🌐 Network Inspector:** Monitor API requests and responses.
- **💾 AsyncStorage Inspector:** View, edit, and clear data from AsyncStorage.
- **🎛️ Quick Actions:** Register custom buttons to trigger actions like clearing cache or resetting state.
- **🧪 Advanced Simulation:** Trigger deep links, and switch between user accounts.

## Contributing

Contributions are welcome! Please see the [contributing guide](CONTRIBUTING.md) to get started.

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT
