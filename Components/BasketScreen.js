import { View, Text } from 'react-native'
import React ,{useMemo, useState}from 'react'
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../Features/restaurantSlice';
import { selectBasketItem } from '../Features/basketSlice';
export default function BasketScreen() {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItem)
    const [groupItemInBasket, setGroupItemInBasket] = useState([])
    const dispatch = useDispatch();
    useMemo(()=>{
        const groupItems = items.reduce(()=>{
            (results[item.id] = results[item.id] || []).push(item);
            return results ;
        },0)
        setGroupItemInBasket(groupItems)
    },[items])
    console.log(groupItemInBasket);
  return (
    <View className = "mt-12">
      <Text>BasketScreen</Text>
    </View>
  )
}