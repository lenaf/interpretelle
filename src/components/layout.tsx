import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"
interface LayoutProps {
  children?: React.ReactNode
  path?: string;
}


const Layout: React.FC<LayoutProps> = ({ children, path }) => {
  return (
    <div
      className="max-w-screen flex min-h-screen flex-col"
    >
      <Slice path={path} alias="header" />
      <main className="relative grow" id="mainContent" role="main">
        <div className="mx-auto pb-overlap pt-20">{children}</div>
      </main>
      <Slice alias="footer" />
    </div>
  )
}

export default Layout
