import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import Profile from "./components/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import ProfileCard from "./components/ProfileCard";
import CardForm from "./components/CardForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardForm">
        <Stack.Screen name="CardForm" component={CardForm} />
        <Stack.Screen name="Profile Card" component={ProfileCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
