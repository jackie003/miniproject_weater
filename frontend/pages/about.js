import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

import Link from 'next/link'


const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <h1>GameStore</h1>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Roboto+Mono:ital,wght@1,200&display=swap" rel="stylesheet"></link>
                <br />
                <div>
                    <div className={styles.box} >
                    <br></br>  
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    GameStore เป็นร้านตัวแทนอย่างเป็นทางการของ Sony (PlayStation Authorized Dealer)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; จำหน่ายเครื่องและอุปกรณ์เกมคอนโซล(Game Console) Playstation 4, XboxOne, Nintendo Switch และอื่นๆอีกมากมาย<br />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Roboto+Mono&display=swap" rel="stylesheet"></link>

                    
                    </div>
                    <br />
                    <br/><br/>
                    <img  src="https://static.lenovo.com/na/landing-pages/sony/lenovo-sony-new-brand-page-hero-logo.png" alt="Trulli" width="250" height="150"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png" alt="Trulli" width="200" height="200"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://images.nintendolife.com/c9e51688f744b/nintendo-logo.original.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    <img  src="https://seeklogo.com/images/A/atari-logo-34D7938116-seeklogo.com.png" alt="Trulli" width="250" height="250"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://logos-download.com/wp-content/uploads/2016/11/EA_logo_logotype.png" alt="Trulli" width="250" height="150"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>                   
                    </div>
            </div>
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
