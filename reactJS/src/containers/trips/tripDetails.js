import React from "react";

import { connect } from "react-redux";
import Actions from "actions";

import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardGroup, CardDeck, Jumbotron,CardHeader, CardFooter } from 'reactstrap';

import placeholder from "assets/images/placeholder.png";
import Accommodation from "../../components/cards/accommodation";
import Transport from "../../components/cards/transport";
import Itinerary from "../../components/cards/itinerary";

import CreateAccModal from "components/modals/create/createAcc.js";
import CreateTransModal from "components/modals/create/createTrans.js";
import CreateItinModal from "components/modals/create/createItin.js";

class TripDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tripData: this.props.history.location.state.data,
            openModalAcc: false,
            openModalTrans: false,
            openModalItin: false,
            isOpen: false,
        }
    }

    componentDidMount() {
        console.log(this.state.tripData);

        this.props.onGetAllAcc();
    }

    componentDidUpdate(prevProps) {
        const { getDeleteAccData } = this.props;

        // console.log("1. GET ALL ACC DATA UPDATE", getGetAllAccData);

        if (prevProps.getDeleteAccData.isLoading && !getDeleteAccData.isLoading) {
            console.log("2. acc loading check");
            console.log("DELETE MESSAGE", getDeleteAccData.data.message);
            if ( (Object.keys(getDeleteAccData.data.message).length !== 0) ) {
                console.log("3. acc data check")
                alert(getDeleteAccData.data.message);

                // this.setState({
                //     tripData:
                // });
                window.location.reload(); // reloads the page after logging out
            } else {
                alert("Delete failed.")
            }
        }
    }

    handleCreate(category = "") {

        switch(category) {
            case "accommodation":

              this.setState({
                  openModalAcc: true,
              })
              break;

            case "transport":

              this.setState({
                  openModalTrans: true,
              })
              break;            
              
            case "itinerary":

              this.setState({
                  openModalItin: true,
              })
              break;

            default:
              // code block
              console.log("invalid planner category")
              break;
          }
    }

    toggle() {

        this.setState({
            openModalAcc: false,
            openModalTrans: false,
            openModalItin: false,
        });
    }

    render() {
        return (
            <>
                <Container className="themed-container" fluid={true} style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"center", padding: 0, margin: "0 auto"}}>

                    {/* <Row style={{width: "100%", height: "100%", margin: 0, padding: 0}} xl="12"> */}
                        {/* <Col md="2" lg="2" xl="2" style={{padding: 0, margin: 0}}> */}
                            {/* ---------------------------------------------Sidebar--------------------------------------------------------------------------- */}
                            {/* <Container className="themed-container" style={{border: "5px solid blue", margin: 0, padding: 0, display:"flex",flexDirection:"column",justifyContent: "center"}} fluid={true}>
                                <h1>Sidebar</h1>
                                <Row>
                                    <Col xs="4" sm="4" md="12" lg="12">
                                        <div style={styles.sidebarBox}>
                                            <p>Accommodations</p>
                                        </div>
                                    </Col>
                                    <Col xs="4" sm="4" md="12" lg="12">
                                        <div style={styles.sidebarBox}>
                                            <p>Transports</p>
                                        </div>
                                    </Col>
                                    <Col xs="4" sm="4" md="12" lg="12">
                                        <div style={styles.sidebarBox}>
                                            <p>Itineraries</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col> */}

                        {/* <Col md="10" lg="10" xl="10" style={{padding: 0, margin: 0}}> */}
                            {/*-------------------------Dashboard------------------------------------------------------------------------------------------------- */}
                            <Container className="themed-container" style={{border: "1px solid black", borderRadius: 10, textAlign:"center", margin: 0, padding: 0,}} fluid="xl" >

                                <h3>Trip Details</h3>
                                {this.state.tripData.map( list => (
                                    <div style={{width: "100%", justifyContent: "center"}}>

                                        {/* -----------------------------------------JUMBOTRON----------------------------------------------------------------------------- */}
                                        <Row style={{width: "100%", justifyContent: "center", margin: 0}}>
                                            <Jumbotron fluid style={{width: "100%", justifyContent: "center",}}>
                                                <Container fluid>
                                                    <h1 className="display-3">{list.trip_name}</h1>
                                                    <p>From: {list.origin}</p>
                                                    <div style={{display: "flex", justifyContent: "space-around"}}>
                                                        <p>Start Date: {list.start_date}</p>
                                                        <p>End Date: {list.end_date}</p>
                                                    </div>
                                                    <p>Trip Cost: RM{list.cost}</p>
                                                </Container>
                                            </Jumbotron>
                                        </Row>

                                        {/* -----------------------------------FILTER------------------------------------------------------------------------------------ */}
                                        <Row style={{display: "flex", justifyContent: "flex-end"}}>
                                            <div style={styles.selectContainer}>
                                                <button style={styles.selectButton} onClick={() => this.handleAll()}>All</button>
                                                <button style={styles.selectButton} onClick={() => this.handleAcc()}>Accommodations</button>
                                                <button style={styles.selectButton} onClick={() => this.handleTrans()}>Tranports</button>
                                                <button style={styles.selectButton} onClick={() => this.handleItin()}>Itineraries</button>
                                            </div>
                                        </Row>
                                        
                                        {/* --------------------ACCOMMODATIONS------------------------------------------ */}
                                        <div style={{width: "100%", display:"flex", justifyContent: "space-between", alignItems: "space-between", marginTop: 20, marginBottom: 20,}}>
                                            <div></div>

                                            <div><h4>Accommodations</h4></div>

                                            <div style={styles.selectContainer}>
                                                <button style={styles.selectButton} onClick={() => this.handleCreate("accommodation")}><ion-icon name="add-circle-outline"></ion-icon></button>
                                            </div>
                                        </div>

                                        <Row style={{width: "100%", justifyContent: "center", margin: 0,}}>

                                                {list.destinations.map( destination => (

                                                    destination.accommodations.map( accommodation => (
                                                        <CardDeck>
                                                            <Accommodation
                                                                accID = {accommodation.id}
                                                                accName = {accommodation.accommodation_name}
                                                                accBookingId = {accommodation.booking_id}
                                                                accCheckIn = {accommodation.checkin_time}
                                                                accCheckOut = {accommodation.checkout_time}
                                                                accCost = {accommodation.cost}
                                                            />
                                                        </CardDeck>
                                                    ))
                                                ))}
                                        </Row>

                                        {/* ----------------------------TRANSPORT------------------------------------------- */}
                                        <div style={{width: "100%", display:"flex", justifyContent: "space-between", alignItems: "space-between", marginTop: 20, marginBottom: 20,}}>
                                            <div></div>

                                            <div><h4>Transport</h4></div>

                                            <div style={styles.selectContainer}>
                                                <button style={styles.selectButton} onClick={() => this.handleCreate("transport")}><ion-icon name="add-circle-outline"></ion-icon></button>
                                            </div>
                                        </div>
                                        <Row style={{width: "100%", justifyContent: "center", margin: 0,}}>

                                                {list.destinations.map( destination => (

                                                    destination.transports.map( transport => (
                                                        <CardDeck>
                                                            <Transport 
                                                                transMode = {transport.mode}
                                                                transBookingId = {transport.booking_id}
                                                                transDeparture = {transport.departure_time}
                                                                transArrival = {transport.arrival_time}
                                                                transOrigin = {transport.origin}
                                                                transDestination = {transport.destination}
                                                                transOperator = {transport.operator}
                                                                transCost = {transport.cost}
                                                            />
                                                        </CardDeck>
                                                    ))
                                                ))}
                                        </Row>

                                        {/* -------------------------------ITINERARIES------------------------------------------------ */}
                                        <div style={{width: "100%", display:"flex", justifyContent: "space-between", alignItems: "space-between", marginTop: 20, marginBottom: 20,}}>
                                            <div></div>

                                            <div><h4>Itinerary</h4></div>

                                            <div style={styles.selectContainer}>
                                                <button style={styles.selectButton} onClick={() => this.handleCreate("itinerary")}><ion-icon name="add-circle-outline"></ion-icon></button>
                                            </div>
                                        </div>
                                        <Row style={{width: "100%", justifyContent: "center", margin: 0,}}>

                                            {list.destinations.map( destination => (

                                                destination.itineraries.map( itinerary => (
                                                    <CardDeck>
                                                        <Itinerary 
                                                            itiDate={itinerary.date}
                                                            itiScheduleData={itinerary.schedule}
                                                            itiCost={itinerary.cost}
                                                        />
                                                    </CardDeck>
                                                ))
                                            ))}
                                        </Row>
                                    </div>
                                ) )
                                }
                            </Container>
                        {/* </Col> */}

                    {/* </Row> */}
                </Container>

                {/* --------------------------------------MODALS FOR CREATE FORMS----------------------------------- */}
                <CreateAccModal 
                    isOpen={this.state.openModalAcc}
                    toggle={() => this.toggle()}
                />
                <CreateTransModal 
                    isOpen={this.state.openModalTrans}
                    toggle={() => this.toggle()}
                />
                <CreateItinModal 
                    isOpen={this.state.openModalItin}
                    toggle={() => this.toggle()}
                />
            </>
        )
    }
}

const styles = {
    columnStyle: {
        border: "1px solid rgba(0,0,0,0.6)",
        borderRadius: 20,
        minWidth: 400,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 0,
        margin: 10,
        overflow: "hidden",
    },
    sidebarBox: {
        border: "2px solid black",
        width: "100%",
        height: 40,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // margin: 10,
        padding: 10,
    },
    selectContainer: {
        // width: "80%",
        // height: 40,
        backgroundColor: "white",
        margin: 20,
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid rgba(0,0,0,0.4)",

        display: "flex",
        flexDirection: "row",
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
    tripContent: {
        minWidth: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 10,
    },
    buttonContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 5,
        paddingRight: 20,
    }
}

// get data from api
const mapStateToProps = (store) => ({
    getGetAllAccData: Actions.getGetAllAccData(store),
    getDeleteAccData: Actions.getDeleteAccData(store),
    // getEditAccData: Actions.getEditAccData(store),
});

const mapDispatchToProps = {
    onGetAllAcc: Actions.getAllAcc,
    onDeleteAcc: Actions.deleteAcc,
    // onEditAcc: Actions.editAcc,
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);