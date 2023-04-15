import { useParams } from 'react-router-dom'
import { useBook } from '../utils/store'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Scroll from 'react-scroll'

function BookDetail() {
    const { book_id } = useParams()
    const book = useBook(book_id)
    const navigate = useNavigate()
    const scroll = Scroll.animateScroll
    useEffect(() => {
        scroll.scrollToTop()
        !book && navigate('*')
    }, [])
    if (!book) return (<></>)
    return (
        <>
            <Helmet>
                <title>Search Book App - {book?.volumeInfo?.title}</title>
            </Helmet>
            <div className='bg-white-200 flex items-center max-w-[650px] p-[50px] rounded-2xl text-white-900 flex-col text-center m-[0_40px] w-[90%] my-10'>
                {
                    book.volumeInfo?.imageLinks?.thumbnail &&
                    <img
                        className="max-w-[280px] h-[300px] object-cover rounded-xl shadow-img m-[-100px_0_30px_0] w-auto"
                        src={book.volumeInfo?.imageLinks?.thumbnail}
                        alt={book.volumeInfo.title}
                        loading="lazy"
                    />
                }
                <div>
                    <h2 className='font-bold text-2xl mb-8'>{book.volumeInfo.title}</h2>
                    {
                        book.volumeInfo?.authors?.length > 0 &&
                        <h2 className='text-sm font-semibold mb-2'>{book.volumeInfo.authors.join(' - ')}</h2>
                    }
                    {
                        book.volumeInfo?.publishedDate &&
                        <h2 className='text-sm font-semibold mb-2'>{book.volumeInfo.publishedDate}</h2>
                    }
                    {
                        book.volumeInfo?.description &&
                        <p>
                            {
                                book.volumeInfo.description
                            }
                        </p>
                    }
                </div>
            </div>
        </>
    )
}

export default BookDetail