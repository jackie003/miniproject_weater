import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'

const delivery = () => {
    return (<Layout>
        <Head>
            <title>Help</title>
            <meta charset="utf-8"></meta>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>

    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
           
        </Head>
        <div className={styles.container}>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <h2> Help !</h2>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Roboto+Mono:ital,wght@1,200&display=swap" rel="stylesheet"></link>
            <ul>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kTGj55FwPvEd7mUyRReVOgA8EqYiWMxhZQ&usqp=CAU" alt="Trulli" width="500" height="300"></img>
            <br></br>
            <br></br>
            <div className={styles.listItem} >
              <div className={styles.box} >
              We focus on creating very detailed Game Solutions, clear 
              and useful Game Maps and Atlases that will help you in finding all 
              the Secrets and Collectibles that games have to offer. Moreover, you can find lists of Game Achievements, 
              general advice, Tips and Tricks, answers to FAQ and System Requirements for PC games. Our Game Guides are 
              complemented by high quality screenshots that will help you find your way around every game. The whole team behind our 
              guides consists of extremely experienced players and passionate gamers.
              </div>
            </div>
          </ul>
        </div>

    </Layout>)
}

export default delivery