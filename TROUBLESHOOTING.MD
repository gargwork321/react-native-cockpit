# Troubleshooting Guide

## ⚠️ Common Issues

### 1. Clean Build Files (Android) If

you encounter build issues on Android, try cleaning the project:

```bash
# Clean Android build files
cd android
./gradlew clean
cd ..

# For more thorough cleaning, also remove node_modules
rm -rf node_modules
npm install
```

### 2. Reset Metro Bundler Cache

```bash
# Reset Metro cache
npm start -- --reset-cache

# Alternative method
rm -rf $TMPDIR/metro-*
```

### 3. Clear Watchman Cache

```bash
# Clear Watchman watches
watchman watch-del-all

# If issues persist, try uninstalling and reinstalling Watchman
brew uninstall watchman
brew install watchman
```

### 4. Reinstall Dependencies

```bash
# Remove dependencies and lock files
rm -rf node_modules package-lock.json yarn.lock

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

### 5. iOS Specific Cleanup

```bash
# Clean iOS build artifacts
cd ios
rm -rf Pods Podfile.lock build
pod install
cd ..
```

### 6. React Native Version Compatibility If you encounter version

    conflicts, check your React Native version:

```bash
npx react-native --version
```

Ensure your project uses at least React Native 0.74.x. To upgrade:

```bash
npx react-native upgrade
```

# 🔧 Advanced Troubleshooting

### If Issues Persist:

#### 1. Check Compatibility Matrix:

Verify that all your dependencies are compatible with React
Native 0.74.x+ -

#### 2. Review Native Code:

If your project contains native code, ensure it's compatible with newer React Native versions -

#### 3.Check for Breaking Changes:

Review React Native upgrade guides for versions
between your current version and 0.74.x

## Common Error Solutions:

#### Error: "Unable to resolve module"

```bash
npm start -- --reset-cache
```

#### Error: "SDK location not found" (Android)

```bash
# Set Android SDK path in your environment variables
export ANDROID_HOME=~/Library/Android/sdk
```

#### Error: "Undefined is not an object"

```bash
# Often related to cache issues
watchman watch-del-all
npm start -- --reset-cache
```

## 📝 Additional Notes -

- Always ensure your Node.js version is compatible with your React Native version
- Consider using a node version manager (nvm) to switch between Node versions
- For persistent issues, try creating a new React Native project and gradually adding dependencies

## 📚 Resources -

- [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/)
- [React Native GitHub Issues](https://github.com/facebook/react-native/issues)
