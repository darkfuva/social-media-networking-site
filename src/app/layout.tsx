"use client"
import './globals.css'
import AppHeader from './header/page'
import Sidebar from './left-sidebar/page'
import { ThemeProvider } from "styled-components";
import {GlobalStyles, lightTheme} from '../themes/ThemeConfig'
import styles from "./page.module.css"
import RightSidebar from './right-sidebar/page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={`${styles.bodyDefault}`}>
      
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <AppHeader></AppHeader>
        <div className={`${styles.layout}`}>

        <Sidebar></Sidebar>
        {children}
        <RightSidebar></RightSidebar>
        </div>
      </ThemeProvider>
        </body>
    </html>
  )
}
