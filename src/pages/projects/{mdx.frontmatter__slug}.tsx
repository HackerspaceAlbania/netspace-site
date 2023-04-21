import { graphql } from 'gatsby'
import React, { FC } from 'react'

interface PageProps {
  data?: any
}

const ProjectPost: FC<PageProps>  = ({data}) => {
  console.log(data)
  return (
    <h1>{data.mdx.frontmatter.title}</h1>
  )
}

export default ProjectPost

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