import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  image : []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      const data = () => {
        return 1
      }

     
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += data()
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    showimages : (state) => {
      const images = ["image1" , "image2" , "image3"]

     state.image = images
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,showimages } = counterSlice.actions

export default counterSlice.reducer