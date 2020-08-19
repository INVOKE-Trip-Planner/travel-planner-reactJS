import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

import { connect } from "react-redux";
import Actions from "actions";

import TransEditForm from "components/forms/transport/editTransForm.js";

class Transport extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            transId: this.props.transId,
            tripData: this.props.tripData
        }
    }

    componentDidMount() {
        // console.log('tripData', this.state.tripData)
    }

    handleEdit() {
        this.setState({
            isOpen: true,
        });

    }

    handleDelete(transId) {
        console.log('delete');
        this.props.onDeleteTrans(transId);
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <>
            <Card body outline color="danger">
                <CardHeader style={{display: "flex", }}>
                    <p>{this.props.transMode}</p>
                    
                    <div>
                        <button style={styles.selectButton} onClick={() => this.handleEdit()}><ion-icon name="create-outline"></ion-icon></button>
                        <button style={styles.selectButton} onClick={() => this.handleDelete(this.state.transId)}><ion-icon name="trash-outline"></ion-icon></button>
                    </div>
                </CardHeader>
                <CardBody style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <p>Booking ID: {this.props.transBookingId}</p>
                    <p>Origin: {this.props.transOrigin}</p>
                    <p>Destination: {this.props.transDestination}</p>
                    <p>Departure Date: {this.props.transDepartureDate}</p>
                    <p>Departure Time: {this.props.transDepartureHour}:{this.props.transDepartureMin}</p>
                    <p>Arrival Date: {this.props.transArrivalDate}</p>
                    <p>Arrival Time: {this.props.transArrivalHour}:{this.props.transArrivalMin}</p>
                    <p>Operator: {this.props.transOperator}</p>
                </CardBody>
                <CardFooter style={{width: "100%"}}>
                    <p>Cost: RM{this.props.transCost}</p>
                </CardFooter>
            </Card>
            
            <Modal 
                        isOpen={this.state.isOpen} 
                        centered={true}
                        scrollable={true}
                        backdrop={true}
                        toggle={() => this.toggle()}
                >
                    <ModalHeader></ModalHeader>
                    <ModalBody>
                        <TransEditForm 
                            transId = {this.state.transId}
                            transMode={this.props.transMode}
                            transOrigin={this.props.transOrigin}
                            transDestination= {this.props.transDestination}
                            transDepartureDate= {this.props.transDepartureDate}
                            transDepartureHour= {this.props.transDepartureHour}
                            transDepartureMin= {this.props.transDepartureMin}
                            transArrivalDate= {this.props.transArrivalDate}
                            transArrivalHour= {this.props.transArrivalHour}
                            transArrivalMin= {this.props.transArrivalMin}
                            transCost= {this.props.transCost}
                            transBookingID= {this.props.transBookingId}
                            transOperator= {this.props.transOperator}
                        />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>      
            </>
        )
    }
};

const styles = {
    updateContainer: {
        // width: "80%",
        // height: 40,
        backgroundColor: "white",
        margin: 20,
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid rgba(0,0,0,0.4)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    selectButton: {
        backgroundColor: "transparent",
        outline: "none",
        border: "1px solid rgba(0,0,0,0.4)",
        padding: 10,
        color: "black",
        // borderRadius: "50 0 0 0",
    },
}

// get data from api
const mapStateToProps = (store) => ({
});

const mapDispatchToProps = {
    onDeleteTrans: Actions.deleteTrans,
    // onEditAcc: Actions.editAcc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transport);