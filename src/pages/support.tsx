import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/Support.module.css'

const SupportPage = () => {
    const pageTitle = "Support";

  return (
    <Page title={pageTitle}>
      <div className={styles.supportPage}>
        <div className={styles.contributeSection}>
          <h3>CONTRIBUTE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec pellentesque orci eu egestas dignissim. Nam mollis 
            mi quis sem gravida volutpat. Morbi et sagittis ligula, 
            nec mattis libero. Duis at magna in erat eleifend tempus sed 
            quis quam. Sed lectus libero, mollis id lacus non, luctus consectetur nisi. 
            Sed tempor posuere molestie. Nulla quis elit non mauris aliquam dignissim. 
            Maecenas tristique leo libero, sollicitudin aliquam odio pellentesque aliquam. 
            Sed efficitur vestibulum tortor sit amet venenatis. Mauris id nisl ac velit 
            varius interdum a non velit. Maecenas aliquam auctor eros id cursus.
          </p>
        </div>
        <div className={styles.donateSection}>
          <h3>DONATION OF GOOD</h3>
          <ul>
            <li>Tech Books</li>
            <li>Electronics</li>
            <li>Usable laptops</li>
            <li>Electrical/Power Tools</li>
            <li>Office furniture</li>
          </ul>
        </div>
      </div>
    </Page>
  )
}

export default SupportPage

export const Head: HeadFC = () => <title>NetSpace - Support</title>