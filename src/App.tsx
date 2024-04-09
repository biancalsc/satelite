import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./assets/contexts/ThemeContext";

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
      </BrowserRouter>
    </AppThemeProvider>
  )
};

export default App;
