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
            <Card body outline color="danger">
                    <CardHeader style={{width: "100%"}}>
                        <p>Day: <strong>{this.props.itinDay}</strong></p>
                        <p>Activity:</p>
                    </CardHeader>

                    {/* ----Itinerary Schedule-------- */}
                    <CardBody>  
                        {this.state.scheduleData.map(schedule => (
                            <div style={{border: "1px solid black", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "justify"}}>
                                <p>Title: <strong>{schedule.title}</strong></p>
                                <p>Desc: <strong>{schedule.description}</strong></p>
                                <p>Time: <strong>{schedule.hour}:{schedule.minute}</strong></p>
                                <p>Cost: <strong>RM {schedule.cost}</strong></p>
                            </div>
                        ))}
                
                    </CardBody>
                <CardFooter>
                    <p>Total cost: <strong>RM{this.props.itinCost}</strong></p>
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
        minWidth: 500,
        borderRadius: 20,
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
        overflow: "hidden",
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