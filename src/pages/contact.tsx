import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';

const ContactPage = () => {
    const pageTitle = "Contact";

    return (
      <Page title={pageTitle}>
      </Page>
    )
}

export default ContactPage

export const Head: HeadFC = () => <title>NetSpace - Contact</title>