import Homepage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";
import CreateMoviePage from "./pages/CreateMoviePage";
import NotFoundPage from "./pages/NotFoundPage";
import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<Homepage />} />
          <Route index path="/movies/create" element={<CreateMoviePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
