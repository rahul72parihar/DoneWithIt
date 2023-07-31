import { StyleSheet, View, Image, Text, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import colors from "../../config/colors";
const ListItem = ({ image, title, subtitle, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    gap: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
  },
  subtitle: {
    color: "grey",
  },
});

export default ListItem;
