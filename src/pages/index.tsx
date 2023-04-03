import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Page from "../components/Page"

const IndexPage: React.FC<PageProps> = () => {
  const pageTitle = "Root";

  return (
    <Page title={pageTitle}>
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>NetSpace - Root</title>