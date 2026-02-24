import type { FC } from "react";
import { useAppDispatch } from "../redux/hookredux";
import { navigate } from "../redux/navigateRedux/navigateSlice";
import { ShipIcon } from "../components/icons";
import { FOOTER_COLUMNS } from "../components/data";
import type { FooterColumn } from "../types";

const Footer: FC = () => {
  const dispatch = useAppDispatch();

  const handleNavigate = (path: string) => {
    dispatch(navigate(path)); 
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          <div className="col-span-1 md:col-span-1 mb-6 sm:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ShipIcon />
              </div>
              <span className="font-bold text-lg text-white">
                Ship<span className="text-blue-400">Smarter</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Simplifying logistics for e-commerce. Compare, ship, and track with ease.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col: FooterColumn) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.items.map((item: string) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavigate("about")} // تحديث state فقط
                      className="text-sm sm:text-base hover:text-blue-400 transition-colors w-full text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-xs sm:text-sm text-center sm:text-left">
            © 2026 ShipSmarter Platform. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm mt-2 sm:mt-0">
            {["Terms", "Privacy", "Cookies"].map(label => (
              <button
                key={label}
                className="hover:text-white transition-colors w-full sm:w-auto text-left sm:text-center"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;