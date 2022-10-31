import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import { PrettyButton } from "./PrettyButton";
import { Shadow } from "react-native-shadow-2";
import { PrettyInput } from "./PrettyInput";


const BottomPanel = () => {
  return (

    <Shadow style={style.shadowProp}
            offset={[0, -1]}
            distance={16}
            startColor="#aaaaaa12" 
    >
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.9, y: 1.0 }}
        colors={["#202020", "#181818"]}
        style={style.panel}
      >
        <PrettyButton iconName={'arrowleft'}></PrettyButton>
        <PrettyInput> </PrettyInput>
        <PrettyButton iconName={'arrowright'}></PrettyButton>
      </LinearGradient>
    </Shadow>
  );
};

const style = StyleSheet.create({
  panel: {
    width: "100%",
    alignSelf: "flex-end",

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",

    paddingHorizontal: 16,
    paddingBottom: 10
  },

  shadowProp: {
    width: "100%",
    height: 90,
    // shadowColor: "#aaa",
    // shadowOffset: { width: 0, height: -2 },
    // shadowOpacity: 0.09,
    // shadowRadius: 16,
    // elevation: 3,
    // backgroundColor: "white",
  },

  button: {
    width: 80,
    height: 64,

  },

  buttonInner: {

    width: '100%',
    // margin: 2,
    backgroundColor: '#202020',
    borderRadius: 64,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default BottomPanel;
