import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from '../components/PageChange/PageChange.js';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>NextJS Material Kit by Creative Tim</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
