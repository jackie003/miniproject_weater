
import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
//import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'
import Header from '../components/Header.js';
import HeaderLinks from '../components/HeaderLinks';
import Card from '../components/Card/Card.js';
import CardBody from '../components/Card/CardBody.js';
import CardHeader from '../components/Card/CardHeader.js';
import CardFooter from '../components/Card/CardFooter.js';
import Button from '../components/CustomButtons/Button.js';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/nextjs-material-kit/pages/loginPage.js';
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';
import CustomInput from '../components/CustomInput/CustomInput.js';

import image from '../assets/img/bg7.jpg';
const useStyles = makeStyles(styles);

export default function Register({ token , props }) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const classes = useStyles();
    const { ...rest } = props;
    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }
    const registerForm = () => (
      <div className={styles.gridContainer}>
          <div>
              Username:
          </div>
          <CardBody>
          <CustomInput
                      labelText="First Name..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        placeholder:"username",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }} onChange={(e) => setUsername(e.target.value)}
                    />
          <div>
              Email:
          </div>
          <div>
              <input type="email"
                  name="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
              Password:
          </div>
          <div>
              <input type="password"
                  name="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)} />
          </div>
          </CardBody>
      </div>
  )


  return (
      <Layout>
          <Head>
              <title>Register</title>
          </Head>
          <div className={styles.container}>
              <Navbar />
              <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
            <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
              <h1>Register</h1>
              <div><b>Token:</b> {token.substring(0, 15)}...
              <button
                      onClick={() => { navigator.clipboard.writeText(token) }}>
                      Copy token
              </button>
              </div>
              <br />
          Status:  {status}
              <br /><br />
              <div className={styles.content}>
                  {registerForm()}
              </div>

              <div>
                  <button onClick={register}>Register</button>
              </div>
              </form>
              </Card>
              </GridItem>
          </GridContainer>
          </div>
          
      </Layout>
  )
}


export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
