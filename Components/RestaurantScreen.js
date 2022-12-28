import { View, Text, ScrollView, Image,SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { AntDesign, Entypo, Octicons,EvilIcons } from "@expo/vector-icons";
import {useRoute , useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DishRow from './DishRow';
import BasketIcon from './BasketIcon';
import { useDispatch } from 'react-redux';
import { selectRestaurant, setRestaurant } from '../Features/restaurantSlice';
export default function RestaurantScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    }} = useRoute()

    useEffect(()=>{
      dispatch(setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
      }))
    },[dispatch])

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
    // console.log(dishes);
  return (
    <SafeAreaView className="pt-8">
    <BasketIcon></BasketIcon>
    <ScrollView>
      <View className="relative">
        <Image
        className="w-full h-56"
         source={{
            uri : imgUrl
        }}
        />
    <TouchableOpacity
    onPress={navigation.goBack}
     className="absolute top-4 left-4 bg-white rounded-full p-1">
    <Ionicons name="md-arrow-back-outline" size={22} color="#00ccbb" />
    </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">
            {title}
          </Text>
        <View className="flex-row space-x-2 my-1 ">
        <View className="flex-row items-center space-x-2">
        <View className="opacity-40  ">
        <AntDesign name="star" size={18} color="green" opacity={0.5} />
        </View>
        <Text className="text-sm text-gray-500"><Text className="text-green-500">{rating}</Text>. {genre}</Text>
        </View>
        <View className="flex-row items-center space-x-2">
        <View className="opacity-40  ">
        <EvilIcons name="location" size={22} color="gray" />
        </View>
        <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
        </View>
        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
       <View className="opacity-40"><AntDesign name="questioncircleo" size={20} color="gray" /></View>
       <Text className="pl-2 flex-1 text-md font-bold">Have food allergy ?</Text>
       <Entypo name="chevron-small-right" size={24} color="#00ccbb" />
        </TouchableOpacity>
      </View>
      <View className="pb-36">
        <Text className="px-4 pt-6 pb-3 font-bold text-xl">Menu</Text>
        {/* DishRows */}
        {
          dishes.map((dish,i) => <DishRow
          key={i}
          id={dish.id}
          name ={dish.name}
          description={dish.description}
          price={dish.price}
          image ={dish.image}
          >
          </DishRow>)
        }
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}