import { Outlet } from "react-router-dom"
import { useState } from "react"
import Footer from '../components/Footer'
import Header from "../components/Header"
import ScrollToTop from "../components/ScrollToTop"

import GetData from '../services/GetBook'
import { setBooks, setMessage } from '../utils/store'

import { start, stop } from '../utils/animate'

function Layout() {
    const [value, setValue] = useState('')
  
    const getData = async () => {
      if (!value) return false
      setMessage('')
      start()
      setValue('')
      const data = await GetData(value)
      if (data && data?.items) {
        setBooks(data.items)
      }
      else {
        setBooks([])
        setMessage('Aranan sonuç bulunamadı...')
      }
      stop()
    }
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <Header value={value} setValue={setValue} cb={getData}/>
            <Outlet />
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Layout