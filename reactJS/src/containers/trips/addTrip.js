import React from "react";

import { Container } from "reactstrap";

import { connect } from 'react-redux';
import Actions from 'actions';

import AddTripForm from "../../components/forms/trips/addTripForm.js";

class AddTrip extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

        const { getUserSession } = this.props;

        // console.log("HOME USER SESSION", getUserSession.data.length);

        if (getUserSession.data.length === undefined || getUserSession.data.length === null || getUserSession.data.length === 0) {
            alert('No user detected. Please login or sign up.')
            this.props.history.push("/login");
        }

        // this.props.onGetAll();
    }

    componentDidUpdate(prevProps) {

        const { getCreateTripData } = this.props;

        // console.log("create trip data", getCreateTripData)

        if (prevProps.getCreateTripData.isLoading && !getCreateTripData.isLoading) {
        
            if ( (Object.keys(getCreateTripData.data).length !== 0) ) {

                alert("Trip created successfully!")
            } else {
                alert(Object.values(getCreateTripData.error.errors).flat().join('\n'));
                alert("Create trip unsuccessful.")
            }

        }
    }

    render() {
        return (
            <>
                <Container className="themed-container" fluid="xl" style={styles.fillPage}>
                    <AddTripForm />
                </Container>
            </>
        )
    }
}

const styles = {
    fillPage: {
        padding: 0,
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // minWidth: 400,
        border: "0.2px solid rgba(0,0,0,0.3)",
        borderRadius: 20,
        // border: "1px solid black",
        minHeight: "100vh",
        marginTop: 50,
    }
}

// get data from api
const mapStateToProps = store => ({
    getGetAllData: Actions.getGetAllData(store),
    getUserSession: Actions.getUserSession(store),
    // getDeleteTaskData: Actions.getDeleteTaskData(store)
    getCreateTripData: Actions.getCreateTripData(store),
});

// dispatch to action
const mapDispatchToProps = {
    // onUpdateTrip: Actions.updateTrip,
    // onDeleteTrip: Actions.deleteTrip,
    // onGetAll: Actions.getAll,
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(AddTrip);