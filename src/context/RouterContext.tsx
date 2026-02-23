import { createContext, useContext, useState, useCallback, type FC, type ReactNode } from "react";
import type { PageId, RouterContextValue , } from "../types";


// ── Context ──────────────────────────────────────────────────────────────────
export const RouterContext = createContext<RouterContextValue>({
  page: "home",
  navigate: () => {},
});

export const useRouter = (): RouterContextValue => useContext(RouterContext);

// ── Provider ─────────────────────────────────────────────────────────────────
export const RouterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [page, setPage] = useState<PageId>("home");

  const navigate = useCallback((p: PageId): void => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <RouterContext.Provider value={{ page, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
    