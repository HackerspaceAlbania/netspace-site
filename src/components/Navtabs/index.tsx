import * as React from "react"
import * as styles from './Navtabs.module.css'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri'
import { MdCrisisAlert } from 'react-icons/md'
import { GiPayMoney } from 'react-icons/gi'
import { GoProject } from 'react-icons/go'
import { BiSpreadsheet } from 'react-icons/bi'
import { FaMailBulk } from 'react-icons/fa'
import nsaWhite from '../../images/nsa-w.png'
import nsaBlue from '../../images/nsa-b.png'

const Navtabs = () => {
  const location = useLocation();
  const [isRootPath, setIsRootPath] = React.useState(location?.pathname === "/")
  const [expandedMenu, setExpandedMenu] = React.useState(false)

  React.useEffect(() => {
    setIsRootPath(location?.pathname === "/");
  }, [location])
  
  const toggleMenu = () => {
    if(expandedMenu){
      setExpandedMenu(false)
    }else{
      setExpandedMenu(true)
    }
  }

  const closeMenu = () => {
      setExpandedMenu(false)
  }

  return (
    <>
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

      <div className={styles.mobileNav}>
        <nav>
          <span onClick={toggleMenu} className={styles.toggle}>
            {expandedMenu ? (
              <RiMenuFoldLine />
            ):(
              <RiMenuUnfoldLine/>
            )}
          </span>

          <span className={styles.divider}></span>

          <Link onClick={closeMenu} to="/" className={isRootPath ? styles.rootActive : styles.root}><img src={isRootPath ? nsaBlue : nsaWhite} /></Link>
          <Link onClick={closeMenu} to="/projects" className={location?.pathname === "/projects/" ? styles.active : ""}><GoProject /></Link>
          <Link onClick={closeMenu} to="/events" className={location?.pathname === "/events/" ? styles.active : ""}><MdCrisisAlert /></Link>
          <Link onClick={closeMenu} to="/about" className={location?.pathname === "/about/" ? styles.active : ""}><BiSpreadsheet /></Link>
          <Link onClick={closeMenu} to="/contact" className={location?.pathname === "/contact/" ? styles.active : ""}><FaMailBulk /></Link>
          <Link onClick={closeMenu} to="/support" className={location?.pathname === "/support/" ? styles.active : ""}><GiPayMoney /></Link>
        </nav>
      </div>
      <div className={`${styles.fullMenu} ${expandedMenu && styles.expanded}`}>
        <Link onClick={closeMenu} to="/" className={location?.pathname === "/" ? styles.active : ""}>Root</Link>
        <Link onClick={closeMenu} to="/projects" className={location?.pathname === "/projects/" ? styles.active : ""}>Projects</Link>
        <Link onClick={closeMenu} to="/events" className={location?.pathname === "/events/" ? styles.active : ""}>Events</Link>
        <Link onClick={closeMenu} to="/about" className={location?.pathname === "/about/" ? styles.active : ""}>About</Link>
        <Link onClick={closeMenu} to="/contact" className={location?.pathname === "/contact/" ? styles.active : ""}>Contact</Link>
        <Link onClick={closeMenu} to="/support" className={location?.pathname === "/support/" ? styles.active : ""}>Support Us</Link>
      </div>
    </>
  )
}

export default Navtabs