// ThemeContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. نبحث في التخزين أولاً
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "dark" || stored === "light") return stored;
    
    // 2. إذا لم يوجد شيء، اجعل الافتراضي light دائماً (تجاهل النظام)
    return "light"; 
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // مسح كل الكلاسات المتعلقة بالثيم أولاً
    root.classList.remove("light", "dark");
    
    // إضافة الثيم المختار فقط
    root.classList.add(theme);

    // حفظه في المتصفح
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};