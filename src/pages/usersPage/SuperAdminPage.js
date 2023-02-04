import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMode } from "../../theme";
import { MyProSidebarProvider } from "../../SuperAdminPages/pages/global/sidebar/sidebarContext";
import Topbar from "../../SuperAdminPages/pages/global/Topbar";
const SuperAdminPage = () => {
  const [theme, colorMode] = useMode();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
                
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default SuperAdminPage;
