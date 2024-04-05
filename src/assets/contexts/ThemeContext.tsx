import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { darktheme } from "../themes/Dark";
import { lighttheme } from "../themes/Light";
import { Box, ThemeProvider } from "@mui/material";

interface IThemeContextData{
    themeName: 'light' | 'dark';
    toggleTheme:() => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC = ({children}) =>{
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(()=>{
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark':'light');
    },[]);

    const theme = useMemo(()=>{
        if (themeName === 'light')return lighttheme;
        return darktheme;
    },[themeName]);

    return(
        <ThemeContext.Provider value={{themeName,toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}