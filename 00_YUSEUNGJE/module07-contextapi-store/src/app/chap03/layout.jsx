"use client";

import ThemeProvider from "./contexts/ThemeContext";

function Layout({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
