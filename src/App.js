import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const Cast = lazy(() => import("./pages/Cast"));
const Reviews = lazy(() => import("./pages/Reviews"));
const NotFound = lazy(() => import("./pages/NotFound"));
// const Loader = lazy(() => import("./components/Loader/Loader"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...LOADING</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="mouvies" element={<MoviesPage />} />

            <Route path="mouvies/:id" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
