import React from "react";

import { Container } from "reactstrap";

import AddTripForm from "../../components/forms/trips/addTripForm.js";

class AddTrip extends React.Component {
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

export default AddTrip;