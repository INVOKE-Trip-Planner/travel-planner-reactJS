import React from "react";

class Home extends React.Component {

    render() {
        return (
            <>  
                <div style={styles.registerContainer}>
                    <h1>Home page</h1>
                    {/* <SignupForm/> */}
                </div>
            </>
        )
    }
}

const styles = {
    registerContainer: {
        height: "10 0vh",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    }
  }
  

export default Home;