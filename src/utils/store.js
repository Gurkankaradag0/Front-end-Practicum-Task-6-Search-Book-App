import { useSelector } from "react-redux"
import store from "../store"
import { _setBooks } from "../store/books"
import { _setMessage } from "../store/messages"

export const useBooks = () => useSelector(state => state.books.books)
export const useBook = (id) => useSelector(state => state.books.books.filter(book => book.id === id)[0])
export const setBooks = (books) => {
    store.dispatch(_setBooks(books))
}

export const useMessage = () => useSelector(state => state.messages.message)
export const setMessage = (message) => {
    store.dispatch(_setMessage(message))
}