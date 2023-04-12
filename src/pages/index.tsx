import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Page from "../components/Page"
import qrCode from '../images/qr-code.png'
import * as styles from '../styles/Root.module.css'

const IndexPage: React.FC<PageProps> = () => {
  const pageTitle = "Root";

  return (
    <Page title={pageTitle}>
      <div className={styles.rootPage}>
        <div className={styles.flexbox}>
          <span></span>
          <h2>
            "Two years from now, spam will be solved."
            <br /> 
            ~ Bill Gates, 2004
          </h2>
          <div className={styles.imgBox}>
            <img src={qrCode} alt="" />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>NetSpace - Root</title>