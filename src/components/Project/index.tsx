import React from 'react'
import thumbnail from '../../images/project-thumbnail.jpg'
import * as styles from './Project.module.css'

const Project = () => {
  return (
    <div className={styles.projectBox}>
        <div className={styles.imgBox}>
          <img src={thumbnail} alt="" />
        </div>
        <h3>Project Name</h3>
        <p>~ Persons Name</p>
    </div>
  )
}

export default Project