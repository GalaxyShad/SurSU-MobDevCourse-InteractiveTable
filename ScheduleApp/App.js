import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./src/values/styles";

import ScheduleNode from "./src/components/UI/ScheduleNode";

export default () => {
  return (
    <View style={{ ...styles.container, paddingHorizontal: 16 }}>
      <Text style={{ ...styles.text }}> Программная инженерия </Text>
      <ScheduleNode> Meow </ScheduleNode>
      <ScheduleNode isActive = {true} > Gav </ScheduleNode>
      <ScheduleNode> Bark </ScheduleNode>
      <StatusBar style="auto" />
    </View>
  );
};
