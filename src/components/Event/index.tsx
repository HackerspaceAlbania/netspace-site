import React, { FC, useEffect } from 'react'
import  * as styles  from './Event.module.css'
import { getDate, getDay, getMonth} from '../../utils/dateFormater'

interface ComponentProps {
  eventData?: any;
  body?: string
  onClick?: () => void;
  isActive?: boolean;
}

const Event: FC<ComponentProps> = (props) => {
  return (
    <div className={`${styles.eventBox} ${props.isActive && styles.active}`} onClick={() => props?.onClick?.()}>
      <div className={styles.shown}>
        <div className={styles.date}>
            <h3>{getMonth(props.eventData?.date)}</h3>
            <h2>{getDate(props.eventData?.date)}</h2>
        </div>
        <div className={styles.title}>
            <h3>{props.eventData?.title}</h3>
            <p>{getDay(props.eventData?.date)} {props.eventData?.time}</p>
        </div>
        <input type="button" value="ATTEND" />
      </div>
      <div className={styles.hidden}>
        <p>{props.body}</p>
        <div className={styles.more}>
          <p><b>Location:</b> {props.eventData.location}</p>
          <p><b>Speaker:</b> {props.eventData.speaker}</p>
        </div>
      </div>
    </div>
  )
}

export default Event