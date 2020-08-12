import React from "react";

// Redux
import { connect } from "react-redux";
import Actions from "../../../actions";

import LoginForm from "./loginform";

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
                <div style={styles.registerContainer}>
                    <h1>Login page</h1>
                    <LoginForm/>
                </div>
            </>
        )
    }
}

const styles = {
    registerContainer: {
        height: "50vh",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
}

const mapStateToProps = (store) => ({
    getLoginData: Actions.getLoginData(store),
  })
  
const mapDispatchToProps = {
    onLogin: Actions.login,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
  
