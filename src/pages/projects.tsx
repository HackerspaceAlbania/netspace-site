import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';

const ProjectsPage = () => {
    const pageTitle = "Projects";

    return (
      <Page title={pageTitle}>
      </Page>
    )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>NetSpace - Projects</title>