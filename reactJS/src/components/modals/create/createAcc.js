import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, } from "reactstrap";

import AccForm from "components/forms/accommodation/accForm.js";

class CreateAccModal extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            destinationId: this.props.destinationId,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            destinationId: nextProps.destinationId
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
                    <ModalHeader>Create New Accommodation</ModalHeader>
                    <ModalBody>
                        <AccForm 
                            destinationId = {this.state.destinationId}
                        />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default CreateAccModal;