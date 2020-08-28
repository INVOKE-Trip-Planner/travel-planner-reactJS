import React from "react";
import { Container } from "reactstrap";

// Redux
import { connect } from "react-redux";
import Actions from "../../actions";
import UpdateUserForm from "../../components/forms/profile/updateUserForm";


class Profile extends React.Component {

    componentDidUpdate(prevProps) {
        const { getUpdateUserData } = this.props;

        // console.log("PROFILE DATA", getUpdateUserData);
    
        if (prevProps.getUpdateUserData.isLoading && !getUpdateUserData.isLoading) {

            // Check length of getLoginData to see if data exist
            if ( getUpdateUserData.error !== null ) {
                alert(Object.values(getUpdateUserData.error.errors).flat().join('\n'));
                alert("Update profile failed.");
                window.location.reload();
            } else {
                // alert(Object.values(getUpdateUserData.error.errors).flat().join('\n'));
                alert("Profile updated!");
                window.location.reload();
            }
        }    
    }

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
  

  const mapStateToProps = (store) => ({
    getUpdateUserData: Actions.getUpdateUserData(store),
  })
  
const mapDispatchToProps = {
    // onRegister: Actions.register,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile);