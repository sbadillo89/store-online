import { NavLink } from "react-router-dom";
import { MdHome, MdGroup, MdLoyalty } from "react-icons/md";

const navItems: {
  label: string;
  path: string;
  icon: React.VFC<{ className: string }>;
}[] = [
  {
    label: "Inicio",
    path: "/",
    icon: MdHome,
  },
  {
    label: "Productos",
    path: "/products",
    icon: MdLoyalty,
  },
  {
    label: "Acerca de",
    path: "/about",
    icon: MdGroup,
  },
];
const SideBar = (): React.ReactElement => {
  return (
    <div className="w-56 h-full pt-4 border-r">
      <ul>
        {navItems.map((item) => (
          <li key={item.label} className="px-3 py-1">
            <NavLink
              className="flex p-2 hover:bg-green-100 rounded-md"
              to={item.path}
              activeClassName="text-gray-800 shadow-navlink border border-green-600 bg-green-200"
              exact
            >
              <item.icon className="mr-2 h-6 w-6 text-green-600" />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
