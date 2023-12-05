// import { Button } from "@/components/ui/button";
// import React, { Children } from "react";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
// import { RatingsCard } from "@/components/shared/RatingsCard";
import { Routes, Route } from "react-router-dom";
import Reviews from "./_root/pages/reviews";
import Home from "./_root/pages/Home";
import Profile from "./_root/pages/profile";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
