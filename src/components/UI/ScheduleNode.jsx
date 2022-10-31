import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Neo } from "./Neo";

import { useFonts } from "expo-font";

const Tag = (props) => {
  const evaluateColor = () => {
    if (!props?.auditory) return;

    switch (props?.auditory[0]) {
      case 'У': return '#327C4B'
      case 'А': return '#80306E'
      case 'К': return '#1C4DCC'
    }

    return '#303030'
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: evaluateColor(),
        width: 70,
        height: 44,
        borderRadius: 12,
      }}
    >
      <Text style={{ color: "#fff", fontFamily: "M600" }}>
        {props.auditory}
      </Text>
    </View>
  );
};

const ScheduleNode = ({
  children,
  content,
  index = 0,
}) => {

  const timeTable = [
      '8:30 - 9:50',
    '10:00 - 11:20',
    '11:30 - 12:50',
    '13:20 - 14:40',
    '14:50 - 16:10',
    '16:20 - 17:40',
  ]


  const setGradient = () => {
    if (content == null) return ["#FFFFFF01", "#FFFFFF01"];

    if (content.isActive) return ["#4a00e0", "#8E2DE2"];

    return ["#272727", "#272727"];
  };

  return (

      <LinearGradient
        // Background Linear Gradient
        start={{ x: 0.0, y: -1.0 }}
        end={{ x: 0.9, y: 1.0 }}
        colors={setGradient()}
        style={style.scheduleNode}
      >
        <View>
          <Text
            style={{ width: 40,  textAlign: 'center', color: "#ffffff40", fontFamily: "M700", fontSize: 50 }}
          >
            {index + 1 + ''}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#3C3C3C",
            width: 2,
            height: "100%",
            marginHorizontal: 10,
          }}
        ></View>

        <View style={{ flex: 1, flexDirection: "column", height: "100%" }}>
          <Text
            style={{
              color: "#ffffff88",
              fontSize: 14,
              fontFamily: "M600",
            }}
          >
            {timeTable[index]}
          </Text>
          <Text
            style={{
              marginTop: 4,
              color: "#fff",
              fontSize: 14,
              fontFamily: "M600",
              textAlignVertical: "center",
            }}
          >
            {content?.title}
          </Text>
        </View>

        <Tag auditory={content?.auditory}/>
      </LinearGradient>

  );
};

const style = StyleSheet.create({
  scheduleNode: {
    width: "100%",

    marginBottom: 10,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 16,
    paddingVertical:  16,
    borderRadius: 16,

    borderColor: "#272727",
    borderWidth: 4,
  },
});

export default ScheduleNode;
