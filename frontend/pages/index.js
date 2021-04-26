import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import Footer from '../components/Footer/Footer.js';
import Header from '../components/Header.js';
import Parallax from '../components/Parallax/Parallax.js';
import styles from '../styles/Home.module.css'
import classNames from "classnames";
import React, { Component } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

export default function Home({ token }) {
  const classes = useStyles();
  return (
    <Layout>
    <Header />
        <title>First Page</title>
    <div >
        <Navbar />

        <Parallax image={require('../assets/img/te.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>NextJS Material Kit.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

        <div   className={classNames(classes.main, classes.mainRaised)}>
        <h1>Home page</h1>
        No login required!
        </div>
    </div>
    <Footer />
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
