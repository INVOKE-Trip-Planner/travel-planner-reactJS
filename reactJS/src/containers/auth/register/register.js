import React from "react";
import { Container,Row,Col } from "reactstrap";

import SignupForm from "../../../components/forms/auth/registerform.js";

class Register extends React.Component {

    render() {
        return (
            <>  
                <Container fluid={true} style={styles.fillPage}>
                    <Row>
                        <Col xl="6"></Col>
                        <Col xl="6" style={styles.fillPage}>
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
        // width: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    },

    centerAll: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    registerContainer: {
        width: "100%",
        height: "100vh",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 80,
    },

    titleContainer: {
        border: "1px solid white",
    },

    formContainer: {
        width: "70%",
        height: "100vh",
        // border: "5px solid blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
  }
  

export default Register;