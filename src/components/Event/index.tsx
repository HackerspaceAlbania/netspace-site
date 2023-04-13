import React from 'react'
import  * as styles  from './Event.module.css'

const Event = () => {
  return (
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
  )
}

export default Event