import { LinearGradient } from "expo-linear-gradient";

import { Text, TouchableOpacity, View, ScrollView } from "react-native";

import ScheduleNode from "../components/UI/ScheduleNode";
import BottomPanel from "../components/UI/BottomPanel";

import { GradientText } from "../components/UI/GradientText";

import { AntDesign } from "@expo/vector-icons";

import { getSchedule } from "../HardcodedSchedule";

import { useState } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

const Header = (props) => {
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
      {/* Кнопка выбора группы */}
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

      {/* Кнопка выбора подгруппы */}
      <TouchableOpacity
        style={{
          flex: 1,
          alignSelf: "flex-end",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        onPress={props.onGroup}
      >
        <Text style={{ fontFamily: "M500", fontSize: 20, color: "#8E2DE2" }}>
          {`${props.group + 1} подгр.`}
        </Text>
        <AntDesign name="arrowdown" size={28} color="#8E2DE2" />
      </TouchableOpacity>
    </View>
  );
};

const ScheduleNodeList = (props) => {
  const todayLessons = getSchedule((day = props.date.getDay() - 1));

  const [lessonIndex, setlessonIndex] = useState(-1);

  setInterval(() => {
    const curTime = new Date(`2022-01-01T11:30:00`);

    // const curTime = new Date(
    //   `2022-01-01T${new Date()
    //     .getHours()
    //     .toString()
    //     .padStart(2, "0")}:${new Date()
    //     .getMinutes()
    //     .toString()
    //     .padStart(2, "0")}:00`
    // );

    const timeTable = [
      "08:30 - 09:50",
      "10:00 - 11:20",
      "11:30 - 12:50",
      "13:20 - 14:40",
      "14:50 - 16:10",
      "16:20 - 17:40",
    ].map((element) => {
      const temp = element.split(" - ");

      return [
        new Date(`2022-01-01T${temp[0]}:00`),
        new Date(`2022-01-01T${temp[1]}:00`),
      ];
    });

    timeTable.forEach((interval, index) => {
      if (curTime >= interval[0] && curTime <= interval[1]) {
        setlessonIndex(index);
      }
    });
  }, 5);

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
        if (index === lessonIndex) {
          lesson = { ...lesson, isActive: true };
        }

        return (
          <ScheduleNode
            content={lesson}
            index={index}
            key={index}
            date={props.date}
            group={props.group + 1}
          />
        );
      })}
    </ScrollView>
  );
};

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [curDate, setCurDate] = useState(new Date());
  const [curGroup, setCurGroup] = useState(0);

  const addDate = (step = 1) => {
    curDate.setDate(curDate.getDate() + step);
    return curDate.toLocaleDateString()
  };

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
        <Header group={curGroup} onGroup={() => setCurGroup(!curGroup)} />
        <ScheduleNodeList date={curDate} group={curGroup} />
      </LinearGradient>
      <BottomPanel
        setDate={(step) => setCurDate(new Date(addDate(step)))}
        onInput={() => setShowModal(true)}
        inputDate={curDate}
      />

      {showModal && (
        <DateTimePicker
          value={curDate}
          onChange={(event, selectedDate) => {
            setShowModal(false);
            setCurDate(selectedDate);
          }}
        />
      )}
    </>
  );
};

export { Main };
