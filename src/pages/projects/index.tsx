import React, { FC } from 'react'
import Page from '../../components/Page';
import { HeadFC, graphql } from 'gatsby';
import Project from '../../components/Project';
import * as styles from '../../styles/Projects.module.css'

interface PageProps {
  data?: any
}

const ProjectsPage: FC<PageProps> = ({ data }) => {
    const pageTitle = "Projects";
    const projects = data.allMdx.nodes;

    console.log(projects)

    return (
      <Page title={pageTitle}>
        <div className={styles.projectsPage}>
          {projects.map((item: any) => (
            <Project 
              key={item.id}
              projectData={item.frontmatter}
            />
          ))}
        </div>
      </Page>
    )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>NetSpace - Projects</title>

export const projectsQuery = graphql`
  query{
    allMdx(filter: {internal: {contentFilePath: {regex: "/mdx/projects/"}}}) {
      nodes {
        id
        frontmatter {
          slug
          title
          author
          thumbnail
          date
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`