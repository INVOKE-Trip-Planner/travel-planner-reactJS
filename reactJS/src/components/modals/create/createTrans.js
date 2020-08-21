import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import TransForm from "components/forms/transport/transForm.js";

class CreateTransModal extends React.Component {
    
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
                    <ModalHeader>Create New Transport</ModalHeader>
                    <ModalBody>
                        <TransForm destinationId = {this.state.destinationId} />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default CreateTransModal;