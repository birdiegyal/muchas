import React from 'react'
import './globals.css'
import { ThemeProvider } from "@/contexts/ThemeContext"
import { Route, Routes } from 'react-router'
import AuthLayout from './_auth/AuthLayout'
import Signup from './_auth/forms/Signup'
import Signin from './_auth/forms/Signin'
import Home from './_root/pages/Home'
import RootLayout from './_root/RootLayout'
import 'mapbox-gl/dist/mapbox-gl.css'
import MerchSignup from './_auth/forms/MerchSignup'
// import AsyncAutoSuggest from './components/shared/AsyncAutoSuggest2'
import OnBoard from './_auth/forms/OnBoard'
import AddressInput from './components/shared/AddyInput'
import ProfileCard from './components/shared/ProfileCard'

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="flex h-screen">
        <Routes>

          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/merchsignup" element={<MerchSignup />} />
            <Route path="/onboard" element={<OnBoard />} />
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/addy" element={<AddressInput />} />
            <Route path="/allusers" element={<ProfileCard />} />

            {/* <Route path="/explore" element={<Explore />} />
            <Route path="/updatepost/:id" element={<EditPost />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/profile/:id/*" element={<Profile />} />
            <Route path="/updateprofile/:id" element={<UpdateProfile />} />
            <Route path="/likedposts/:id" element={<LikedPosts />} />
            <Route path="/ratings/:id" element={<Ratings />} /> */}
          </Route>
        </Routes>
        {/* <Toaster /> */}
      </main>
    </ThemeProvider>
  )
}

export default App