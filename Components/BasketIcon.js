import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItem, selectBasketTotalItems } from '../Features/basketSlice'
import {useNavigation} from '@react-navigation/native';
import { formatCurrency } from 'react-native-format-currency';
export default function BasketIcon() {
    const items = useSelector(selectBasketItem)
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotalItems)
    const [valueFormattedWithSymbol] = formatCurrency({ amount: basketTotal, code: "ARS" })

    if(items.length <= 0) return null;

  return (
    <View className ="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=>
      navigation.navigate("Basket")
      } className="bg-[#00ccbb] mx-5 p-4 rounded-lg flex-row items-center space-x-2">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 ">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-gray-100 mt-2 font-bold">{valueFormattedWithSymbol}</Text>
      </TouchableOpacity>
    </View>
  )
}