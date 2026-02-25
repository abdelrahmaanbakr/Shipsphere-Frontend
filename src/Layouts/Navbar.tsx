import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Truck, ArrowRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hookredux";
import { toggleTheme } from "../redux/themeRedux/themeSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const authLinks = [
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
  ];

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-bold transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
      isActive
        ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
        : "text-black dark:text-white"
    }`;

  return (
    <>
      <div className="fixed w-full top-0 z-50 flex justify-center px-4 sm:px-6 py-4">
        <nav
          className={`transition-all duration-500 ease-in-out flex items-center justify-between
            ${scrolled
              ? "w-full max-w-6xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-md border border-gray-200 dark:border-gray-700 px-6 py-2.5 rounded-2xl"
              : "w-full max-w-7xl bg-transparent px-2 py-2 rounded-none"
            }`}
        >
          {/* 1. Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group flex-1"
            onClick={() => navigate("/")}
          >
            <div className="w-9 h-9 flex items-center justify-center bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-500/20">
              <Truck size={18} strokeWidth={2.5} />
            </div>
            <span className="text-lg font-black tracking-tight text-black dark:text-white hidden sm:block">
              Ship<span className="text-blue-600">Smarter</span>
            </span>
          </div>
          
          {/* 2. Main Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {mainLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkStyle}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* 3. Auth & Actions */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <div className="hidden lg:flex items-center gap-6 mr-2 border-r border-gray-300 dark:border-gray-700 pr-6">
              {authLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={linkStyle}>
                  {link.name}
                </NavLink>
              ))}
            </div>

            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="hidden sm:flex items-center gap-1.5 bg-black dark:bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-all active:scale-95 shadow-md shadow-black/10">
              Get Started
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-black dark:text-white"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-4 top-20 z-[49] md:hidden transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-xl">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Navigation</span>
            {mainLinks.map((link) => (
              <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-base font-bold text-black dark:text-white">
                {link.name}
              </NavLink>
            ))}

            <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />

            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Account</span>
            <div className="grid grid-cols-2 gap-3">
              {authLinks.map((link) => (
                <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="flex items-center justify-center py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-bold text-black dark:text-white">
                  {link.name}
                </NavLink>
              ))}
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm mt-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
