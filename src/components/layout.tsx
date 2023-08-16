import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

interface LayoutProps {
  children?: React.ReactNode
  path?: string;
}


const Layout: React.FC<LayoutProps> = ({ children, path }) => {
  const breakpoints = useBreakpoint();

  return (
    <div
      className="max-w-screen flex min-h-screen flex-col"
    >
      <Slice path={path} alias="header" />
      <main className="relative grow" id="mainContent" role="main">
        <div className={`mx-auto pb-overlap ${breakpoints.xs ? 'pt-36' : 'pt-20'}`}>{children}</div>
      </main>
      <Slice alias="footer" />
    </div>
  )
}

export default Layout
