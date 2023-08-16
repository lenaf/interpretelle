import * as React from "react"
import clsx from 'clsx';
import { graphql, useStaticQuery } from "gatsby"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  NavLink,
  Button,
  InteractiveIcon,
  VisuallyHidden,
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  navWrapper,
} from "./header.css"
import NavItemGroup, { NavItemGroupNavItem } from "./nav-item-group"
import Logo from "./logo";
import { colors } from "../colors.css";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

type NavItem = {
  id: string
  navItemType: "Link"
  href: string
  text: string
}

type NavItemGroup = {
  id: string
  navItemType: "Group"
  name: string
  navItems: NavItemGroupNavItem[]
}

interface HeaderData {
  layout: {
    header: {
      id: string
      navItems: NavItem[] | NavItemGroup[]
      cta: {
        id: string
        href: string
        text: string
      }
    }
  }
}

export default function Header(props) {
  const data: HeaderData = useStaticQuery(graphql`
    query {
      layout {
        header {
          id
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
            }
            ... on NavItemGroup {
              name
              navItems {
                id
                href
                text
                description
                icon {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
          cta {
            id
            href
            text
          }
        }
      }
    }
  `)

  const { navItems, cta } = data.layout.header
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  const [scrolledDown, setScrolledDown] = React.useState(false);

  const handleScroll = () => {
    setScrolledDown(window.scrollY > 50);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Trigger handler on mount to account for reloads
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const breakpoints = useBreakpoint();

  return (
    <header className={clsx([
      'fixed w-full z-40 bg-white backdrop-blur-lg backdrop-filter duration-500',
      scrolledDown ? 'bg-opacity-90' : 'bg-opacity-90',
    ])}>
      <Container className={navWrapper}>
        <Flex wrap={false} variant={breakpoints.xs ? "column" : "spaceBetween"}>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <Logo />
          </NavLink>
          {!breakpoints.sm && <nav>
            <FlexList gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    {navItem.navItemType === "Group" ? (
                      <NavItemGroup
                        name={navItem.name}
                        navItems={navItem.navItems}
                      />
                    ) : (
                      <NavLink to={navItem.href}><div style={props.path?.includes(navItem.href) ? { color: colors.primary } : {}}>{navItem.text}</div></NavLink>
                    )}
                  </li>
                ))}
            </FlexList>
          </nav>}
          <div>{cta && <Button to={cta.href}>{cta.text}</Button>}</div>
          {breakpoints.sm && <InteractiveIcon
            title="Toggle menu"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </InteractiveIcon>}
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  {navItem.navItemType === "Group" ? (
                    <NavItemGroup
                      name={navItem.name}
                      navItems={navItem.navItems}
                    />
                  ) : (
                    <NavLink to={navItem.href} className={mobileNavLink}>
                      {navItem.text}
                    </NavLink>
                  )}
                </li>
              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}
