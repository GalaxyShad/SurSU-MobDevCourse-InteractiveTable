import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import { PrettyButton } from "./PrettyButton";
import { Shadow } from "react-native-shadow-2";
import { Neo, NeoWithInner } from "./Neo";

import { AntDesign } from "@expo/vector-icons";

const PrettyInput = (props) => {
  return (
    <TouchableOpacity>
      <NeoWithInner
        style={{ borderRadius: 32, height: 34, backgroundColor: "#202020" }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 32,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="calendar" size={28} color="#454545" />
          <Text
            style={{
              marginLeft: 8,
              fontFamily: "M500",
              fontSize: 14,
              color: "#454545",
            }}
          >
            Понедельник
          </Text>
        </View>
      </NeoWithInner>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    height: 64,
    width: "100%",
    borderRadius: 37,
  },
});

export { PrettyInput };
