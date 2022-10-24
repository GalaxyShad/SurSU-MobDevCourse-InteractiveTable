import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./src/styles";

import ScheduleNode from "./src/components/UI/ScheduleNode";
import BottomPanel from "./src/components/UI/BottomPanel";

export default () => {
  return (
    <>
      <View style={{ ...styles.container, paddingHorizontal: 8 }}>
        <Text style={{ ...styles.text }}> Программная инженерия </Text>
        <ScheduleNode> Meow </ScheduleNode>
        <ScheduleNode isDisabled = {true} > Bark </ScheduleNode>
        <ScheduleNode isDisabled = {true} > Bark </ScheduleNode>
        <ScheduleNode isActive = {true} > Gav </ScheduleNode>
        <ScheduleNode isDisabled = {true} > Bark </ScheduleNode>
        <ScheduleNode isDisabled = {true} > Bark </ScheduleNode>
        <StatusBar style="auto" />
      </View>
      <BottomPanel></BottomPanel>
    </>
  );
};
