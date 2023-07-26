import colors from "../config/colors";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText/AppText";
import ListItem from "../components/ListItem/ListItem";

const ListingDetailScreen = () => {
  return (
    <View style={{width: "100%"}}>
      <Image
        source={require("../assets/human.png")}
        style = {styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText>Red Jacket for Sale!</AppText>
        <AppText color={colors.secondary}>$200</AppText>
      </View>
      <ListItem image={require("../assets/user-avatar.png")} title={"Rahul Parihar"} subtitle={"5 Listing"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  image:{
    width: "100%",
    height: 300,
  },
  detailsContainer:{
    padding: 20,
    display: "flex",
    gap: 10,
  }
})

export default ListingDetailScreen;
