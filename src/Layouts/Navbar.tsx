import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Sun, Moon, Menu, X, LogOut, Truck, UserPlus, LogIn } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsOpen(false);
    navigate("/login");
  };

  // تنسيق الروابط مع تأثير الـ Active
  const linkStyle = ({ isActive }) => 
    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 
    ${isActive ? "text-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-500"} 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
    after:bg-blue-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 
    ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`;

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate("/")}>
              <div className="p-2 bg-blue-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Truck className="text-white" size={22} />
              </div>
              <h1 className="text-xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">
                Ship<span className="text-blue-500">Smarter</span>
              </h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink to="/" className={linkStyle}>Home</NavLink>
              <NavLink to="/about" className={linkStyle}>About</NavLink>
              <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:ring-2 ring-blue-500/50 transition-all"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700 mx-1" />

              {!isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <NavLink to="/login" className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition">
                    Login
                  </NavLink>
                  <NavLink to="/signup" className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95">
                    Sign Up
                  </NavLink>
                </div>
              ) : (
                <button 
                  onClick={handleLogout} 
                  className="flex items-center gap-2 bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-xl border border-red-500/20 hover:bg-red-500 hover:text-white transition-all"
                >
                  <LogOut size={16} /> <span className="text-sm font-bold">Logout</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 text-gray-600 dark:text-gray-300">
                 {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Animated */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 border-b border-gray-200 dark:border-gray-800" : "max-h-0"}`}>
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white dark:bg-gray-900">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl">Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl">About</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl">Contact</NavLink>
            
            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
              {!isAuthenticated ? (
                <div className="grid grid-cols-2 gap-3">
                  <NavLink to="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl font-bold">
                    <LogIn size={18}/> Login
                  </NavLink>
                  <NavLink to="/signup" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30">
                    <UserPlus size={18}/> Join
                  </NavLink>
                </div>
              ) : (
                <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-3 rounded-xl font-bold">
                  <LogOut size={18} /> Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Spacer */}
      <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Outlet context={{ setIsAuthenticated }} />
      </div>
    </>
  );
};

export default Navbar;