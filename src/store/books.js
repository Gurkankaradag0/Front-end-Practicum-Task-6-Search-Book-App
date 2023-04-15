import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    books: []
}

const books = createSlice({
    name: 'books',
    initialState,
    reducers: {
        _setBooks: (state, action) => {
            state.books = action.payload
        },
    }
})

export const {_setBooks} = books.actions
export default books.reducer