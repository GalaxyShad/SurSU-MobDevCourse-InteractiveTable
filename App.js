import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import MaskedView from "@react-native-masked-view/masked-view";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./src/styles";

import ScheduleNode from "./src/components/UI/ScheduleNode";
import BottomPanel from "./src/components/UI/BottomPanel";

import { Shadow } from "react-native-shadow-2";

import { useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { Main } from "./src/screens/Main";


export default () => {
  const [fontsLoaded] = useFonts({
    M400: require("./assets/fonts/Montserrat-Regular.ttf"),
    M500: require("./assets/fonts/Montserrat-Medium.ttf"),
    M600: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    M700: require("./assets/fonts/Montserrat-Bold.ttf"),
    M800: require("./assets/fonts/Montserrat-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Main/>
  );
};
