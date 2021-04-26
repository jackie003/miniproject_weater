import Link from 'next/link'
import React from "react";
import Header from "./Header.js";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Button from "./Button.js";
import styles from "./navbarsStyle.js";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import CustomInput from "./CustomInput/CustomInput.js";
import CustomDropdown from "./CustomDropdown/CustomDropdown.js";
import image from "./te.jpg";

const classes = makeStyles(styles);

export default function Navbar() {
  return (
    <div className={classes.section} >
      <div className={classes.container}>

      <div className={classes.navigation}>
        <div className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        >
        <Header
             href="./index"
            brand="Box Office"
           
            rightLinks={
              <List className={classes.list}>
                
               
                <Link href="./admin">
                  <Button        
                    className={classes.navLink}
                    color="transparent"
                  >
                    Discover
                  </Button>
                    </Link>
                    <Link href="./register">
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    color="transparent"
                  >
                    Wishlist
                  </Button>
                  </Link>
                  <Link href="./login">
                  <Button
                    href="#pablo"
                    className={classes.registerNavLink}
                    color="rose"
                    round
                  >
                    Login
                  </Button>
                  </Link>
                  <Link href="./register">
                  <Button
                    href="#pablo"
                    className={classes.registerNavLink}
                    color="rose"
                    round
                  >
                    Register
                  </Button>
                  </Link>
              </List>
            }
          />
           </div>
          </div>
          </div>
        </div>
        </div>
    
)
          }
