import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginApp from './LoginApp';
import LoginHelp from './LoginHelp';
import DayNight from './DayNight';
// import UserTimer form './UserTimer';

export default function App() {
  return (
    <View style={styles.container}>
      <UserTimer></UserTimer>
      <br></br>
      <DayNight></DayNight>
      <br></br>
      <LoginHelp></LoginHelp>
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
