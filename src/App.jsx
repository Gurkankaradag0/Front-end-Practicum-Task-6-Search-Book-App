import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookDetail from './pages/BookDetail'
import Page404 from './pages/Page404'
import Layout from "./pages/Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />}/>
        <Route path="/:book_id" element={<BookDetail />}/>
        <Route path='*' element={<Page404 />}/>
      </Route>
    </Routes>
  )
}

export default App
