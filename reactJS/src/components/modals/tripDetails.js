import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

class TripDetailsModal extends React.Component {
    
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
                    <ModalHeader></ModalHeader>
                    <ModalBody>{
                            // this.state.data.map((item) => (<div>{console.log("ITEM",item)}</div>))
                        }</ModalBody>
                    <ModalFooter>
                            <Button color="primary">
                            Edit Details
                            </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default TripDetailsModal;