import React from "react";
import { Container,Row,Col } from "reactstrap";

// Redux
import { connect } from "react-redux";
import Actions from "../../../actions";

import LoginForm from "../../../components/forms/auth/loginform.js";

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
                        <Col xl="6"></Col>
                        <Col xl="6" style={styles.fillPage}>
                            <div style={styles.registerContainer}>
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
    },
}

const mapStateToProps = (store) => ({
    getLoginData: Actions.getLoginData(store),
  })
  
const mapDispatchToProps = {
    onLogin: Actions.login,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
  
