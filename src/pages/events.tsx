import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/Events.module.css'
import Event from '../components/Event'

const EventsPage = () => {
    const pageTitle = "Events";
    const events = [1, 2, 3, 2, 3, 2, 3];

    return (
      <Page title={pageTitle}>
        <div className={styles.eventsPage}>
          <h2>
            Probably you are here because you will visit us soon, <br /> 
            dont forget to bring your laptop and some cookies!
          </h2>
          <div className={styles.events}>
            {events.map(i => (
              <Event />
            ))}
          </div>
          <h2 className="footer">
            Lets hack this together!
          </h2>
        </div>
      </Page>
    )
}

export default EventsPage

export const Head: HeadFC = () => <title>NetSpace - Events</title>