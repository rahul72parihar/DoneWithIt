import React from "react";
import { View, Image, ImageBackground, Text ,StyleSheet} from "react-native";

import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";

const LoginScreen = () => {
  return (
      <ImageBackground
        blurRadius={10}
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", display: "flex", flexDirection:"column", alignItems:"center" }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image
            source={require("../assets/logo-red.png")}
            style={{ width: 100, height: 100, marginTop: 130 }}
          />
          <Text style={styles.logoText}>Sell What you Don't Need</Text>
        </View>
        <View style={{marginTop:"auto", marginBottom:20, width:"100%"}}>
          <AppButton text="Login" color={colors.primary} />
          <AppButton text="Register" color={colors.secondary} />
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logoText:{
    fontSize: 20,
    padding: 10,
    fontWeight: 600,
  }
})

export default LoginScreen;
