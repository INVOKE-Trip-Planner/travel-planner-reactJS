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

    render() {
        return (
            <>
                <Container fluid="xl">
                    <AddTripForm />
                </Container>
            </>
        )
    }
}

// get data from api
const mapStateToProps = store => ({
    getGetAllData: Actions.getGetAllData(store),
    getUserSession: Actions.getUserSession(store),
    // getDeleteTaskData: Actions.getDeleteTaskData(store)
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