import { useState } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useUser } from "../context/user";
import SideBar from "./Sidebar";

const Navbar = (): React.ReactElement => {
  const { user } = useUser();

  const [loggedin, setLoggedin] = useState(false);

  return (
    <>
      <div className="flex items-center border border-b bg-green-200 h-14 ">
        <h2 className="flex-grow text-2xl font-semibold text-green-500 ml-4">
          Tienda en linea
        </h2>
        <div className="flex gap-3 h-full">
          {user ? <p className="flex items-center">{user.userName}</p> : null}
          <button
            className="flex items-center text-green-500 text-sm font-semibold hover:bg-green-300 px-3"
            onClick={() => setLoggedin(!loggedin)}
          >
            {user ? (
              <FaSignOutAlt className="text-green-500 h-5 w-5 inline-block mr-2" />
            ) : (
              <FaSignInAlt className="text-green-500 h-5 w-5 inline-block mr-2" />
            )}
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      <SideBar />
    </>
  );
};

export default Navbar;
