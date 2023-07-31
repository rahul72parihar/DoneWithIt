import LoginScreen from "./App/screens/LoginScreen";
import ImageScreen from "./App/screens/ImageScreen";
import ListingDetailScreen from "./App/screens/ListingDetailScreen";
import MessagesScreen from "./App/screens/MessagesScreen";
import AccountScreen from "./App/screens/AccountScreen";
import ListingScreen from "./App/screens/ListingScreen";
import Screen from "./App/components/Screen";
import { Switch, Text, TextInput } from "react-native";
import { useState } from "react";
import AppTextInput from "./App/components/AppTextInput";
import AppPicker from "./App/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Toy", value: 2 },
  { label: "Tech", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState('');
  return (
    <Screen>
      <AppPicker
        items={categories}
        icon="apps"
        placeholder="Categories"
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      ></AppPicker>
      <AppTextInput icon="email" placeholder="Email"></AppTextInput>
    </Screen>
  );
  // return <ListingScreen/>
  // return<AccountScreen/>
  // return <MessagesScreen/>
  // return <ListingDetailScreen/>
  // return <LoginScreen/>
  // return <ImageScreen></ImageScreen>
}
