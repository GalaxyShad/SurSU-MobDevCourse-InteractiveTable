import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./src/styles";

import FacultyNode from "./src/components/UI/FacultyNode";

export default () => {
  return (
    <View style={{ ...styles.container, paddingHorizontal: 16 }}>
      <Text style={{ ...styles.text }}> Программная инженерия </Text>
      <FacultyNode> Meow </FacultyNode>
      <FacultyNode> Meow </FacultyNode>
      <FacultyNode> Meow </FacultyNode>
      <StatusBar style="auto" />
    </View>
  );
};
