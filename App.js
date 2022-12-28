import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

import { NativeWindStyleSheet } from "nativewind";
import RestaurantScreen from "./Components/RestaurantScreen";
import { Provider } from "react-redux";
import {store} from "./store";
import BasketScreen from "./Components/BasketScreen";
export const COUNTER_CHANGE = 'COUNTER_CHANGE'
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurants" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} 
            options={()=>({gestureDirection: 'vertical', headerShown : false})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
