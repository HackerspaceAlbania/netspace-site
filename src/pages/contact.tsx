import React from 'react'
import Page from '../components/Page';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/Contact.module.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import CustomMap from '../components/CustomMap';



const ContactPage = () => {
    const pageTitle = "Contact Us";

    const contactInfo = [
      {
        icon: <FaPhoneAlt />,
        title: "Call Us",
        info: "+355 69 420 69 69"
      },
      {
        icon: <MdEmail />,
        title: "Email Us",
        info: "info@netspace.al"
      },
      {
        icon: <AiFillInstagram />,
        title: "Follow Us",
        info: "@netspace.al"
      },
      {
        icon: <BsDiscord />,
        title: "Join Us",
        info: "discord.gg/netspace"
      }
    ]

    return (
      <Page title={pageTitle}>
        <div className={styles.contactPage}>
          <div className={styles.contactSection}>
            {contactInfo.map((item) => {
              return (
                <a href="#" className={styles.infoBox}>
                  {item.icon}
                  <div className={styles.details}>
                    <h3>{item.title}</h3>
                    <h3>{item.info}</h3>
                  </div>
                </a>
              )
            })}
          </div>
          
          <div className={styles.map}>
            <CustomMap 
              center={{lat: 41.336491, lng: 19.816997}}
              zoom={17}
            />
            {/* <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1261.2068116818757!2d19.81645330736079!3d41.33633322681492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350311588670db5%3A0x7123da993a1f5d7b!2sMulliri%20Plus!5e1!3m2!1sen!2suk!4v1687444114690!5m2!1sen!2suk" 
              width="100%" 
              style={{border:0}} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </div>
      </Page>
    )
}

export default ContactPage

export const Head: HeadFC = () => <title>NetSpace - Contact</title>