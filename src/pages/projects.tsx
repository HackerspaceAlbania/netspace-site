import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';
import Project from '../components/Project';
import * as styles from '../styles/Projects.module.css'

const ProjectsPage = () => {
    const pageTitle = "Projects";
    const projects = [1, 2, 3, 2, 3, 2, 3];

    return (
      <Page title={pageTitle}>
        <div className={styles.projectsPage}>
          {projects.map(i => (
            <Project />
          ))}
        </div>
      </Page>
    )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>NetSpace - Projects</title>