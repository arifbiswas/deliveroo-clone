import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import categories from "../Data/categoriesCollection.json"
export default function Categories() {


  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal : 15,
        paddingTop : 15,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
    {/* Components Card  */}
    {
      categories.map(category =>(
        <CategoriesCard key={category?.id} imgUrl={category?.imgUrl} title={category?.title} />
      ))
    }
    </ScrollView>
  )
}