import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Catalog from "./Components/Catalog";
import Search from "./pages/Search/Search";
import Details from "./pages/Details";
import RootLayout from "./pages/RootLayout";
import Series from "./pages/Series/Series";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Home page */}
        <Route path="/home" element={<Home />} />

        {/* Movies page */}
        <Route path="/movies" element={<Catalog />} />

        {/* Series page */}
        <Route path="/series" element={<Series />} />

        {/* Search page */}
        <Route path="/search" element={<Search />} />

        {/* Movie/Series details page */}
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
