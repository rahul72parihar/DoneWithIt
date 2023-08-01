import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = ({ children, style }) => {
  return <Text style={[style,styles.text]}>{children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 600,
  },
});

export default AppText;
