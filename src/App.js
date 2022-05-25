import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<MovieDetailsPage />} />
          <Route path="Mouvies" element={<MoviesPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* <Home /> */}
      {/* -------------------------------- */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="mouvies" element={<Mouvies />} />
      </Routes> */}
      {/* <Link to="/home">Home</Link> |<Link to="/mouvies">Mouvies</Link> */}
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
