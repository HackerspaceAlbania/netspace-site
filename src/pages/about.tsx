import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/About.module.css'
import NetspaceImg from '../images/netspace-wide.png'

const AboutPage = () => {
    const pageTitle = "About Us";

    return (
      <Page title={pageTitle}>
        <div className={styles.aboutPage}>
          <img src={NetspaceImg} alt="" />
          <h1>HISTORY</h1>
          <h3>NetSpace Albania is a community of people just like YOU!</h3>
          <h4>Aiming to learn, share, and help each-other experience building things.</h4>
        </div>
      </Page>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>NetSpace - About</title>