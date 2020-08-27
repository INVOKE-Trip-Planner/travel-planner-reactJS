import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, Button, Dropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col} from "reactstrap";

import { connect } from "react-redux";
import Actions from "actions";

import moment from "moment";

import TransEditForm from "components/forms/transport/editTransForm.js";

import DeleteTripModal from "../../components/modals/deleteTrip";

import { PRIMARY_COLOR } from "common/styles/index.js";
import { SECONDARY_COLOR } from "../../common/styles";

class Transport extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            transId: this.props.transId,
            tripData: this.props.tripData,
            dropDownOpen: false,

            openModalDelete: false,
            // openModalEdit: false,
        }
    }



    handleEdit() {
        this.setState({
            isOpen: true,
        });

    }

    handleDelete(transId) {

        this.setState({
            openModalDelete: true,
        })

        // console.log('delete');
        // this.props.onDeleteTrans(transId);
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen,
            // dropDownOpen: !this.state.dropDownOpen,
        });
    }

    closeModal() {
        this.setState({
            // openModalEdit: false,
            openModalDelete: false,
        })
    }

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
                    <CardHeader>
                        <div style={styles.cardContentCenter}>
                            <h5>{this.props.transMode}</h5>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div style={styles.cardContentContainer}>
                            <div style={styles.cardContent}>
                                {this.props.transBookingId !== null && ( <p>Booking ID: <strong>{this.props.transBookingId}</strong></p> )}
                                {this.props.transOrigin !== null && ( <p>Origin: <strong>{this.props.transOrigin}</strong></p> )}
                                {this.props.transDestination !== null && ( <p>Destination: <strong>{this.props.transDestination}</strong></p> )}
                                {this.props.transDepartureDate !== null && (<p>Departure Date: <strong>{moment(this.props.transDepartureDate, "YYYY-MM-DD").format('D MMMM YYYY')}</strong></p> )}
                                {/* <p>Departure Time: <strong>{this.props.transDepartureHour}:{this.props.transDepartureMin}</strong></p> */}
                                {this.props.transDepartureHour !== null && (
                                    <p>Departure Time: <strong>{this.props.transDepartureHour !== null && (('0000'+this.props.transDepartureHour).slice(-2))}:{ this.props.transDepartureMin !== null && (('0000'+this.props.transDepartureMin).slice(-2))}{this.props.transDepartureHour < 12 ? " AM" : " PM"}</strong></p> 
                                )}

                                {this.props.transArrivalDate !== null && ( <p>Arrival Date: <strong>{moment(this.props.transArrivalDate, "YYYY-MM-DD").format('D MMMM YYYY')}</strong></p> )}
                                {/* <p>Arrival Time: <strong>{this.props.transArrivalHour}:{this.props.transArrivalMin}</strong></p> */}
                                {this.props.transArrivalHour !== null && ( 
                                    <p>Arrival Time: <strong>{this.props.transArrivalHour !== null && (('0000'+this.props.transArrivalHour).slice(-2))}:{this.props.transArrivalMin !== null && (('0000'+this.props.transArrivalMin).slice(-2))}{this.props.transArrivalHour < 12 ? " AM" : " PM"}</strong></p> 
                                )}
                                {this.props.transOperator !== null && ( <p>Operator: <strong>{this.props.transOperator}</strong></p> )}
                            </div>

                            <div style={styles.cardContent}>
                                <Dropdown isOpen={this.state.dropDownOpen} toggle={() => this.toggleDropDown()} style={styles.dropdownStyle} color="none" size="sm">
                                    <DropdownToggle style={this.state.selected ? SECONDARY_COLOR : PRIMARY_COLOR} color="secondary">
                                        <ion-icon name="caret-down" style={{fontSize: 16, color: "black"}}></ion-icon>
                                    </DropdownToggle>
                                    <DropdownMenu style={styles.dropdownStyle}>
                                        <div style={styles.dropdownItemContainer} onClick={() => this.handleEdit()}>
                                            <ion-icon name="create-outline" style={{fontSize: 24, cursor: 'pointer',}} onClick={() => this.handleEdit()}></ion-icon>
                                        </div>
                                        <div style={styles.dropdownItemContainer} >
                                            <ion-icon name="trash-outline" style={{fontSize: 24, cursor: 'pointer',}} onClick={() => this.handleDelete(this.state.transId)}></ion-icon>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </CardBody>
                    {this.props.transCost !== null && (
                        <CardFooter style={{width: "100%"}}>
                            <p><strong>Cost: RM{this.props.transCost}</strong></p>
                        </CardFooter>
                    )}
                </Card>
            
                {/* -------------------- CREATE TRANS MODAL ------------------------- */}
                <Modal 
                    isOpen={this.state.isOpen} 
                    centered={true}
                    scrollable={true}
                    backdrop={true}
                    toggle={() => this.toggle()}
                    size="lg"
                >
                    <ModalHeader>Edit Transport Details</ModalHeader>
                    <ModalBody>
                        <div style={styles.bodyContainer}>
                            {/* ------------TRANSPORT EDIT FORM----------------- */}
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
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>

                {/* --------------------------DELETE TRANSPORT-------------------------------- */}
                <DeleteTripModal
                    isOpen={this.state.openModalDelete}
                    toggle={() => this.closeModal()}
                    // destinationId = {this.state.tripId}

                    deleteType = "transport"
                    tripData = {this.state.tripData}
                    handleDelete = { () => this.props.onDeleteTrans( this.state.transId) }
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
        minHeight: 500,
        maxHeight: 500,
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
        // overflowY: "scroll",
        disply: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

// get data from api
const mapStateToProps = (store) => ({
});

const mapDispatchToProps = {
    onDeleteTrans: Actions.deleteTrans,
    // onEditAcc: Actions.editAcc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transport);