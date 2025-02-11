import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails'
import Error404 from './pages/Error404'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
