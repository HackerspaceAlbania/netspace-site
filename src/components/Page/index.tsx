import React, {ReactNode, FC}  from "react"
import * as styles from './Page.module.css'
import Navtabs from "../Navtabs"

interface PageProps{
    children?: ReactNode;
    title?: string
}

const Page: FC<PageProps> = (props) => {
  return (
    <div className={styles.pageComponent}>
        <Navtabs />
        <h1>{props.title}</h1>
        {props.children}
    </div>
  )
}

export default Page