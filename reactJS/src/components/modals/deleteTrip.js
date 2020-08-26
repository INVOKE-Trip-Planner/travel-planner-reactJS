import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import AccForm from "components/forms/accommodation/accForm.js";

class DeleteTripModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tripData: this.props.tripData,
            // destinationId: this.props.tripData.map( list => list.destinations.map( destination => destination.id) )[0]
        }
    }

    componentDidMount() {
        // console.log('ACC MODAL MOUNT')

        // const x = this.state.tripData.map( list => list.destinations.map( destination => destination.id) )

        // console.log("X", this.state.destinationId);

        // const [ destinationId ] = this.state.destinationId;

        // this.setState({
        //     destinationId: destinationId,
        // })

        // console.log("check", destinationId)
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
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <ModalHeader
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        Are you sure?
                    </ModalHeader>
                    <ModalBody>
                        <p>
                        Do you really want to delete this {this.props.deleteType}? This process cannot be undone.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                            }}
                        >
                            <Button
                                color="danger"
                                onClick={ this.props.handleDelete }
                            >
                                Confirm
                            </Button>

                            <Button
                                onClick={ this.props.toggle }
                            >
                                Cancel
                            </Button>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default DeleteTripModal;