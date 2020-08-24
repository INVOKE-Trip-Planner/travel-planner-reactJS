import React from "react";
import { Container,Row,Col } from "reactstrap";

// Redux
import { connect } from "react-redux";
import Actions from "../../../actions";

import LoginForm from "../../../components/forms/auth/loginform.js";

import loginImg from "assets/images/loginpage.png";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidUpdate(prevProps) {
        const { getLoginData } = this.props;

        if (prevProps.getLoginData.isLoading && !getLoginData.isLoading) {

            console.log("LOGIN DATA", Object.keys(getLoginData.data));

            // Check length of getLoginData to see if data exist
            if ( (Object.keys(getLoginData.data).length !== 0) ) {
                
                // if login data exist
                alert("Success");
                this.props.history.push("/");
            } else {
                // if no login data
                alert("Login failed.")
            }
        }    
    }

    render() {
        return (
            <>  
                <Container fluid={true} style={styles.fillPage}>
                    <Row>
                        <Col lg="6" xl="6" style={styles.fillPage1}>
                            <div style={styles.imageContainer}>
                                <img id="loginImg" src={loginImg} alt="loginImg" style={styles.loginImage}/>
                            </div>
                        </Col>
                        <Col lg="6"xl="6" style={styles.fillPage2}>
                            <div style={styles.loginContainer}>
                                <div style={styles.titleContainer}>
                                    <h3>Login</h3>
                                </div>
                                    
                                <div style={styles.formContainer}>
                                    
                                    <LoginForm/>
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
    loginImage: {
        // border: "1px solid blue",
        width: "100%",
        opacity: 0.5,
    },

    loginContainer: {
        width: "100%",
        height: "100vh",
        borderLeft: "1px solid rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
    },

    titleContainer: {
        // border: "1px solid black",
        margin: 60,
        padding: 10,
    },

    formContainer: {
        width: "70%",
        height: "50vh",
        // border: "5px solid blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
}

const mapStateToProps = (store) => ({
    getLoginData: Actions.getLoginData(store),
  })
  
const mapDispatchToProps = {
    onLogin: Actions.login,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
  
