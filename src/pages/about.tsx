import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';

const AboutPage = () => {
    const pageTitle = "About";

    return (
      <Page title={pageTitle}>
      </Page>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>NetSpace - About</title>