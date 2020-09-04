import React from "react";
import {Link} from "react-router-dom";

import fitri from "assets/images/brew/fitri.png"

import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardBody, CardFooter, CardImg, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

import moment from "moment";

import banner1 from "assets/images/banner1.jpg";

import placeholder from "assets/images/placeholder.png";
import { connect } from "react-redux";
import Actions from "actions";

import { PRIMARY_COLOR } from "common/styles/index.js";
import { SECONDARY_COLOR } from "../../common/styles";

class TripsCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tripData: this.props.tripData,
            usersList: this.props.tripUsers,

            tripCreator: '',
            listId: this.props.tripId,
            dropdownOpen: false,

            selected: false,
        }
    }

    handleEdit() {
        this.setState({
            isOpen: true,
        });
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    // buttonPressed() {
    //     this.setState({
    //         selected: !this.state.selected,
    //     })
    // }

    render() {
        return (
            <>
                <Card body outline color="warning" style={styles.removeStrap}>
                    <CardImg src={this.props.image} style={styles.imageSize}/>
                    <CardBody>
                        <div style={styles.cardContentContainer}>
                            <div style={styles.cardContent}>
                                <p>Product Name: <strong>{this.props.productName}</strong></p>
                                <p>Model: <strong>{this.props.model}</strong></p>
                                <p>Intended Use: </p><p><strong>{this.props.intendedUse}</strong></p>
                                <p>Features: </p><p><strong>{this.props.features}</strong></p>
                            </div>


                        </div>
                    </CardBody>
                    <CardFooter style={{width: "100%"}}>
                        <Button 
                            style={styles.linkstyle} // backgroundImage: "linear-gradient(to bottom right, #E74C3C, #B03A2E)"}}
                            type="submit"
                            color="link"
                            // size="sm"
                            onClick={() => this.handleEdit()}
                            block
                        >Product Details</Button>
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
                    <ModalHeader>Product Details</ModalHeader>
                    <ModalBody>
                        <div style={styles.bodyContainer}>
                            <p>Product Name: </p><p><strong>{this.props.productName}</strong></p><br/>

                            <p>Model/Type Number: </p><p><strong>{this.props.model}</strong></p><br/>
                            <p>Intended Use: </p><p><strong>{this.props.intendedUse}</strong></p><br/>
                            <p>Features: </p><p><strong>{this.props.features}</strong></p><br/>
                            <p>Description of main product elements: </p><p><strong>{this.props.A}</strong></p><br/>
                            <p>Description of user interface: </p><p><strong>{this.props.B}</strong></p><br/>
                            <p>Safety warnings: </p><p><strong>{this.props.C}</strong></p><br/>
                            <p>Installation instructions: </p><p><strong>{this.props.D}</strong></p><br/>
                            <p>Description to operate: </p><p><strong>{this.props.E}</strong></p><br/>
                            <p>Troubleshooting section: </p><p><strong>{this.props.F}</strong></p><br/>
                            <p>Maintenance information: </p><p><strong>{this.props.G}</strong></p><br/>
                            <p>Repair information: </p><p><strong>{this.props.H}</strong></p><br/>
                            <p>Information on disposal of the product and packaging: </p><p><strong>{this.props.I}</strong></p><br/>
                            <p>Technical specifications: </p><p><strong>{this.props.J}</strong></p>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

const styles = {
    removeStrap: {
        margin: 10,
        padding: 0,
        minWidth: 400,
        maxWidth: 500,
        minHeight: 800,
        maxHeight: 800,
        borderRadius: 20,
        overflow: "hidden",
        backgroundImage: "none",
        shadowColor: "#000",
        boxShadow: "0.2px 0.2px 5px 0.7px rgba(0,0,0,0.4)"
    },
    imageSize: {
        // border: "1px solid black",
        width: "100%",
        height: 350,
        objectFit: "cover",
        margin: "0 auto",
        objectPosition: "0px 0px"
        // zIndex: 1,
    },
    imageContainer: {
        width: "100%",
        height: "50%",
        // borderRadius: 2,
        // borderColor: "red",
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        // padding: 20,
        // borderBottom: "1px solid rgba(0,0,0,0.4)",
        // position: "relative",
        // zIndex: 1,
    },
    tripImageBox: {
        width: "100%",
        height: "20%",
        padding: 0,
        // position: "absolute",
        // zIndex: 0,
    },
    cardTripTitle: {
        background: "none",
        padding: 20,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        // border: "1px solid black"
        // position: "absolute",
        zIndex: 2,
    },
    usersContainer: {
        background: "none",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        // position: "absolute",
        padding: 20,
        zIndex: 2,
    },
    avatarSize: {
        width: 30,
        height: 30,
        objectFit: "cover",
        objectPosition: "center",
        zIndex: 2,
    },
    avatarContainer: {
        // background: "none",
        width: 25,
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "0.5px solid black",
        background: "white",
        borderRadius: 20,
        margin: 2,

        overflow: "hidden",
        // zIndex: 2,
    },
    tripContent: {
        minWidth: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 20,
    },
    dropdownStyle: {
        backgroundColor: "none",
        baackground: "none",
        width: 20,
    },
    dropdownItemContainer: {
        width: 20,
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },




    cardContent: {
        padding: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // border: "1px solid black",
        textAlign: "justify",
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
    chevronDownOutline: {
        color: "white",
    },
    linkstyle: {
        textDecoration: "none",
        color: "black",
    },
}

const mapStateToProps = (store) => ({
    getDeleteTripData: Actions.getDeleteTripData(store),
    getGetAllData: Actions.getGetAllData(store),
})
  
const mapDispatchToProps = {
    onDeleteTrip: Actions.deleteTrip,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TripsCard);