import * as React from "react"
import * as styles from './Navtabs.module.css'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';

const Navtabs = () => {
  const location = useLocation();

  console.log(location)

  return (
    <div className={styles.navtabsComponent}>
      <nav>
        <Link to="/" className={location?.pathname === "/" ? styles.active : ""}>Root</Link>
        <Link to="/projects" className={location?.pathname === "/projects/" ? styles.active : ""}>Projects</Link>
        <Link to="/events" className={location?.pathname === "/events/" ? styles.active : ""}>Events</Link>
        <Link to="/about" className={location?.pathname === "/about/" ? styles.active : ""}>About</Link>
        <Link to="/contact" className={location?.pathname === "/contact/" ? styles.active : ""}>Contact</Link>
        <Link to="/support" className={location?.pathname === "/support/" ? styles.active : ""}>Support Us</Link>
      </nav>
    </div>
  )
}

export default Navtabs