import React from "react";
import { Container,Row,Col } from "reactstrap";

import SignupForm from "../../../components/forms/auth/registerform.js";

import registerImg from "assets/images/registerpage.png";

class Register extends React.Component {

    render() {
        return (
            <>  
                <Container fluid={true} style={styles.fillPage}>
                    <Row>
                        <Col lg="6" xl="6" style={styles.fillPage1}>
                            {/* <div style={styles.imageTextContainer}>
                                <h3>Register Now</h3>
                                <h3>and Plan Your Journey!</h3>
                            </div> */}
                            <div style={styles.imageContainer}>
                                <img id="registerImg" src={registerImg} alt="registerImg" style={styles.registerImage}/>
                            </div>
                        </Col>
                        <Col lg="6" xl="6" style={styles.fillPage2}>
                            <div style={styles.registerContainer}>
                                <div style={styles.titleContainer}>
                                    <h3>Register</h3>
                                </div>
                                    
                                <div style={styles.formContainer}>    
                                    <SignupForm/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

const styles = {
    fillPage: {
        margin: 0,
        padding: 0,
        // border: "5px solid pink",
    },
    fillPage1: {
        margin: 0,
        padding: 0,
        position: "relative",
        // border: "5px solid pink",
    },
    fillPage2: {
        margin: 0,
        padding: 0,
        position: "absolute",
        right: 0,
        // border: "5px solid pink",

    },
    imageTextContainer: {
        border: "1px solid red",
        // width: "100%",
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // padding: 50,
        position: "absolute",
        top: 290,
        left: 460,
        zIndex: 1,
    },
    imageContainer: {
        // border: "1px solid red",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 50
    },

    registerImage: {
        // border: "1px solid blue",
        width: "100%",
        opacity: 0.5,
    },

    registerContainer: {
        width: "100%",
        height: "100vh",
        borderLeft: "1px solid rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },

    titleContainer: {
        // border: "1px solid black",
        margin: 60,
        padding: 10,
    },

    formContainer: {
        width: "70%",
        height: "100vh",
        // border: "5px solid blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    }
  }
  

export default Register;