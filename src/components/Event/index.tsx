import React, { FC } from 'react'
import  * as styles  from './Event.module.css'
import { getDate, getDay, getMonth, getTime} from '../../utils/dateFormater'

interface ComponentProps {
  eventData?: any;
  body?: string
  onClick?: () => void;
  isActive?: boolean;
}

const Event: FC<ComponentProps> = (props) => {
  const {eventData} = props;

  return (
    <div className={`${styles.eventBox} ${props.isActive && styles.active}`} onClick={() => props.onClick?.()}>
      <div className={styles.shown}>
        <div className={styles.date}>
            <h3>{getMonth(eventData?.start.local)}</h3>
            <h2>{getDate(eventData?.start.local)}</h2>
        </div>
        <div className={styles.title}>
            <h3>{eventData?.name.text}</h3>
            <p>{getDay(eventData?.start.local)} {getTime(eventData?.start.local)}</p>
        </div>
        <a href={eventData.url} target='_blank'>More</a>
      </div>
      <div className={styles.hidden}>
        <h3>Description: </h3>
        <p>{eventData.description.html}</p>
      </div>
    </div>
  )
}

export default Event