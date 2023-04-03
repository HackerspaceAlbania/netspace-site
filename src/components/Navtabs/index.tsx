import * as React from "react"
import * as styles from './Navtabs.module.css'
import { Link } from 'gatsby'

const Navtabs = () => {
  return (
    <nav className={styles.navtabsComponent}>
        <Link to="/">Root</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/support">Support Us</Link>
    </nav>
  )
}

export default Navtabs