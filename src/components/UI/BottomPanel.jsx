import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const BottomPanel = () => {
  return (
    <View style={style.shadowProp}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.9, y: 1.0 }}
        colors={["#202020", "#181818"]}
        style={style.panel}
      >
        <TouchableOpacity style={style.button}>
          <LinearGradient
            start={{ x: 0.0, y: -1.0 }}
            end={{ x: 0.9, y: 1.0 }}
            colors={["#348CF3", "#103F9C"]}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 64,
              padding: 4,
            }}
          >
            <View style={style.buttonInner}>
              <AntDesign name="arrowleft" size={48} color="#454545" />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  panel: {
    width: "100%",
    height: 106,
    alignSelf: "flex-end",

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",

    paddingHorizontal: 16,
  },

  shadowProp: {
    width: "100%",
    height: 106,

    shadowColor: "#aaa",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.09,
    shadowRadius: 16,
    elevation: 3,
    backgroundColor: "white",
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
