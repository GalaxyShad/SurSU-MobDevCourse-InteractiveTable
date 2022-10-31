import { LinearGradient } from "expo-linear-gradient";

import MaskedView from "@react-native-masked-view/masked-view";
import { Text } from "react-native";

const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient colors={props.colors} start={props.start} end={props.end}>
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export { GradientText }