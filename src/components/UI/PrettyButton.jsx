import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Neo } from "./Neo";

const PrettyButton = ({iconName}) => {
  return (
    <TouchableOpacity style={style.main}>
      <Neo style={{...style.main, borderRadius: 64}}>
        <LinearGradient
          start={{ x: 0.0, y: -1.0 }}
          end={{ x: 0.9, y: 1.0 }}
          colors={["#4a00e0", "#8E2DE2"]}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 64,
            padding: 4,
          }}
        >
          <View style={style.inner}>
            <AntDesign name={iconName} size={28} color="#454545" />
          </View>
        </LinearGradient>
      </Neo>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  main: {
    width: 60,
    height: 44,
  },

  inner: {
    width: '100%',

    backgroundColor: '#202020',
    borderRadius: 64,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export { PrettyButton };
