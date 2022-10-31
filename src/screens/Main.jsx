import { LinearGradient } from "expo-linear-gradient";

import { Text, TouchableOpacity, View, ScrollView } from "react-native";

import ScheduleNode from "../components/UI/ScheduleNode";
import BottomPanel from "../components/UI/BottomPanel";

import { GradientText } from "../components/UI/GradientText";

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
        paddingBottom: 16,
      }}
    >
      <TouchableOpacity>
        <GradientText
          style={{
            fontFamily: "M700",
            fontSize: 72,
            marginBottom: -12,
          }}
          colors={["#8E2DE2", "#4a00e0"]}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 2, y: 2 }}
        >
          609-01
        </GradientText>
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
        <Text style={{ fontFamily: "M500", fontSize: 20, color: "#8E2DE2" }}>
          1 подгр.
        </Text>
        <AntDesign name="arrowdown" size={28} color="#8E2DE2" />
      </TouchableOpacity>
    </View>
  );
};

const ScheduleNodeList = () => {
  const todayLessons = [
    null,
    null,
    {
      
      title: "Технология разработки програмного обеспечения (лек)",
      auditory: "У903",
    },
    {
      title: "Основы теории автоматического управления(лек)",
      isActive: true,
      auditory: "У105",
    },
    {
      title: "Методы вычеслительной матемтики в проектной деятельности",
      auditory: "А603",
    },
    null,
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "column",
        width: "100%",
        overflow: "scroll",
      }}
    >
      {todayLessons.map((lesson, index) => {
        return <ScheduleNode content={lesson} index={index} key={index} />;
      })}
    </ScrollView>
  );
};

const Main = () => {
  return (
    <>
      <LinearGradient
        style={{
          flex: 1,
          flexDirection: "column",
          paddingHorizontal: 8,
        }}
        colors={["#212121", "#121212"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Header />
        <ScheduleNodeList />
      </LinearGradient>
      <BottomPanel />
    </>
  );
};

export { Main };
