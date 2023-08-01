import { TouchableOpacity, Text, StyleSheet } from "react-native";

const AppButton = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity style={{backgroundColor:color,...styles.button}} onPress={()=>onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    button:{
        width : "90%",
        padding: 10,
        margin: 10,
        alignSelf: "center",
        borderRadius: 10,
    },
    text:{
        fontSize: 25,
        color: "white",
        alignSelf: "center",
        fontWeight: 600,
    }
})
export default AppButton;
