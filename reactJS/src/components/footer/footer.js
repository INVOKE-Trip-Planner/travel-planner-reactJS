import React from "react";
import { Link } from "react-router-dom";

import appStore from "assets/images/footer/applestore.png"
import googlePlay from "assets/images/footer/google-play-badge.png"

import {PRIMARY_COLOR, PRIMARY_COLOR_FONT} from "common/styles/index.js";

import "./footer.css";

import {Container, Row, Col, Button } from "reactstrap";

class Footer extends React.Component {

    render() {
        return(
            <>  
            <Container className="themed-container" fluid={true} style={{...styles.fillPage, ...PRIMARY_COLOR, marginTop: 50}}>
                <Container className="themed-container" fluid="xl" style={{...styles.fillPage, ...PRIMARY_COLOR}}>
                    {/* <h5>This is footer</h5> */}

                    <Row style={{width: "100%", padding: 0, margin: 0, display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
                        <Col id="col-one" xs="12" sm="12" md="4" lg="4" xl="4" style={styles.colContainer}>
                            <p><strong>Keep track of all your travel informations with the TripBantu mobile apps.</strong></p>
                            <p>Anything you plan or save automatically syncs with the apps, ready for you when you travel!</p>

                            <div style={styles.buttonContainer}>
                                <img src={appStore} placeholder="applestore" style={styles.appleButton}/>
                                <img src={googlePlay} placeholder="googleplay" style={styles.googleButton}/>
                            </div>
                        </Col>

                        <Col id="col-two" xs="12" sm="12" md="4" lg="4" xl="4" style={styles.colContainerTwo}>
                            <div style={styles.aboutContainer}>
                                <p>About:</p>
                                <h6>About Us</h6>
                                <h6>Team</h6>
                                <h6>Careers</h6>
                                <h6>Support</h6>
                                <h6>Contact</h6>
                            </div>

                            <div style={styles.iconContainer}>
                                <p>Don't forget to tag us in your trips!</p>

                                <div className="social-icon" style={styles.socialIcon}>
                                    <ion-icon name="logo-instagram" style={styles.icon}></ion-icon>
                                    <ion-icon name="logo-twitter" style={styles.icon}></ion-icon>
                                    <ion-icon name="logo-facebook" style={styles.icon}></ion-icon>
                                    <ion-icon name="logo-pinterest" style={styles.icon}></ion-icon>
                                    <ion-icon name="logo-linkedin" style={styles.icon}></ion-icon>
                                </div>
                            </div>
                        </Col>

                        <Col id="col-three" xs="12" sm="12" md="4" lg="4" xl="4" style={styles.colContainerThree}>
                            <p>Privacy Policy</p>
                            <p>Terms and Conditions</p>
                            <p>Copyright</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </>
        )
    }
}

const styles = {
    fillPage: {
        // border: "1px solid rgba(0,0,0,0.4)",
        width: "100%",
        margin: "auto",
        // padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 400,
        minHeight: 400,

        color: "#ECF0F1"
        // borderBottom: "1px solid rgba(0,0,0,0.4)",
    },

    rowContainer: {
        padding: 0,
        margin: 0,

        width: "100%",
    },

    colContainer: {
        margin: 0,
        padding: 20,
        
        width: "100%",
        height: "100%",
        // border: "2px solid blue",

        display: "flex",
        flexDirection: "column",

        // borderRight: "1px solid rgba(0,0,0,0.4)"
    },
    
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid black"
    },
    appleButton: {
        width: "40%",
        height: "10%",
        padding: 15,
        // border: "1px solid black"
    },
    googleButton: {
        width: "40%",
        height: "10%",
        // padding: 20,
        // border: "1px solid black"
    },
    colContainerTwo: {
        margin: 0,
        padding: 20,
        
        width: "100%",
        height: "100%",
        // border: "2px solid blue",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    iconContainer: {
        // border: "1px solid black",
        display: "flex",
        flexDirection : "column",
        alignItems: "flex-start",
        height: "100%",
        maxWidth: 200,
        paddingLeft: 10,
    },
    socialIcon: {
        // border: "1px solid black",
        display: "flex",
        flexDirection : "row",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        margin: 10,
    },

    colContainerThree: {
        margin: 0,
        padding: 20,
        
        width: "100%",
        height: "100%",
        // border: "2px solid blue",

        display: "flex",
        flexDirection: "column",

        // borderLeft: "1px solid rgba(0,0,0,0.4)",
    },



}

export default Footer;