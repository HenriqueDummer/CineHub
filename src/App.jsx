import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Catalog from "./Components/Catalog";
import Search from "./pages/Search/Search";
import Details from "./pages/Details/Details"
import RootLayout from "./pages/RootLayout";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Movies page */}
        <Route path="/movies" element={<Catalog />} />

        {/* Series page */}
        <Route path="/series" element={<Catalog />} />

        {/* Search page */}
        <Route path="/search" element={<Search />} />

        {/* Series details page */}
        <Route path="/tv_series/details/:id" element={<Details />} />

        {/* Move details page */}
        <Route path="/movie/details/:id" element={<Details isMovie />} />

      </Route>
    </Routes>
  );
}

export default App;
