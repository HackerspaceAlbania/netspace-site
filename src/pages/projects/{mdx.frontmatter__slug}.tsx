import { HeadFC, graphql } from 'gatsby'
import React, { FC } from 'react'
import Page from '../../components/Page'

interface PageProps {
  data?: any
  children?: any
}

const ProjectPost: FC<PageProps>  = ({ data, children }) => {
  return (
    <Page title={data.mdx.frontmatter.title}>
      {children}
    </Page>
  )
}

export default ProjectPost

export const Head: HeadFC = () => <title>NetSpace - Project Post</title>

export const projectQuery = graphql`
  query ProjectQuery($id: String){
    mdx(id: {eq: $id}){
      id
      frontmatter {
        slug
        title
        author
        thumbnail
        date
      }
    }
  }
`