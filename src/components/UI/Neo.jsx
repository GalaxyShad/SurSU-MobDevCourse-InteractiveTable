import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import { Shadow } from "react-native-shadow-2";

const Neo = (props) => {
  return (
    <Shadow
      style={props.style}
      offset={!props.revert ? [-3, -3] : [3, 3]}
      distance={8}
      startColor={"#aaaaaa12"}
    >
      <Shadow
        style={props.style}
        offset={!props.revert ? [3, 3] : [-3, -3]}
        distance={8}
        startColor={"#00000032"}
      >
        {props.children}
      </Shadow>
    </Shadow>
  );
};

const NeoWithInner = (props) => {
  return (
    <Neo
      style={{
        ...props.style,
        width: props.style.width + 6,
        height: props.style.height + 6,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Neo style={props.style} revert={true}>
        {props.children}
      </Neo>
    </Neo>
  );
};

const style = StyleSheet.create({});

export { Neo, NeoWithInner };
