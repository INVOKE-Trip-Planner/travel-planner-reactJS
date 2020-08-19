import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

import { connect } from "react-redux";
import Actions from "actions";

import AccEditForm from "components/forms/accommodation/accEditForm.js";

class Accommodation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            accId: this.props.accId,
            tripData: this.props.tripData,
        }
    }

    componentDidMount() {
        // console.log("ACCOMMODATION MOUNT", this.state.tripData);
    }

    componentDidUpdate(prevProps) {

        // console.log("ACCOMMODATION UPDATE", this.state.tripData);

        
        // const { getDeleteAccData, getGetAllAccData} = this.props;

        // if (prevProps.getGetAllAccData.isLoading && !getGetAllAccData.isLoading) {

        //     if ( (Object.keys(getGetAllAccData.data).length !== 0) ) {
        //         alert(getDeleteAccData.data.message);
        //         window.location.reload(); // reloads the page after logging out
        //     } else {
        //         alert("Delete failed.")
        //     }
        // }
    }

    handleEdit() {
        this.setState({
            isOpen: true,
        });
    }

    handleDelete(accId) {
        console.log("ACC ID:", accId);
        this.props.onDeleteAcc(accId);
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
                    <p>{this.props.accName}</p>
                    
                    <div>
                        <button style={styles.selectButton} onClick={() => this.handleEdit()}><ion-icon name="create-outline"></ion-icon></button>
                        <button style={styles.selectButton} onClick={() => this.handleDelete(this.state.accId)}><ion-icon name="trash-outline"></ion-icon></button>
                    </div>
                </CardHeader>
                <CardBody style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <p>Booking ID: {this.props.accBookingId}</p>
                    <p>Check In Date: {this.props.accCheckInDate}</p>
                    <p>Check In Time: {this.props.accCheckInHour}:{this.props.accCheckInMin}</p>
                    <p>Check Out Date: {this.props.accCheckOutDate}</p>
                    <p>Check Out Time: {this.props.accCheckOutHour}:{this.props.accCheckOutMin}</p>
                </CardBody>
                <CardFooter style={{width: "100%"}}>
                    <p>Cost: RM{this.props.accCost}</p>
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
                        <AccEditForm 
                            accId = {this.props.accId}
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
    // getGetAllAccData: Actions.getGetAllAccData(store),
    // getDeleteAccData: Actions.getDeleteAccData(store),
    // getEditAccData: Actions.getEditAccData(store),
});

const mapDispatchToProps = {
    onDeleteAcc: Actions.deleteAcc,
    // onEditAcc: Actions.editAcc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Accommodation);