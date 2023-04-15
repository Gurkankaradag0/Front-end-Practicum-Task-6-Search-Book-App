import { configureStore } from "@reduxjs/toolkit"
import books from "./books"
import messages from "./messages"

const store = configureStore({
    reducer: {
        books,
        messages,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store