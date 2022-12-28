import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../Features/restaurantSlice";
import { removeFromBasket, selectBasketItem } from "../Features/basketSlice";
import { AntDesign, FontAwesome5, Octicons,EvilIcons } from "@expo/vector-icons";
import { formatCurrency } from "react-native-format-currency";

export default function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItem);
  const [groupItemInBasket, setGroupItemInBasket] = useState([]);

  const dispatch = useDispatch();
  useMemo(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupItemInBasket(groupItems);
  }, [items]);
  console.log(groupItemInBasket);
  if(items.length <1){
    return navigation.goBack;
  }
  const [valueFormattedWithSymbol] = formatCurrency({  amount: items[0]?.price, code: "ARS"  })
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100 ">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-md">
          <View className=" ">
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-5 right-5 bg-white rounded-full p-1"
          >
            <AntDesign name="closecircle" size={35} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5"> 
          <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
           source={{
            uri: "https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591"
          }}/>
          <Text className="flex-1">Deliver on 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {
            Object.entries(groupItemInBasket).map(([key,items] )=>(
              <View key={key} className="flex-row items-center space-x-3 bg-white px-5 py-2">
                <Text className="text-[#00ccbb]">{items.length} X</Text>
                <Image source={{
                  uri: items[0]?.image
                }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">
                {items[0]?.name}

                </Text>
                <Text className="text-gray-400 mt-2">
                  {valueFormattedWithSymbol}
                </Text>
                <TouchableOpacity
                    >
                   <Text
                   className=" flex items-center px-2"
                   onPress={()=>dispatch(removeFromBasket({id:key}))}
                   ><FontAwesome5 name="trash" size={20} color="red" /></Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </ScrollView>
        <View>
          <View>
            <Text>Subtotal</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
