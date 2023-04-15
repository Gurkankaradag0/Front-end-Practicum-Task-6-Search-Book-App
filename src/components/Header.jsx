import { Icon } from '../Icons'
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

function Header({value, setValue, cb}) {
  const location = useLocation()
  const bookDetail = useMemo(() => (location.pathname !== '/'), [location])

  const submitHandle = (e) => {
    e.preventDefault()
    cb()
  }

  return (
    <div className='flex justify-center items-center mt-4 flex-col gap-8 mb-10'>
      <span className='font-extrabold text-5xl max-sm:text-3xl max-md:text-4xl z-10 uppercase'>Book Search App</span>
      <div className='flex justify-center items-center gap-16 relative'>
        {
          bookDetail &&
          <Link to="/" className='flex justify-center items-center w-20 h-10 text-white-950 rounded-md bg-white-50 pl-2'><Icon name="leftArrow" size={32}/></Link>
        }
        {
          !bookDetail &&
          <form 
            onSubmit={submitHandle}
            className="relative"
          >
            <label 
              htmlFor='search-input'
              className='absolute w-12 h-10 top-0 left-0 flex justify-center items-center'
            >
              <Icon name="search" size={32}/>
            </label>
            <input 
              id='search-input'
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none pl-12 px-4 py-2 font-semibold text-xl border-b-2 border-solid border-white-50 mb-4 placeholder:text-white-300"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        }

      </div>
    </div>
  )
}

export default Header