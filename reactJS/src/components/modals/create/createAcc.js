import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import AccForm from "components/forms/accommodation/accForm.js";

class CreateAccModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
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
                    <ModalHeader>Create New Accommodation</ModalHeader>
                    <ModalBody>
                        <AccForm />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default CreateAccModal;