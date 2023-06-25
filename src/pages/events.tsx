import React, { FC, SetStateAction, useEffect, useState } from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/Events.module.css'
import Event from '../components/Event'
import { getEvents } from '../api/eventbrite';

interface PageProps {
  data?: any
}

const EventsPage: FC<PageProps>  = () => {
    const pageTitle = "Events";
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false)
    const [activeEvent, setActiveEvent] = useState<null|number>(null)

    useEffect(() => {
      setLoading(true);

      getEvents().then((res) => {
        if(res.data){
          res.data.events && setEvents(res.data.events);
        }
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        setLoading(false);
      });
    }, [])

    const handleEventClick = (id: number) => {
      if(activeEvent === id){
        setActiveEvent(null);
      }else{
        setActiveEvent(id);
      }
    };

    return (
      <Page title={pageTitle}>
        <div className={styles.eventsPage}>
          {loading ? (
            <h2>Loading...</h2>
          ) : !events.length ? (
            <h2>No events found</h2>
          ) : (
            <>
              <h2>
                Probably you are here because you will visit us soon, <br /> 
                dont forget to bring your laptop and some cookies!
              </h2>
              <div className={styles.events}>
                {events.map((item: any, i:number) => (
                  <Event 
                  key={i}
                  eventData={item}
                  onClick={() => handleEventClick(i)}
                  isActive={activeEvent === i}
                  />
                ))}
              </div>
              <h2 className="footer">
                Lets hack this together!
              </h2>
            </>
          )}
        </div>
      </Page>
    )
}

export default EventsPage

export const Head: HeadFC = () => <title>NetSpace - Events</title>
