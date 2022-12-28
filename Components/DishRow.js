import { View, Text,TouchableOpacity, Image } from 'react-native'
import {React, useState} from 'react'
import { formatCurrency } from "react-native-format-currency";
import { AntDesign } from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItem, selectBasketItemWithId } from '../Features/basketSlice';
export default function DishRow({id,name,description,price,image}) {
    const dispatch = useDispatch();
    const [valueFormattedWithSymbol] = formatCurrency({ amount: price, code: "ARS" })
    const [isPressed,setIsPressed] = useState(false)
    const items = useSelector((state)=>selectBasketItemWithId(state,id))
    const addItemToBasket = ()=>{
        dispatch(addToBasket({id,name,description,price,image}))
    }
    // console.log(items);
    const removeItemsFromBasket = ()=>{
        if(!items.length > 0) return ;
        dispatch(removeFromBasket({id}))
    };
  return (
   <>
     <TouchableOpacity
     onPress={()=>setIsPressed(!isPressed)}
      className={`bg-white border ${isPressed && "border-b-0"} p-4 border-gray-200 flex-row items-center space-x-2`}>
      <View className="flex-row">
      <View className="flex-1 pr-2">
        <Text className=" text-lg mb-1">{name}</Text>
        <Text className="text-gray-400 text-xs">{description}</Text>
        <Text className="text-gray-400 mt-2">{valueFormattedWithSymbol}</Text>
      </View>
      
            <Image
            style={{
                borderWidth : 1,
                borderColor : "#F3F3F4"
            }}
            className ="h-20 w-24 bg-gray-300 p-4 rounded-md"
            source={{
                uri : image
            }}
             />
        </View>
    </TouchableOpacity>
    {
        isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3 ">
                    <TouchableOpacity
                    disabled={!items.length}
                    onPress={removeItemsFromBasket}
                    >
                    <AntDesign name="minuscircle" size={30} 
                    color={items.length> 0 ?`#00ccbb` : "gray"}
                     />
                    </TouchableOpacity>
                    <Text>{items.length}</Text>
                    <TouchableOpacity
                     onPress={addItemToBasket}
                    >
                    <AntDesign name="pluscircle" size={30} color="#00ccbb" />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
   </>
  )
}