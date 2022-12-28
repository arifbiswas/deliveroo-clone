import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
      state.items= [...state.items,action.payload];
    },
    removeFromBasket: (state, action) => {
    const index = state.items.findIndex((item) => item.id === action.payload.id)
    let newBasket = [...state.items];
    // console.log(newBasket)
    if(index >= 0){
      newBasket.splice(index, 1);
      state.items = newBasket;
    }else{
      console.warn(`Cont remove product(id: ${action.payload.id}) as its not in basket`)
    }
   
    },

  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItem = (state) => state.basket.items;
export const selectBasketItemWithId = (state, id) => state.basket.items.filter((item) => item.id === id)
export const selectBasketTotalItems = (state)=> state.basket.items.reduce((total, item)=>total += item.price,0)
export default basketSlice.reducer