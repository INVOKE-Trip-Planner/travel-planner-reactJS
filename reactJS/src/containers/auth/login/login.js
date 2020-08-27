import React from "react";
import { Container,Row,Col } from "reactstrap";

// Redux
import { connect } from "react-redux";
import Actions from "../../../actions";

import LoginForm from "../../../components/forms/auth/loginform.js";

import "./login.css";

import loginImg from "assets/images/undraw/login.png";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidUpdate(prevProps) {
        const { getLoginData } = this.props;

        if (prevProps.getLoginData.isLoading && !getLoginData.isLoading) {

            // console.log("LOGIN DATA", Object.keys(getLoginData.data));

            // Check length of getLoginData to see if data exist
            if ( (Object.keys(getLoginData.data).length !== 0) ) {
                
                // if login data exist
                alert("Success");
                this.props.history.push("/");
            } else {

                // console.log(getLoginData)

                alert(Object.values(getLoginData.error.errors).flat().join('\n'));
                // if no login data
                // alert("Login failed.")
            }
        }    
    }

    render() {
        return (
            <>  
                <Container fluid={true} style={styles.fillPage}>
                    <Row style={{minHeight: "100vh",  width: "100%", padding: 0, margin: 0}}>
                        <Col lg="6" xl="6" style={styles.fillPage1}>
                            <div style={styles.imageContainer}>
                                <img className="loginImg" src={loginImg} alt="loginImg" style={styles.loginImage}/>
                            </div>
                        </Col>
                        <Col className="fillpage2" md={{size:"auto", offset:3}} lg={{size:2, offset:8}} xl={{size:2, offset:8}}style={styles.fillPage2}>
                            <div className="login-container" style={styles.loginContainer}>
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
        minHeight: "100vh",
        // minWidth: 400
        // border: "5px solid pink",
        // width: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // position: "relative",
    },
    fillPage1: {
        margin: 0,
        padding: 0,
        position: "relative",
        // border: "5px solid pink",
    },
    fillPage2: {
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
        position: "absolute",
        // right: 0,
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
        padding: 50,

        borderRight: "1px solid rgba(0,0,0,0.4)",
    },
    loginImage: {
        // border: "1px solid blue",
        width: "100%",
        // opacity: 0.5,
    },

    loginContainer: {
        width: "100%",
        // height: "100vh",
        // borderLeft: "1px solid rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
    },

    titleContainer: {
        // border: "1px solid black",
        // margin: 60,
        padding: 100,
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
  
