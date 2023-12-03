import { Button } from '@/components/ui/button'
import React, { Children } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import './globals.css'
import { ThemeProvider } from "@/contexts/ThemeContext"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App