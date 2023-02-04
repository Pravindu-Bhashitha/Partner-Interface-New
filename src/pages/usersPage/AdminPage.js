import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMode } from "../../theme";
import { MyProSidebarProvider } from "../../AdminPages/pages/global/sidebar/sidebarContext";
import Topbar from "../../AdminPages/pages/global/Topbar";
const AdminPage = () => {
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

export default AdminPage;
