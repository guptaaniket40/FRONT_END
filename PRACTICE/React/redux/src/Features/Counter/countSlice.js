import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        zero: (state) => {
            state.value = 0
        }
    }
})

// Export action creators
export const { increment, decrement, zero } = countSlice.actions

// Export reducer
export default countSlice.reducer