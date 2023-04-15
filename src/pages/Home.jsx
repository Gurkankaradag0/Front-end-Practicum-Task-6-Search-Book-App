import { Helmet } from "react-helmet"
import Books from "../components/Books"
import { useMessage, useBooks } from '../utils/store'

function Home() {
    const message = useMessage()
    const books = useBooks()
    return (
        <>
            <Helmet>
                <title>Search Book App</title>
            </Helmet>
            {
                message && 
                <div className="bg-white-200 w-2/5 rounded-2xl flex items-center px-8 py-4 mb-4 text-white-900 font-semibold text-lg">
                    {message}
                </div>
            }
            {
                books.length > 0 && <Books books={books} />
            }
        </>
    )
}

export default Home