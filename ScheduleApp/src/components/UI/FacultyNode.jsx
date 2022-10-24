import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FacultyNode = ({ children }) => {
  return (
    <View
      style={{
        ...style.facultyNode
      }}
    >
      <Text style={{ color: "#FF0045", fontSize: "24px", fontWeight: "600" }}>
        {children}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  facultyNode: {
    flexDirection: "row",
    backgroundColor: "#272727",
    borderRadius: 8,

    width: "100%",
    height: 86,

    padding: 20,

    color: "#FFFFFF",

    marginBottom: 8,
  }
});

export default FacultyNode;