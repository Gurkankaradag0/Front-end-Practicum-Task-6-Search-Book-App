import axios from 'axios'

const GetBook = async (value) => {
    try{
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=40&key=${import.meta.env.VITE_API_KEY}`)
        return data
    }
    catch(e) {
        return false
    }
}

export default GetBook