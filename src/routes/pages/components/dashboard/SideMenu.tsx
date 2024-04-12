import { Avatar, Divider, Drawer, useTheme } from "@mui/material"
import { Box, width } from "@mui/system";
import { AppThemeProvider } from "../../../../assets/contexts/ThemeContext";

interface IMenuLateralProps {
    children: React.ReactNode;
}

export const SideMenu: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    return (
        <AppThemeProvider>
            <Drawer variant="permanent">
                <Box width={theme.spacing(30)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar sx={{ width: "220px", height: "70px" }} variant="square" src="https://visionaespacial.com/wp-content/themes/VisionaEspacial/assets/img/logo-branca-completa.svg" />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        Teste
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(35)}>
                {children}
            </Box>
        </AppThemeProvider>
    );
}