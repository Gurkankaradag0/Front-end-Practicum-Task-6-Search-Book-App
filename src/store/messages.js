import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    message: ''
}

const messages = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        _setMessage: (state, action) => {
            state.message = action.payload
        },
    }
})

export const {_setMessage} = messages.actions
export default messages.reducer