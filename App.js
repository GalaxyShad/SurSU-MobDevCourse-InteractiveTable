import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./src/styles";

import ScheduleNode from "./src/components/UI/ScheduleNode";
import BottomPanel from "./src/components/UI/BottomPanel";

import { Shadow } from "react-native-shadow-2";

import { useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        paddingTop: 32,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        // backgroundColor: '#fff',
        paddingBottom: 16,
      }}
    >
      <TouchableOpacity>
        <Text
          style={{
            fontFamily: "M700",
            fontSize: 72,
            color: "#FF0045",
            marginBottom: -12,
          }}
        >
          609-01
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          alignSelf: "flex-end",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "M500", fontSize: 20, color: "#FF0045" }}>
          1 подгр.
        </Text>
        <AntDesign name="arrowdown" size={28} color="#FF0045" />
      </TouchableOpacity>
    </View>
  );
};

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
    <>
      <View style={{ ...styles.container, paddingHorizontal: 8 }}>
        <Header></Header>

        <ScrollView
          style={{
            flex: 1,
            flexDirection: "column",
            width: "100%",
            overflow: "scroll",
          }}
        >
          {[
            {},
            {},
            {
              title: "Технология разработки програмного обеспечения (лек)",
            },
            {
              title: "Основы теории автоматического управления(лек)",
              isActive: true,
            },
            {
              title: "Методы вычеслительной матемтики в проектной деятельности",
            },
            {},
          ].map(({ title, isActive, isDisabled }, index) => {
            return (
              <ScheduleNode
                isActive={isActive}
                isDisabled={isDisabled}
                index={index}
                key={index}
              >
                {title}
              </ScheduleNode>
            );
          })}
        </ScrollView>
      </View>
      <BottomPanel></BottomPanel>
    </>
  );
};
