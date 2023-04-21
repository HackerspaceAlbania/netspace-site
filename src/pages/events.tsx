import React, { FC, useState } from 'react'
import Page from '../components/Page';
import { HeadFC, graphql } from 'gatsby';
import * as styles from '../styles/Events.module.css'
import Event from '../components/Event'

interface PageProps {
  data?: any
}

const EventsPage: FC<PageProps>  = ({ data }) => {
    const pageTitle = "Events";
    const events = data.allMdx.nodes;
    const [activeEvent, setActiveEvent] = useState("")

    return (
      <Page title={pageTitle}>
        <div className={styles.eventsPage}>
          <h2>
            Probably you are here because you will visit us soon, <br /> 
            dont forget to bring your laptop and some cookies!
          </h2>
          <div className={styles.events}>
            {events.map((item: any) => (
              <Event 
                key={item.id}
                eventData={item.frontmatter}
                body={item.body}
                onClick={() => setActiveEvent(item.id)}
                isActive={activeEvent === item.id}
              />
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

export const eventsQuery = graphql`
  query{
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          title
          date
          time
          location
          speaker
        }
        body
      }
    }
  }
`