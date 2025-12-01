import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Catalog from "./Components/Catalog";
import Search from "./pages/Search/Search";
import Details from "./pages/Details/Details"
import RootLayout from "./pages/RootLayout";
import Series from "./pages/Discover/Discover";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Series page */}
        <Route path="/discover" element={<Series />} />

        {/* Search page */}
        <Route path="/search" element={<Search />} />

        {/* Series details page */}
        <Route path="/tv_series/details/:id" element={<Details />} isMovie={false} />

        {/* Move details page */}
        <Route path="/movie/details/:id" element={<Details isMovie />} />

      </Route>
    </Routes>
  );
}

export default App;
