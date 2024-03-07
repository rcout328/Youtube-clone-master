import { Link } from "react-router-dom";
import { UserButton, SignOutButton } from "@clerk/clerk-react";
import { useContext } from "react";
import { DarkContext } from "./Context/DarkProvider";
const Navbar = () => {
  const [dark, setDark] = useContext(DarkContext);

  const toggle = () => {
    setDark(!dark);
  };
  return (
    <header className={`${dark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        {/* Logo and Home Link */}
        <Link to="/" className="text-4xl font-bold  ">
          <img
            src="https://imagetolink.com/ib/qP6oA0z9YP.png"
            height={100}
            width={50}
          />
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul
            className={`flex space-x-4 ${dark ? "text-white" : "text-black"}`}
          >
            <li>
              <Link to="/" className=" ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className=" ">
                Search
              </Link>
            </li>
            <li>
              <Link to="/games" className=" ">
                Games
              </Link>
            </li>
            <li>
              <Link to="/music" className=" ">
                Music
              </Link>
            </li>
            <li>
              <Link to="/sports" className=" ">
                Sports
              </Link>
            </li>
            <li>
              <button onClick={toggle} className="">
                {dark ? "Light" : "Dark"}
              </button>
            </li>
            <SignOutButton />
            <UserButton />

            {/* Add additional categories as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
