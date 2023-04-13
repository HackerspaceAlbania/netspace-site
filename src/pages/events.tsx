import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/Events.module.css'

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
              <div className={styles.eventBox}>
                <div className={styles.date}>
                  <h3>MAY</h3>
                  <h2>22</h2>
                </div>
                <div className={styles.title}>
                  <h3>Hack with Kali in Troja</h3>
                  <p>Thu 6:00-7:00pm </p>
                </div>
                <input type="button" value="ATTEND" />
              </div>
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