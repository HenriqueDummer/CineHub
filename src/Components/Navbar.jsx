import { NavLink } from "react-router";
import Logo from "../assets/logo.png";
import UserIcon from "../assets/user_icon.png";

const liStyle = "hover:text-white cursor-pointer duration-200";

const links = [
  { name: "Home", path: "/" },
  { name: "Discover", path: "/discover" },
  { name: "Search", path: "/search" },
];

const LinkElement = ({ name, path }) => {
  return (
    <li className={liStyle}>
      <NavLink
        className={({ isActive }) =>
          `${liStyle} ${
            isActive ? "text-white font-semibold" : ""
          }`
        }
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-10 py-4 z-50">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="Cine hub logo" />
        <ul className="text-secondary-text flex items-center gap-10">
          {links.map((link) => (
            <LinkElement key={link.name} name={link.name} path={link.path} />
          ))}
        </ul>

        <div className="w-[190px] flex justify-end">
          <img className="w-12" src={UserIcon} alt="User image" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
