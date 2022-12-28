import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Octicons } from "@expo/vector-icons";
import RestaurantsCard from './RestaurantsCard';
import RestaurantsCollections from '../Data/RestaurantsCollections.json';
export default function FeatureRow({title, description,id}) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <AntDesign name="right" size={24} color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4"> {description}</Text>
      <ScrollView
      contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:15
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
    {/* Restaurants cards */}
    {
     id === 1 &&  RestaurantsCollections.map(food =>(
      food.FeaturedId === 1 &&  <RestaurantsCard 
    key={food.id}
      id={food.id}
    imgUrl={food.imgUrl}
    title={food.title}
    rating={food.rating}
    genre={food.genre}
    address={food.address}
    short_description={food.short_description}
    dishes={food.dishes}
    long={food.long}
    lat={food.lat}
    />
      ))
    }
    {
     id === 2 &&  RestaurantsCollections.map(food =>(
      food.FeaturedId === 2 &&  <RestaurantsCard 
    key={food.id}
      id={food.id}
    imgUrl={food.imgUrl}
    title={food.title}
    rating={food.rating}
    genre={food.genre}
    address={food.address}
    short_description={food.short_description}
    dishes={food.dishes}
    long={food.long}
    lat={food.lat}
    />
      ))
    }
    {
     id === 3 &&  RestaurantsCollections.map(food =>(
      food.FeaturedId === 3 &&  <RestaurantsCard 
    key={food.id}
      id={food.id}
    imgUrl={food.imgUrl}
    title={food.title}
    rating={food.rating}
    genre={food.genre}
    address={food.address}
    short_description={food.short_description}
    dishes={food.dishes}
    long={food.long}
    lat={food.lat}
    />
      ))
    }
    {/* {
     id === 4 &&  RestaurantsCollections.map(food =>(
      food.FeaturedId === 4 &&  <RestaurantsCard 
    key={food.id}
      id={food.id}
    imgUrl={food.imgUrl}
    title={food.title}
    rating={food.rating}
    genre={food.genre}
    address={food.address}
    short_description={food.short_description}
    dishes={food.dishes}
    long={food.long}
    lat={food.lat}
    />
      ))
    } */}
  
      </ScrollView>
    </View>
  )
}