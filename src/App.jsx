import React from 'react'
import './globals.css'
import { ThemeProvider } from "@/contexts/ThemeContext"
import { Route, Routes } from 'react-router'
import AuthLayout from './_auth/AuthLayout'
import Signup from './_auth/forms/Signup'

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="flex h-screen">
        <Routes>

          {/* public routes */}
          <Route element={<AuthLayout />}>
            {/* <Route path="/signin" element={<SigninForm />} /> */}
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* private routes */}
          {/*           <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/updatepost/:id" element={<EditPost />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/profile/:id/*" element={<Profile />} />
            <Route path="/updateprofile/:id" element={<UpdateProfile />} />
            <Route path="/likedposts/:id" element={<LikedPosts />} />
            <Route path="/ratings/:id" element={<Ratings />} />
          </Route> */}
        </Routes>
        {/* <Toaster /> */}
      </main>
    </ThemeProvider>
  )
}

export default App