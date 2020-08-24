import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import AccForm from "components/forms/accommodation/accForm.js";
import AddTripForm from "components/forms/trips/addTripForm.js";

class CreateDestModal extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            tripData: this.props.tripData,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tripData: this.props.tripData,
        })
    }

    render() {
        return (
            <>
                <Modal 
                        isOpen={this.props.isOpen} 
                        centered={true}
                        scrollable={true}
                        backdrop={true}
                        toggle={this.props.toggle}
                        size="lg"
                >
                    <ModalHeader>Create New/Edit Destination</ModalHeader>
                    <ModalBody>
                        {/* { this.state.tripData[0].destinations.map( */}
                                {/* destination => ( */}
                                    <AddTripForm
                                        // destLocation = {destination.location}
                                        // destStartDate = {destination.start_date}
                                        // destEndDate = {destination.end_date}
                                        tripData = {this.state.tripData}
                                    />
                                {/* ) */}
                            {/* ) */}
                        {/* } */}
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default CreateDestModal;