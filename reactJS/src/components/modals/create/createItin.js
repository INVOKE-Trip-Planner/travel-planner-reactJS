import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import ItinArrayForm from "components/forms/itinerary/itinArray.js";

class CreateItinModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            destinationId: this.props.destinationId,
        }

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
                >
                    <ModalHeader>Create New Itinerary</ModalHeader>
                    <ModalBody>
                        <ItinArrayForm 
                            destinationId={this.state.destinationId}
                        />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default CreateItinModal;