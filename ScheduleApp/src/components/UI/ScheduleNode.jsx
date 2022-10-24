import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScheduleNode = ({ children, isActive = false, isDisabled = false, index = 0 }) => {
  return (
    <View
      style={{
        ...style.scheduleNode,
        backgroundColor: isActive ? "#121B69" : isDisabled ? '#2B2B2C' : '202020',
      }}
    >
      <View style={{}}>
        <Text style={{ color: "#4D4D4D", fontWeight: "700", fontSize: "50" }}>
          {index + ' '}
        </Text>
      </View>

      <Text style={{ color: "#fff", fontSize: "18px", fontWeight: "600" }}>
        {children}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  scheduleNode: {
    flexDirection: "row",
    backgroundColor: "#2B2B2C",
    borderRadius: 8,

    width: "100%",
    height: 86,

    padding: 20,

    color: "#FFFFFF",

    marginBottom: 8,
  },


  active: {
    backgroundColor: "#121B69",
  },
});

export default ScheduleNode;
