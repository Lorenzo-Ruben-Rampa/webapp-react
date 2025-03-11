import Homepage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";
import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="/movies/:id" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
