import { Button } from 'antd'
import React from 'react'
import logo from '../../public/profileDP.svg'
import styles from './profilepagestyle/Profile.module.scss'
// import { RightOutlined, SettingFilled, UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
const Profile = () => {
  return (
    <div className={styles.profilediv}>
    <div className={styles.profile}>
         <div className={styles.settings}>
            <Link href='/customerservice'>
            <SettingFilled/>
            </Link>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <div className={styles.imagesbox}>
        <img src='/profileDp.svg' alt="profile"/>
        </div>
        <h2>Welcome to Starbucks</h2>
        <Button className={styles.buttonstyle}>Login or Signup</Button>
        </div>
    </div>
    <div className={styles.help}>
    <div className={styles.profiletext}>
    {/* <UserOutlined /> */}
    <Link href='/faq' style={{textDecoration:'none',color:'black',paddingLeft:'20px'}}>
    <h4>HELP CENTER</h4>
    </Link>
    </div>
    <div>
    <Link href='/faq' style={{textDecoration:'none',color:'black'}}>
    {/* <RightOutlined /> */}
    </Link>
    </div>
    </div>
    </div>
  )
}

export default Profile