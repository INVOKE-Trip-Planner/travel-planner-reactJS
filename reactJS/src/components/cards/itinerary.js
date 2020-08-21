import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, Button, Dropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col} from "reactstrap";

import { connect } from "react-redux";
import Actions from "actions";

import ItinArrayForm from "components/forms/itinerary/itinArray.js";

class Itinerary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scheduleData: this.props.itinScheduleData,
            isOpen: false,
            itinId: this.props.itinId,
            dropDownOpen: false,
        }
    }

    componentDidMount() {

        var list = this.state.scheduleData.map( data => data.hour);

        console.log("sort Schedule data", list)

        let keys = Object.keys(list)

        console.log("sorted", keys.sort((a,b) => { return list[a] - list[b] })
        .reduce( (prev,curr,i) => {
            prev[i] = list[curr]
            return prev
        }, {} )
        );
    }

    handleEdit() {
        this.setState({
            isOpen: true,
        });

    }

    handleDelete(itinId) {
        this.props.onDeleteItin(itinId);
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    toggleDropDown() {

        this.setState({
            dropDownOpen: !this.state.dropDownOpen,
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
                                        <p>Time: <strong>{schedule.hour}:{schedule.minute}</strong></p>
                                        <p>Cost: <strong>RM {schedule.cost}</strong></p>
                                    </div>
                                ))}
                            </div>

                            <div style={styles.dropdownContainer}>
                                <Dropdown isOpen={this.state.dropDownOpen} toggle={() => this.toggleDropDown()} style={styles.dropdownStyle} color="none" size="sm">
                                    <DropdownToggle>
                                        <ion-icon name="chevron-down-outline"></ion-icon>
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
                <CardFooter style={{width: "100%"}}>
                    <p>Total cost: <strong>RM{this.props.itinCost}</strong></p>
                </CardFooter>
            </Card>

                <Modal 
                        isOpen={this.state.isOpen} 
                        centered={true}
                        scrollable={true}
                        backdrop={true}
                        toggle={() => this.toggle()}
                        size="lg"
                >
                    <ModalHeader></ModalHeader>
                    <ModalBody>
                        <ItinArrayForm 
                            itinId={this.state.itinId}
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
    removeStrap: {
        margin: 0,
        padding: 0,
        maxWidth: 500,
        borderRadius: 20,
        maxHeight: 450,
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
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderTop: "1px solid rgba(0, 0, 0, 0.4)",
        width: "100%",
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