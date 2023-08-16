import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const navWrapper = style({
    position: "relative",
    zIndex: 1,
    paddingTop: '16px',
    paddingBottom: '16px',
})

export const mobileNavOverlay = style({
    position: "absolute",
    width: "100vw",
    height: "100vh",
    paddingTop: theme.space[4],
    background: theme.colors.primary,
    zIndex: 1,
})

export const mobileNavLink = style({
    display: "block",
    color: theme.colors.background,
    fontSize: theme.fontSizes[4],
    paddingTop: theme.space[2],
    paddingBottom: theme.space[2],
    paddingLeft: theme.space[4],
    paddingRight: theme.space[4],
})
