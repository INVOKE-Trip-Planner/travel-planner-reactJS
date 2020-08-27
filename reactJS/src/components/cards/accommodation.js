import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, Button, Dropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col} from "reactstrap";

import { connect } from "react-redux";
import Actions from "actions";

import moment from 'moment';

import { PRIMARY_COLOR } from "common/styles/index.js";
import { SECONDARY_COLOR } from "../../common/styles";

import AccEditForm from "components/forms/accommodation/accEditForm.js";

import DeleteTripModal from "../../components/modals/deleteTrip";


class Accommodation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            accId: this.props.accId,
            tripData: this.props.tripData,
            dropDownOpen: false,

            openModalDelete: false,
            // openModalEdit: false,
            selected: false,
        }
    }

    // componentDidMount() {
    //     console.log(moment(this.props.accCheckInDate, "YYYY-MM-DD").format('D MMMM YYYY'));
    // }

    handleEdit() {
        this.setState({
            isOpen: true,
        });
    }

    handleDelete(accId) {

        this.setState({
            openModalDelete: true,
        })
        // console.log("ACC ID:", accId);
        // this.props.onDeleteAcc(accId);
    }

    // toggle MODAL
    toggle() {

        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    closeModal() {
        this.setState({
            // openModalEdit: false,
            openModalDelete: false,
        })
    }

    // toggle DROPDOWN
    toggleDropDown() {

        this.setState({
            dropDownOpen: !this.state.dropDownOpen,
            selected: !this.state.selected,
        });
    }

    render() {
        return (
            <>
            <Card body outline color="danger" style={styles.removeStrap}>
                <CardHeader style={{minHeight: 80,}}>
                    <div style={styles.cardContentCenter}>
                        <h5>{this.props.accName}</h5>
                    </div>
                </CardHeader>
                <CardBody>
                    <div style={styles.cardContentContainer}>
                        <div style={styles.cardContent}>
                            {this.props.accBookingId !== null && (<p>Booking ID: <strong>{this.props.accBookingId}</strong></p> )}
                            {this.props.accCheckInDate !== null && (<p>Check In Date: <strong>{moment(this.props.accCheckInDate, "YYYY-MM-DD").format("D MMMM YYYY")}</strong></p> )}
                            {this.props.accCheckInHour !== null && (<p>Check In Time: <strong>{('0000'+this.props.accCheckInHour).slice(-2)}:{('0000'+this.props.accCheckInMin).slice(-2)} {this.props.accCheckInHour < 12 ? " AM" : " PM"}</strong></p> )}
                            {this.props.accCheckOutDate !== null && (<p>Check Out Date: <strong>{moment(this.props.accCheckOutDate, "YYYY-MM-DD").format('D MMMM YYYY')}</strong></p> )}
                            {this.props.accCheckOutHour !== null && (<p>Check Out Time: <strong>{('0000'+this.props.accCheckOutHour).slice(-2)}:{('0000'+this.props.accCheckOutMin).slice(-2)} {this.props.accCheckInHour < 12 ? " AM" : " PM"}</strong></p> )}
                        </div>

                        <div style={styles.cardContent}>
                            <Dropdown isOpen={this.state.dropDownOpen} toggle={() => this.toggleDropDown()} style={styles.dropdownStyle} color="none" size="sm">
                                <DropdownToggle style={this.state.selected ? SECONDARY_COLOR : PRIMARY_COLOR} color="secondary">
                                    <ion-icon name="caret-down" style={{fontSize: 16, color: "black"}}></ion-icon>
                                </DropdownToggle>
                                <DropdownMenu style={styles.dropdownStyle}>
                                    <div style={styles.dropdownItemContainer} onClick={() => this.handleEdit()}>
                                        <ion-icon name="create-outline" style={{fontSize: 24}} onClick={() => this.handleEdit()}></ion-icon>
                                    </div>
                                    <div style={styles.dropdownItemContainer} >
                                        <ion-icon name="trash-outline" style={{fontSize: 24}} onClick={() => this.handleDelete(this.state.accId)}></ion-icon>
                                    </div>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </CardBody>
                <CardFooter style={{width: "100%"}}>
                    <p><strong>Cost: RM{this.props.accCost}</strong></p>
                </CardFooter>
            </Card>

                {/* -------------EDIT ACC MODAL-------------------- */}
                <Modal 
                    isOpen={this.state.isOpen} 
                    centered={true}
                    scrollable={true}
                    backdrop={true}
                    toggle={() => this.toggle()}
                    size="lg"
                >
                    <ModalHeader>Edit Accommodation Details</ModalHeader>
                    <ModalBody>
                        <div style={styles.bodyContainer}>
                            {/* ------------ACC EDIT FORM----------------- */}
                            <AccEditForm 
                                accId = {this.props.accId}
                                accName = {this.props.accName}
                                accBookingId = {this.props.accBookingId}
                                accCheckInDate = {this.props.accCheckInDate}
                                accCheckInHour = {this.props.accCheckInHour}
                                accCheckInMin = {this.props.accCheckInMin}
                                accCheckOutDate = {this.props.accCheckOutDate}
                                accCheckOutHour = {this.props.accCheckOutHour}
                                accCheckOutMin = {this.props.accCheckOutMin}
                                accCost = {this.props.accCost}
                            />
                        </div>
                    </ModalBody>
                </Modal>

                {/* --------------------------DELETE ACCOMMODATION-------------------------------- */}
                <DeleteTripModal
                    isOpen={this.state.openModalDelete}
                    toggle={() => this.closeModal()}
                    // destinationId = {this.state.tripId}

                    deleteType = "accommodation"
                    tripData = {this.state.tripData}
                    handleDelete = { () => this.props.onDeleteAcc( this.state.accId) }
                />          
            </>
        )
    }
};

const styles = {
    removeStrap: {
        margin: 0,
        padding: 0,
        minWidth: 400,
        maxWidth: 400,
        minHeight: 400,
        maxHeight: 400,
        borderRadius: 20,
        overflow: "hidden",
        backgroundImage: "none",
        shadowColor: "#000",
        boxShadow: "0.2px 0.2px 5px 0.7px rgba(0,0,0,0.4)"
    },
    cardContent: {
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // border: "1px solid black"
    },
    cardContentContainer: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // border: "1px solid black",
        // overflow: "hidden",
    },
    cardContentCenter: {
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid black"
    },
    updateContainer: {
        // width: "80%",
        // height: 40,
        backgroundColor: "white",
        margin: 20,
        overflow: "hidden",
        borderRadius: 10,
        // border: "1px solid rgba(0,0,0,0.4)",

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
    dropdownStyle: {
        backgroundColor: "none",
        border: "none",
        // width: 20,
        // border: "1px solid black",
    },
    dropdownItemContainer: {
        width: 40,
        padding: 5,
        boxSizing: "border-box",
        // backgroundColor: "yellow",
        marginBottom: 20

    },

    bodyContainer: {
        // backgroundColor: "yellow",
        // border: "1px solid black",
        overflowX: "scroll",
        disply: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
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