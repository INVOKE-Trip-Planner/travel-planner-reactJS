import React from "react";
import { Container,Row,Col } from "reactstrap";

// Redux
import { connect } from "react-redux";
import Actions from "../../../actions";

import SignupForm from "../../../components/forms/auth/registerform.js";

import registerImg from "assets/images/registerpage.png";


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    
        }
    }
    
    componentDidUpdate(prevProps) {
        const { getRegisterData } = this.props;

            // console.log("REGISTER DATA", getRegisterData.error.errors.u);

    
        if (prevProps.getRegisterData.isLoading && !getRegisterData.isLoading) {
    
            // console.log("REGISTER DATA", Object.keys(getRegisterData));

            // console.log("REGISTER DATA", getRegisterData.error.errors.username[0]);
            // console.log("REGISTER DATA", getRegisterData.error.errors.length);
    
            // Check length of getLoginData to see if data exist
            if ( (Object.keys(getRegisterData.data).length !== 0) ) {
                
                // if login data exist
                alert("Registration success! Please login to your account.");
                this.props.history.push("/login");
            } else {
            
            // if {

                alert(Object.values(getRegisterData.error.errors).flat().join('\n'));
                
                // if (Object.keys(getRegisterData.error).length !== 0) {
                //     // if (Object.keys(getRegisterData.error.errors.username).length !== 0) {
                //     if (getRegisterData.error.errors.username) {
                //         alert(getRegisterData.error.errors.username[0]);
                //     } 
                
                //     //  if (getRegisterData.error.errors.email && Object.keys(getRegisterData.error.errors.email).length !== 0) {
                //      if (getRegisterData.error.errors.email) {
                //         alert(getRegisterData.error.errors.email[0]);
                //     }
                // }

                alert("Registration failed.");
                
            }
        }    
    }

    render() {
        return (
            <>  
                <Container fluid={true} style={styles.fillPageMain}>
                    <Row style={{minHeight: "100vh", maxHeight: "100vh", width: "100%", padding: 0, margin: 0}}>
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
    fillPageMain: {
        margin: 0,
        padding: 0,
        // border: "5px solid pink",
        // overflow: "scroll",
        minHeight: "100vh",

        position: "relative"
    },
    fillPage1: {
        margin: 0,
        padding: 0,
        // position: "relative",
        // border: "5px solid pink",
    },
    fillPage2: {
        margin: 0,
        padding: 0,
        position: "absolute",
        right: 0,

        // minHeight: "80vh",
        // border: "5px solid pink",

        // overflow: "scroll" // TEMPORARY FIX ->CHANGE THIS LATER
        // position: "fixed"


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
        minHeight: "100vh",
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
        // maxHeight: "100vh",
        borderLeft: "1px solid rgba(0,0,0,0.4)",
        // border: "5px solid rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },

    titleContainer: {
        // border: "1px solid black",
        margin: "5vh",
        padding: 10,
    },

    formContainer: {
        width: "70%",
        minHeight: "100vh",
        // border: "5px solid blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    }
  }
  

  const mapStateToProps = (store) => ({
    getRegisterData: Actions.getRegisterData(store),
  })
  
const mapDispatchToProps = {
    // onRegister: Actions.register,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Register);