import { Link } from "react-router-dom"
import classNames from 'classnames'

function Book({book, index}) {
  return (
    <li className="origin-top-left skew-y-[-4.4deg] rotate-[-14deg] pt-[150%] z-10 transition-[z-index] duration-300 group hover:z-40">
      <Link to={`/${book.id}`}>
        <div className={classNames({
          "absolute z-20 w-[98%] h-[95%] top-0 rounded-[2vw] rotate-0 translate-x-0 translate-y-0 transition-transform duration-300 drop-shadow-details group-hover:rotate-[14deg] group-hover:translate-x-0 group-hover:translate-y-[10%] group-hover:scale-[1.3]": true,
          "bg-[#d2b48c]": index % 5 === 0,
          "bg-[#871a1a]": index % 5 === 1,
          "bg-[#ff6347]": index % 5 === 2,
          "bg-[#556b2f]": index % 5 === 3,
          "bg-[#008080]": index % 5 === 4,
        })}>
          <h2 className={classNames({
            "absolute z-40 p-[0.4em] top-[3.5%] left-[4%] overflow-hidden font-semibold text-ellipsis whitespace-nowrap max-w-[90%]": true,
            "bg-[#d2b48c]": index % 5 === 0,
            "bg-[#871a1a]": index % 5 === 1,
            "bg-[#ff6347]": index % 5 === 2,
            "bg-[#556b2f]": index % 5 === 3,
            "bg-[#008080]": index % 5 === 4,
          })}>{book.volumeInfo.title}</h2>
          <div className="absolute z-30 w-[88%] h-[91%] top-0 translate-x-[6.5%] translate-y-[5%] rounded-[1.2vw] bg-[#001a23] overflow-hidden">
            {
              book.volumeInfo?.imageLinks?.thumbnail
              ?
                <img
                  className="absolute z-40 h-[110%] left-1/2 -translate-x-1/2 -translate-y-[2%] transition-[height,transform] duration-300"
                  src={book.volumeInfo?.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  loading="lazy"
                />
              :
                <div className="absolute z-40 h-[110%] left-1/2 -translate-x-1/2 -translate-y-[2%] transition-[height,transform] duration-300 flex justify-center items-center">
                  {book.volumeInfo.title}
                </div>
            }
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Book