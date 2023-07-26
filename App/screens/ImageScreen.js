import colors from "../config/colors";
import { View, SafeAreaView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ImageScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", height: "100%", width: "100%",paddingTop:40 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginVertical: 5,
        }}
      >
        <View>
          <MaterialCommunityIcons name="close" color="white" size={35}/>
        </View>

        <View>
          <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
        </View>
      </View>

      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={{ width: "100%", height: "80%" }}
      />
    </SafeAreaView>
  );
};

export default ImageScreen;
