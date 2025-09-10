import { Text, View, StyleSheet, Pressable } from 'react-native';
// import { multiply } from 'react-native-cockpit';
import { Cockpit } from 'react-native-cockpit';

const result = 'ewew'; //multiply(12, 7);
const haveDoubt = true;

function App() {
  return haveDoubt ? (
    <>
      <Cockpit />
      <View style={styles.container}>
        <Text style={styles.text}>🚀 React Native Cockpit</Text>
        <Text style={styles.text}>Your developer panel is ready!</Text>
        <Text>Result: {result}</Text>
        <Pressable
          onPress={() => {
            console.log('Button Pressed!');
            console.warn('This is a warning!');
            console.error('This is an error!');
            console.info('Some info for you!');
          }}
        >
          <Text>Press Me</Text>
        </Pressable>
      </View>
    </>
  ) : (
    <Cockpit />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18 },
});

export default App;
