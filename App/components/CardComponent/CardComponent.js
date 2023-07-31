import { Text, View, Image, StyleSheet } from "react-native";
const CardComponent = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style = {styles.detailContainer}>
        <Text style = {{fontSize: 20, marginVertical: 5}}>{title}</Text>
        <Text style = {{fontSize: 20, color: "green", marginVertical: 5}}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    margin: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
  },
  detailContainer:{
    padding: 20,
  }
});

export default CardComponent;
