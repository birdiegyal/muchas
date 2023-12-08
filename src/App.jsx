import React from "react";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Route, Routes } from "react-router";
import AuthLayout from "./_auth/AuthLayout";
import Signup from "./_auth/forms/Signup";
import Signin from "./_auth/forms/Signin";
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import "mapbox-gl/dist/mapbox-gl.css";
import MerchSignup from "./_auth/forms/MerchSignup";
import Profile from "./_root/pages/profile";
import EditProfile from "./components/shared/EditProfile";
import Notfound from "./_root/pages/Notfound";
import WriteReview from "./components/shared/WriteReview";
import OnBoard from "./_auth/forms/OnBoard";
import CreateOffer from './_root/pages/CreateOffer'
import StoreProfile from "./_root/pages/StoreProfile";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex h-screen">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />} errorElement={<Notfound />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/onboard" element={<OnBoard />} />
            <Route path="/merchsignup" element={<MerchSignup />} />
            <Route path="*" element={<Notfound />} />
          </Route>
          
          {/* private routes */}
          <Route element={<RootLayout />} errorElement={<Notfound />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/writereview" element={<WriteReview />} />
            <Route path="/createoffer" element={<CreateOffer />} />
            <Route path="/visitstore" element={<StoreProfile />} />
          </Route>
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
