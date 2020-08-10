import React from "react";

import SignupForm from "./registerform"

class Register extends React.Component {

    render() {
        return (
            <>  
                <div style={styles.registerContainer}>
                    <h1>Register page</h1>
                    <SignupForm/>
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
  

export default Register;