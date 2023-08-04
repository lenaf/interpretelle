import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"
interface LayoutProps {
  children?: React.ReactNode
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="max-w-screen flex min-h-screen flex-col"
    >
      <Slice alias="header" />
      <main className="relative grow" id="mainContent" role="main">
        <div className="mx-auto pb-overlap pt-20">{children}</div>
      </main>
      <Slice alias="footer" />
    </div>
  )
}

export default Layout
