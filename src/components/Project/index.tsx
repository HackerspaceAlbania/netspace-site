import React, { FC } from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import * as styles from './Project.module.css'
import { Link } from 'gatsby';

interface ComponentProps {
  projectData?: any;
}

const Project: FC<ComponentProps> = (props) => {
  const thumbnail = getImage(props.projectData.hero_image) as IGatsbyImageData;
  return (
    <Link to={props.projectData.slug} className={styles.projectBox}>
      <div className={styles.imgBox}>
        <GatsbyImage
          image={thumbnail}
          alt={""}
          className={styles.gatsbyImageWrapper}
        />
      </div>
      <h3>{props.projectData.title}</h3>
      <p>~ {props.projectData.author}</p>
    </Link>
  )
}

export default Project