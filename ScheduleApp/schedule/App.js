import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './src/styles';
import { Class } from './src/components/UI/class';

export default function App() {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.textInstructions, marginTop: 650}}> Программная инженерия </Text>
      <StatusBar style="auto" />
    </View>
  );
};
