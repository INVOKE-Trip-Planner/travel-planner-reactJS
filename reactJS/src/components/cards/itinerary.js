import React from "react";

import { Card, CardHeader, CardBody, Modal, ModalHeader, ModalBody, Dropdown,  DropdownToggle, DropdownMenu,} from "reactstrap";

import { connect } from "react-redux";
import Actions from "actions";

import EditItinForm from "components/forms/itinerary/editItinForm.js";

import DeleteTripModal from "../../components/modals/deleteTrip";

import { PRIMARY_COLOR } from "common/styles/index.js";
import { SECONDARY_COLOR } from "../../common/styles";

class Itinerary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scheduleData: this.props.itinScheduleData,

            isOpen: false,

            itinId: this.props.itinId,
            itinDay: this.props.itinDay,

            dropDownOpen: false,

            openModalDelete: false,
            // openModalEdit: false,
        }
    }

    // componentDidMount() {
    //         // console.log("schedule data", this.state.scheduleData)
    //         // console.log("schedule data", this.state.scheduleData.filter(schedule => (schedule.itinerary_id === this.props.itinId) && schedule))
    // }

    handleEdit() {
        this.setState({
            isOpen: true,
        });

    }

    handleDelete(itinId) {

        this.setState({
            openModalDelete: true,
        })
        // this.props.onDeleteItin(itinId);
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
                    <CardHeader style={{width: "100%"}}>
                        <div style={styles.cardContentCenter}>
                            <h5>Day: <strong>{this.props.itinDay}</strong></h5>
                        </div>
                    </CardHeader>

                    {/* ----Itinerary Schedule-------- */}
                    <CardBody style={{overflow: "scroll", position: "relative"}}>
                        <div style={styles.cardContentActivity}>
                                <h5>Activity</h5>
                        </div>
                        
                        <div style={styles.cardContentOutsideContainer}>
                            <div style={styles.cardContentContainer}>
                                
                                {this.state.scheduleData.map(schedule => (
                                    <div style={styles.cardContent}>
                                        <p>Title: <strong>{schedule.title}</strong></p>
                                        <p>Desc: <strong>{schedule.description}</strong></p>
                                        <p>Time: <strong>{('0000'+schedule.hour).slice(-2)}:{('0000'+schedule.minute).slice(-2)}{schedule.hour < 12 ? " AM" : " PM"}</strong></p>
                                        <p>Cost: <strong>RM {schedule.cost}</strong></p>
                                    </div>
                                ))}
                            </div>

                            <div style={styles.dropdownContainer}>
                                <Dropdown isOpen={this.state.dropDownOpen} toggle={() => this.toggleDropDown()} style={styles.dropdownStyle} color="secondary" size="sm">
                                    <DropdownToggle style={this.state.selected ? SECONDARY_COLOR : PRIMARY_COLOR} color="secondary">
                                        <ion-icon name="caret-down" style={{fontSize: 16, color: "black"}}></ion-icon>
                                    </DropdownToggle>
                                    <DropdownMenu style={styles.dropdownStyle}>
                                        <div style={styles.dropdownItemContainer} onClick={() => this.handleEdit()}>
                                            <ion-icon name="create-outline" style={{fontSize: 24}} onClick={() => this.handleEdit()}></ion-icon>
                                        </div>
                                        <div style={styles.dropdownItemContainer} >
                                            <ion-icon name="trash-outline" style={{fontSize: 24}} onClick={() => this.handleDelete(this.state.transId)}></ion-icon>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </CardBody>
                {/* <CardFooter style={{width: "100%"}}>
                    <p>Total cost: <strong>RM{this.props.itinCost}</strong></p>
                </CardFooter> */}
            </Card>

                {/* -------------------------EDIT ITIN MODAL------------------------------------ */}
                <Modal 
                        isOpen={this.state.isOpen} 
                        centered={true}
                        scrollable={true}
                        backdrop={true}
                        toggle={() => this.toggle()}
                        size="lg"
                >
                    <ModalHeader>Edit Itinerary Details</ModalHeader>
                    <ModalBody>
                        <div style={styles.bodyContainer}>
                        {/* ------------ITINERARY FORM---------------------------------- */}
                        <EditItinForm 
                            itinId={this.state.itinId}
                            itinDay={this.state.itinDay}
                            itinScheduleData={this.state.scheduleData.filter(schedule => (schedule.itinerary_id === this.props.itinId) && schedule)}
                        />
                       </div>
                    </ModalBody>
                </Modal>

                {/* --------------------------DELETE ACCOMMODATION-------------------------------- */}
                <DeleteTripModal
                    isOpen={this.state.openModalDelete}
                    toggle={() => this.closeModal()}
                    // destinationId = {this.state.tripId}

                    deleteType = "itinerary"
                    tripData = {this.state.tripData}
                    handleDelete = { () => this.props.onDeleteItin( this.state.itinId) }
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
    cardContentCenter: {
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid black"
    },
    cardContentActivity: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // border: "1px solid black",
        width: "100%"
    },
    cardContentOutsideContainer: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // border: "1px solid black",
        width: "100%",
    },
    cardContentContainer: {
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // border: "1px solid black",
        overflow: "hidden",
    },
    cardContent: {
        padding: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderTop: "1px solid rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100%"
        // overflow: "scroll"
    },
    dropdownContainer: {
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        // border: "1px solid rgba(0, 0, 0, 0.4)",
        // width: "100%",
        // overflow: "scroll"
        position: "absolute",
        top: 10,
        right: 20,
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
    onDeleteItin: Actions.deleteItin,
    // onEditAcc: Actions.editAcc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);