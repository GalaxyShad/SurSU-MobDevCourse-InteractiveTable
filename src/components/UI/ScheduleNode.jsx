import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// import { useFonts } from expo

const ScheduleNode = ({
  children,
  isActive = false,
  isDisabled = false,
  index = 0,
}) => {
  const setGradient = () => {
    if (isDisabled) return ["#FFFFFF02", "#FFFFFF02"];

    if (isActive) return ["#348CF3", "#103F9C"];

    return ["#272727", "#272727"];
  };

  return (
    <View style={style.container}>
      <LinearGradient
        // Background Linear Gradient
        start={{ x: 0.0, y: -1.0 }}
        end={{ x: 0.9, y: 1.0 }}
        colors={setGradient()}
        style={style.scheduleNode}
      >
        <View>
          <Text style={{ color: "#4D4D4D", fontWeight: "700", fontSize: 50, }}>
            {index + " "}
          </Text>
        </View>

        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "600",
            textAlignVertical: "center",
          }}
        >
          {children}
        </Text>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",

    // marginHorizontal: 2,
    marginBottom: 16,
  },

  scheduleNode: {
    flexDirection: "row",
    height: 86,
    alignItems: "center",
    // backgroundColor: "#2B2B2C",

    paddingHorizontal: 16,
    borderRadius: 8,
  },

});

export default ScheduleNode;
