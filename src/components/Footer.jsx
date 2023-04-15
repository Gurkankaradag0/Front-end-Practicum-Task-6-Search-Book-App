import { useBooks } from '../utils/store'
import { useLocation, useParams } from 'react-router-dom'
import classNames  from 'classnames'

function Footer() {
    const books = useBooks()
    const location = useLocation()
    const params = useParams()
    return (
        <div className={classNames({
            "font-semibold text-sm border-t border-solid border-white-300 w-1/2 flex items-center justify-center pt-2": true,
            "mt-20 mb-4": books.length > 0 && (location.pathname === '/' || (Object.keys(params).length > 0 && Object.keys(params).includes('*') === false)),
            "fixed bottom-0 mb-10": (books.length === 0 && location.pathname === '/') || Object.keys(params).includes('*'),
        })}>
            <a 
                href="https://github.com/gurkankaradag0"
                target="_blank"
            >
                Gürkan Karadağ - 2023
            </a>
        </div>
        
    )
}

export default Footer