import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginApp from './LoginApp';
import LoginHelp from './LoginHelp';
import Greeting from './Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Timer></Timer>
      <br></br>
      <Greeting></Greeting>
      <br></br>
      <HelpCount></HelpCount>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
  }
});
