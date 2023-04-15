import { memo } from "react"
import Book from "./Book"

function Books({books}) {
  return (
    <div className="flex justify-center items-center w-3/4 flex-col">
      <ul className="w-full grid grid-cols-[repeat(1,1fr)] origin-top-left mt-[20%] mr-[25%] mb-0 ml-[2%] skew-y-[4.4deg] min-[300px]:gap-x-[3vw] min-[300px]:mt-[10vw] min-[300px]:mr-[24vw] min-[300px]:ml-[2vw] min-[600px]:grid-cols-[repeat(2,1fr)] min-[600px]:gap-x-[2vw] min-[600px]:mt-[8vw] min-[600px]:mr-[10vw] min-[600px]:ml-[1vw] min-[900px]:grid-cols-[repeat(3,1fr)] min-[900px]:gap-x-[1.5vw] min-[900px]:mt-[6vw] min-[900px]:mr-[7.5vw] min-[900px]:ml-[0.5vw] min-[1200px]:grid-cols-[repeat(4,1fr)] min-[1200px]:gap-x-[1vw] min-[1200px]:mt-[4.5vw] min-[1200px]:mr-[6vw] min-[1200px]:ml-[0.5vw] min-[1500px]:grid-cols-[repeat(5,1fr)] min-[1500px]:gap-x-[1vw] min-[1500px]:mt-[4vw] min-[1500px]:mr-[6vw] min-[1500px]:ml-[0.5vw]">
        {
          books.map((book, index) => (
            <Book key={index} book={book} index={index} />
          ))
        }
      </ul>
    </div>
  )
}

export default memo(Books)