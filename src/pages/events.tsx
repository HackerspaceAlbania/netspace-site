import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';

const EventsPage = () => {
    const pageTitle = "Events";

    return (
      <Page title={pageTitle}>
      </Page>
    )
}

export default EventsPage

export const Head: HeadFC = () => <title>NetSpace - Events</title>