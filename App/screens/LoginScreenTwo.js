import React from "react";
import Screen from "../components/Screen";
import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton/AppButton";
import { Formik } from "formik";
import * as Yup from 'yup';
import AppText from "../components/AppText/AppText";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreenTwo() {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}

      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              onBlur={()=> setFieldTouched("email")}
              onChangeText={handleChange("email")}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
            ></AppTextInput>
            <ErrorMessage visible={touched.email}>{errors.email}</ErrorMessage>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={()=> setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            ></AppTextInput>
            <ErrorMessage visible={touched.password}>{errors.password}</ErrorMessage>
            <AppButton
              text="Click"
              color="black"
              onPress={()=>{handleSubmit()}}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});
export default LoginScreenTwo;
