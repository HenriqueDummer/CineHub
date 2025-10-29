import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Search from "./pages/Search";
import Details from "./pages/Details";
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

        {/* Movie/Series details page */}
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
