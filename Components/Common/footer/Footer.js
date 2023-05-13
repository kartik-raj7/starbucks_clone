import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import logo from '../../../public/starbucks.png'
import ios from '../../../public/Footer-images/appstoreiOS.png'
import android from '../../../public/Footer-images/appstoreAndroid.png'
import Link from 'next/link'
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerUp}>
                    <div className={styles.logo}>
                        <Image src={logo} alt='logo' height={62} width={62} />
                    </div>
                    <div className={styles.aboutus}>
                        <h3 className={styles.footerHeading}>
                            <Link title='About Us' href='/aboutus' className={styles.link}> About Us </Link> </h3>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Our Heritage' href='/ourheritage' className={styles.link}> Our Heritage </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Our Comapny' href='/ourcompany' className={styles.link}> Our Company </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Coffeehouse' href='/coffeehouse' className={styles.link}> Coffeehouse </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.responsibility}>
                        <h3 className={styles.footerHeading}>
                            <Link title='Responsibility' href='/responsibility' className={styles.link}> Responsibility </Link> </h3>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Community' href='/community' className={styles.link}> Community </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Ethical Sourcing' href='/ethicalsourcing' className={styles.link}> Ethical Sourcing </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Environment' href='/environment' className={styles.link}> Environment </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Diversity' href='/diversity' className={styles.link}> Diversity </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.quick}>
                        <h3 className={styles.footerHeading}>
                            <Link title='Quick Links' href='/quicklinks' className={styles.link}> Quick Links </Link> </h3>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Delivery' href='/delivery' className={styles.link}> Delivery </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Season Gifting' href='/seasonsgifting' className={styles.link}> Season's Gifting </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Careers' href='/careers' className={styles.link}> Careers </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Customer Service' href='/customerservice' className={styles.link}> Customer Service </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='FAQs' href='/' className={styles.link}> FAQs </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.socialLogo}>
                        <h3 className={styles.footerHeading}> Social Media </h3>
                        <ul className={styles.socialList}>
                            <li>
                                <Link href='https://www.instagram.com/starbucksindia/'>
                                    <InstagramOutlined style={{ fontSize: '30px', color: '#ffffff' }} />
                                </Link>
                            </li>
                            <li>
                                <Link href='https://www.facebook.com/starbucksindia/'>
                                    <FacebookOutlined style={{ fontSize: '30px', color: '#ffffff' }} />
                                </Link>
                            </li>
                            <li>
                                <Link href='https://www.twitter.com/starbucksindia/'>
                                    <TwitterOutlined style={{ fontSize: '30px', color: '#ffffff' }} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.store}>
                        <Link href='https://apps.apple.com/in/app/starbucks-india/id1210203958'>
                            <Image src={ios} alt='ios' height={64} width={182} />
                        </Link>
                        <Link href='https://play.google.com/store/apps/details?id=com.starbucks.in'>
                            <Image src={android} alt='android' height={64} width={182} />
                        </Link>
                    </div>
                </div>
                <div className={styles.footerDown}>
                    <ul className={styles.legallist}>
                        <li className={styles.item1}>
                            <Link title='Web Accessibility' href='/' className={styles.link}> Web Accessibility </Link>
                        </li>
                        <li className={styles.item1}>
                            <Link title='Privacy Statement' href='/' className={styles.link}> Privacy Statement </Link>
                        </li>
                        <li className={styles.item1}>
                            <Link title='Terms of Use' href='/' className={styles.link}> Terms of Use </Link>
                        </li>
                        <li className={styles.item2}>
                            <Link title='Contact Us' href='/' className={styles.link}> Contact Us </Link>
                        </li>
                    </ul>
                    <ul className={styles.legallist}>
                        <li className={styles.item3}>
                            <Link title='Contact Us' href='/' className={styles.link}> © 2023 Starbucks Coffee Company. All rights reserved. </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
