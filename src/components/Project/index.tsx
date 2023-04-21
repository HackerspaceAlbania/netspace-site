import React, { FC } from 'react'
import thumbnail from '../../images/project-thumbnail.jpg'
import * as styles from './Project.module.css'
import { Link } from 'gatsby';

interface ComponentProps {
  projectData?: any;
}

const Project: FC<ComponentProps> = (props) => {
  return (
    <Link to={props.projectData.slug} className={styles.projectBox}>
      <div className={styles.imgBox}>
        <img src={thumbnail} alt="" />
      </div>
      <h3>{props.projectData.title}</h3>
      <p>~ {props.projectData.author}</p>
    </Link>
  )
}

export default Project