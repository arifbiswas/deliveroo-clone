import React, { useLayoutEffect } from "react";
import { View, Text,SafeAreaView, StatusBar, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo, Octicons } from "@expo/vector-icons";
import Categories from "../Components/Categories";
import FeatureRow from "../Components/FeatureRow";
import featureRowCollections from '../Data/featureRowCollection.json';

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-8 flex-1 pb-36">
      <View className="    ">
        <View className="flex-row items-center space-x-2 mb-2 px-2">
          {/* image section  */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            }}
            className="w-12 h-12 bg-gray-600 rounded-full m-2"
          ></Image>
          {/* Header title  */}
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <Entypo name="chevron-small-down" size={24} color="#00CCBB" />
            </Text>
          </View>
          <Text className="flex justify-end">
            <AntDesign name="user" size={35} color="#00CCBB" />
          </Text>
      {/* Search option  */}
      </View>
      <View className="flex-row space-x-2 pb-2 mx-4 items-center">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2">
          <Octicons name="search" size={20} color="gray" />
          <TextInput placeholder="Restaurants in Dhaka City" keyboardType="default" />
        </View>
        <Octicons name="filter" size={24} color="#00CCBB" />
      </View>

         {/* Body ScrollView  */}
         <ScrollView
       
         >
            {/* Catagories  */}
            <Categories />
            {/* Feature Row  */}
            {
              featureRowCollections.map(featureCollection=> (
            <FeatureRow 
            key={featureCollection.id}
            id={featureCollection.id}
            title={featureCollection.title}
            description={featureCollection.description}
            />
              ))
            }
            
         </ScrollView>
        </View>
      {/* <StatusBar></StatusBar> */}
    </SafeAreaView>
  );
}
