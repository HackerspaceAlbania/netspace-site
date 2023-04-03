import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';

const SupportPage = () => {
    const pageTitle = "Support";

  return (
    <Page title={pageTitle}>
    </Page>
  )
}

export default SupportPage

export const Head: HeadFC = () => <title>NetSpace - Support</title>