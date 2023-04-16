import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/Contact.module.css'
import { FaPhoneAlt, FaTelegramPlane, FaRedditAlien } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'



const ContactPage = () => {
    const pageTitle = "Contact Us";

    return (
      <Page title={pageTitle}>
        <div className={styles.contactPage}>
          <div className={styles.leftSection}>
            <FaPhoneAlt />
            <div className={styles.info}>
              <h3>Call Us</h3>
              <h3>+355 69 420 69 69</h3>
            </div>
          </div>
          <div className={styles.midSection}>
            <div className={styles.twoIcons}>
              <AiFillFacebook />
              <BsDiscord />
            </div>
            <div className={styles.twoIcons}>
              <AiFillInstagram />
              <FaTelegramPlane />
            </div>
            <div className={styles.threeIcons}>
              <FaRedditAlien />
              <RiLinkedinFill />
              <RiTwitterFill />
            </div>
          </div>
          <div className={styles.rightSection}>
            <MdEmail />
            <div className={styles.info}>
              <h3>Email Us</h3>
              <h3>info@netspace.al</h3>
            </div>
          </div>
        </div>
      </Page>
    )
}

export default ContactPage

export const Head: HeadFC = () => <title>NetSpace - Contact</title>