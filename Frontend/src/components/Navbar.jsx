import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link
        to="/"
        className="p-3 mt-4 text-white rounded bg-lime-600 hover:text-lime-700 hover:font-bold"
      >
        Home
      </Link>

      <Link
        to="/contact"
        className="p-3 mt-4 text-white rounded bg-lime-600 hover:text-lime-700 hover:font-bold"
      >
        Contact
      </Link>
      <Link
        to="/services"
        className="p-3 mt-4 text-white rounded bg-lime-600 hover:text-lime-700 hover:font-bold"
      >
        Services
      </Link>
      <Link
        to="/login"
        className="p-3 mt-4 text-white rounded bg-lime-600 hover:text-lime-700 hover:font-bold"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="p-3 mt-4 text-white rounded bg-lime-600 hover:text-lime-700 hover:font-bold"
      >
        Signup
      </Link>
    </div>
  );
};

export default Navbar;
