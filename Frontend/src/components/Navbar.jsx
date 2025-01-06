import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/services", label: "Services" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
  ];

  return (
    <nav className="flex gap-4">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="no-underline hover:underline"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
