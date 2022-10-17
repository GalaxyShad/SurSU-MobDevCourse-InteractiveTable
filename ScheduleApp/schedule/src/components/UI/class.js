import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../../styles';

export function Class(props) {
  return (
    <View style={{...styles.cell}}>
      
      <Text style={{...styles.textInstructions, marginTop: 650}}> </Text>
      <StatusBar style="auto" />
    </View>
  );
};
