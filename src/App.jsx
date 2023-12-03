import { Button } from '@/components/ui/button'
import React, { Children } from 'react'
import './globals.css'
import { ThemeProvider } from "@/contexts/ThemeContext"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='text-[48px]'>WHTAA</div>
    </ThemeProvider>
  )
}

export default App