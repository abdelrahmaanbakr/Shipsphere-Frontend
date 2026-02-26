import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useAppSelector } from "./redux/hookredux";
import { useEffect } from "react";

function App() {
    const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return(
    
    <RouterProvider router={router} />
  ) 
}

export default App;
