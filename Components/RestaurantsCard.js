import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Octicons,EvilIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
export default function RestaurantsCard({
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
})

 {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=> {
      navigation.navigate("Restaurants",{
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
      })
    }}
    >
      <View className="bg-white mr-3 shadow ">
      <Image
      source={{
        uri:imgUrl,
      }}
      className="w-64 h-36 rounded-md"
      ></Image>
      <View className="px-3  pb-4">
        <Text className="text-lg font-bold pt-2">{title}</Text>
        <View className="flex-row items-start space-x-2">
        <View className="opacity-40">
        <AntDesign name="star" size={18} color="green" opacity={0.5} />
        </View>
        <Text className="text-sm text-gray-500"><Text className="text-green-500">{rating}</Text>. {genre}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
        <EvilIcons name="location" size={22} color="gray" />
        <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
      </View>
    </TouchableOpacity>
  )
}