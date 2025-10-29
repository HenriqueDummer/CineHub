import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="w-full h-dvh bg-black">
      <Navbar />
      {<Outlet />}
    </div>
  );
};

export default RootLayout;
