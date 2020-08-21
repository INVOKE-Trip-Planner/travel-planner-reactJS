import React from "react";
import { Container,Row,Col } from "reactstrap";
import UpdateUserForm from "../../components/forms/profile/updateUserForm";


class Profile extends React.Component {

    render() {
        return (
            <>  
                <Container fluid="xl">
                    <h3
                        style={{
                            textAlign: 'center',
                        }}
                    >Profile</h3>
                    <UpdateUserForm 
                    />
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
  

export default Profile;