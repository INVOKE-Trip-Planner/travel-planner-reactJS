import React from "react";

import { connect } from "react-redux";
import Actions from "actions";

import { Container, Row, Col, CardDeck, Jumbotron, Spinner, ButtonGroup, Button } from 'reactstrap';

import banner1 from "assets/images/banner1.jpg"

import placeholder from "assets/images/placeholder.png";
import Accommodation from "../../components/cards/accommodation";
import Transport from "../../components/cards/transport";
import Itinerary from "../../components/cards/itinerary";

import CreateDestModal from "components/modals/create/createDest.js";
import CreateAccModal from "components/modals/create/createAcc.js";
import CreateTransModal from "components/modals/create/createTrans.js";
import CreateItinModal from "components/modals/create/createItin.js";

import { PRIMARY_COLOR } from "common/styles/index.js";

class TripDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tripData: this.props.history.location.state.data,
            tripId: this.props.history.location.state.data[0].id,
            destinationId: this.props.history.location.state.data[0].destinations[0].id,

            openModalDest: false,
            openModalAcc: false,
            openModalTrans: false,
            openModalItin: false,

            isOpen: false,
            filterGetAllData: [],
            loading: true,

            filterLocation: true,
            filterLocationData: this.props.history.location.state.data[0],
            filterLocationId: '',

            categorySelectAll: true,
            categorySelectAcc: false,
            categorySelectTrans: false,
            categorySelectItin: false,

            // selectedDestination: false,
            selectedAll: true,
            selectedAcc: false,
            selectedTrans: false,
            selectedItin: false,
        }
    }

    componentDidMount() {

        console.log("DASHBOARD MOUNTED");

        console.log("details data", this.state.tripData[0])

        const { getUserSession } = this.props;

        // console.log("HOME USER SESSION", getUserSession.data.length);

        if (getUserSession.data.length === undefined || getUserSession.data.length === null || getUserSession.data.length === 0) {
            alert('No user detected. Please login or sign up.')
            this.props.history.push("/login");
        }

        this.setState({
            filterLocationData: this.state.tripData[0].destinations[0],
            filterLocationId: this.state.destinationId,
        }, () => {console.log("data", this.state.filterLocationData)})

        this.props.onGetAll();
    }

    componentDidUpdate(prevProps) {
        const { getGetAllData, getCreateAccData, getCreateTransData, getCreateItinData, getEditAccData, getEditTransData, getEditItinData, getDeleteAccData, getDeleteTransData, getDeleteItinData } = this.props;

        // console.log("FIRST Trip Data", this.state.filterLocationData);

        if (prevProps.getGetAllData.isLoading && !getGetAllData.isLoading) {

            // console.log("get all loading");

            if ( Object.keys(getGetAllData.data).length !== 0 ) {
                this.setState({
                    // filterGetAllData: getGetAllData.data.filter( list => (list.id === this.state.tripId) && list ),
                    tripData: getGetAllData.data.filter( list => (list.id === this.state.tripId) && list ),
                    // filterLocationData: getGetAllData.data.filter( list => (list.id === this.state.tripId) && list ),
                    filterLocationId: this.state.destinationId,
                    loading: false,
                    filterLocation: true,
                })
            }
        }

        // Create Acc
        if (prevProps.getCreateAccData.isLoading && !getCreateAccData.isLoading) {
            if ( (Object.keys(getCreateAccData.data).length !== 0) ) {
                this.setState({
                    loading: true,
                    openModalAcc: false,
                })
                // alert(getEditAccData.data.message);
                alert("Create accommodation successful!");
            } else {alert("Create accommodation failed.")}
        }

        // Create Trans
        if (prevProps.getCreateTransData.isLoading && !getCreateTransData.isLoading) {
            if ( (Object.keys(getCreateTransData.data).length !== 0) ) {
                this.setState({
                    loading: true,
                    openModalTrans: false,
                })
                // alert(getEditAccData.data.message);
                alert("Create transport successful!");
            } else {alert("Create transport failed.")}
        }

        // Create Itinerary
        if (prevProps.getCreateItinData.isLoading && !getCreateItinData.isLoading) {
            if ( (Object.keys(getCreateItinData.data).length !== 0) ) {
                this.setState({
                    loading: true,
                    openModalItin: false,
                })
                // alert(getEditAccData.data.message);
                alert("Create itinerary successful!");
            } else {alert("Create itinerary failed.")}
        }

        // Edit Accommodation
        if (prevProps.getEditAccData.isLoading && !getEditAccData.isLoading) {
            if ( (Object.keys(getEditAccData.data.message).length !== 0) ) {
                this.setState({
                    loading: true,
                    isOpen: false,
                })
                // alert(getEditAccData.data.message);
                alert(getEditAccData.data.message);
            } else {alert("Edit accommodation failed.")}
        }

        // Edit transport
        if (prevProps.getEditTransData.isLoading && !getEditTransData.isLoading) {
            if ( (Object.keys(getEditTransData.data).length !== 0) ) {
                this.setState({
                    loading: true,
                    isOpen: false,
                })
                // alert(getEditAccData.data.message);
                alert(getEditTransData.data.message);
            } else {alert("Edit transport failed.")}
        }

        // Edit itinerary 
        if (prevProps.getEditItinData.isLoading && !getEditItinData.isLoading) {
            if ( (Object.keys(getEditItinData.data).length !== 0) ) {
                this.setState({
                    loading: true,
                    isOpen: false,
                })
                // alert(getEditAccData.data.message);
                alert(getEditItinData.data.message);
            } else {alert("Edit itinerary failed.")}
        }


        // delete accommodation
        if (prevProps.getDeleteAccData.isLoading && !getDeleteAccData.isLoading) {
            if ( (Object.keys(getDeleteAccData.data.message).length !== 0) ) {
                this.setState({
                    loading: true,
                })
                alert(getDeleteAccData.data.message);
            } else {alert("Delete accommodation failed.") }
        }

        // delete transport
        if (prevProps.getDeleteTransData.isLoading && !getDeleteTransData.isLoading) {

            if ( (Object.keys(getDeleteTransData.data.message).length !== 0) ) {

                this.setState({
                    loading: true,
                })

                alert(getDeleteTransData.data.message);

            } else {
                alert("Delete transport failed.")
            }
        }

        // delete itinerary
        if (prevProps.getDeleteItinData.isLoading && !getDeleteItinData.isLoading) {

            if ( (Object.keys(getDeleteItinData.data.message).length !== 0) ) {

                this.setState({
                    loading: true,
                })

                alert(getDeleteItinData.data.message);

            } else {
                alert("Delete itinerary failed.")
            }
        }
    }

    handleCategory(category) {

        switch(category) {
            case "accommodation":

              this.setState({
                  categorySelectAcc: true,
                  categorySelectAll: false,
                  categorySelectTrans: false,
                  categorySelectItin: false,

                  selectedAcc: true,
              })
              break;

            case "transport":

              this.setState({
                  categorySelectTrans: true,
                  categorySelectAll: false,
                  categorySelectAcc: false,
                  categorySelectItin: false,
              })
              break;            
              
            case "itinerary":

              this.setState({
                  categorySelectItin: true,
                  categorySelectAll: false,
                  categorySelectTrans: false,
                  categorySelectAcc: false,
              })
              break;

            default:
                console.log("default")
              // code block
              this.setState({
                  categorySelectAll: true,
                  categorySelectAcc: false,
                  categorySelectTrans: false,
                  categorySelectItin: false,
              })
              break;
          }
    }

    handleCreate(category = "") {

        switch(category) {
            case "destination":

              this.setState({
                  openModalDest: true,
              })
              break;
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
            openModalDest: false,
            openModalAcc: false,
            openModalTrans: false,
            openModalItin: false,
        });
    }

    filterLocation(data){
        // console.log("filter data", data);
        // console.log("trip data", this.state.tripData.map( list => list.destinations.filter( destination => (destination.id === data.id) && destination )[0])[0]);

        this.setState({
            filterLocation: true,
            filterLocationData: this.state.tripData.map( list => list.destinations.filter( destination => (destination.id === data.id) && destination )[0])[0],
            filterLocationId: data.id,
        })
    }

    render() {
        return (
            <>
                <Container className="themed-container" fluid={true} style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"center", padding: 0, margin: "0 auto"}}>

                            {/*-------------------------Dashboard------------------------------------------------------------------------------------------------- */}
                            <Container className="themed-container" style={{textAlign:"center", margin: 0, padding: 0,}} fluid={true} >

                                {this.state.tripData.map( list => (

                                    <div style={{width: "100%", justifyContent: "center"}}>

                                        {/* -----------------------------------------JUMBOTRON----------------------------------------------------------------------------- */}
                                        <Row style={{width: "100%", justifyContent: "center", margin: 0, color: "white",}}>

                                            <Jumbotron fluid style={{backgroundImage: `url(http://localhost:8000/storage/trip_banners/${this.state.tripData[0].trip_banner})`, opacity: 0.8, ...styles.jumbotronStyle}}>
                                                <Container fluid>
                                                    <div style={{marginBottom: 40,}}>
                                                        <h1 className="display-3">{list.trip_name}</h1>
                                                    </div>
                                                    <h5>From: <strong>{list.origin}</strong></h5>
                                                    <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                                                        <h5>Start Date: <strong>{list.start_date}</strong></h5>
                                                        <h5>End Date: <strong>{list.end_date}</strong></h5>
                                                    </div>
                                                    <h5>Trip Cost: <strong>RM{list.cost}</strong></h5>
                                                </Container>
                                            </Jumbotron>
                                        </Row>

                                        {/* -----------------------------------FILTER------------------------------------------------------------------------------------ */}
                                        <Row style={{display: "flex", justifyContent: "space-between", padding: 0, margin: "0 auto",}}>

                                            {/* -------------------------DESTINATION FILTER-------------------------------------- */}
                                            <Col xs="12" sm="12" md="5" lg="5" xl="5" style={{margin: "0 auto", padding: 5,}}>
                                                <h6>Destinations:</h6>
                                                <ButtonGroup>                                               
                                                    { list.destinations.map( destination => (
                                                        <Button style={PRIMARY_COLOR} onClick={() => this.filterLocation(destination)}>{destination.location}</Button>
                                                    ))}
                                                    <Button onClick={() => this.handleCreate("destination")} style={PRIMARY_COLOR}>
                                                        <ion-icon name="create" style={{fontSize: 24}}></ion-icon>
                                                    </Button>
                                                </ButtonGroup>
                                            </Col>

                                            {/* -------------------------CATEGORY FILTER-------------------------------------- */}
                                            <Col xs="12" sm="12" md="5" lg="5" xl="5" style={{margin: "0 auto", padding: 5,}}>
                                                <h6>Category:</h6>
                                                <ButtonGroup>
                                                    <Button style={PRIMARY_COLOR} onClick={() => this.handleCategory()}>All</Button>
                                                    <Button style={PRIMARY_COLOR} onClick={() => this.handleCategory("accommodation")}>Accommodation</Button>
                                                    <Button style={PRIMARY_COLOR} onClick={() => this.handleCategory("transport")}>Transport</Button>
                                                    <Button style={PRIMARY_COLOR} onClick={() => this.handleCategory("itinerary")}>Itinerary</Button>
                                                </ButtonGroup>
                                            </Col>
                                        </Row>
                                        
                                        {/* --------------------ACCOMMODATIONS------------------------------------------ */}
                                        { (this.state.categorySelectAll || this.state.categorySelectAcc) &&

                                            <Row style={{width: "100%", justifyContent: "center", margin: 0, padding: 0,}}>

                                                <div style={{width: "100%", display:"flex", justifyContent: "center", alignItems: "center", marginTop: 20, borderBottom: "1px solid rgba(0,0,0,0.4)",}}>
                                                    <div style={styles.categoryTitleContainer}>

                                                        <h4>Accommodations</h4>
                                                        <button style={styles.selectButton} onClick={() => this.handleCreate("accommodation")}><ion-icon name="add-circle-outline" style={{fontSize: 24}}></ion-icon></button>
                                                    </div>
                                                </div>

                                                {this.state.loading ? (

                                                <Row style={{justifyContent: "center", alignItems: "center", margin: 0, padding: 0,}}>
                                        
                                                    <Spinner animation="border" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </Spinner>
                                                </Row>) : (

                                                <Row style={{width: "100%", justifyContent: "center", margin: 0, padding: 0}}>

                                                        { this.state.filterLocation && (
                                                            
                                                            this.state.filterLocationData.accommodations.map( accommodation => (
                                                                // <div style={{height: "100vh", border: "1px solid black"}}>
                                                                <CardDeck style={styles.cardDeckStyle}>
                                                                <Accommodation
                                                                        accId = {accommodation.id}
                                                                        accName = {accommodation.accommodation_name}
                                                                        accBookingId = {accommodation.booking_id}
                                                                        accCheckInDate = {accommodation.checkin_date}
                                                                        accCheckInHour = {accommodation.checkin_hour}
                                                                        accCheckInMin = {accommodation.checkin_minute}
                                                                        accCheckOutDate = {accommodation.checkout_date}
                                                                        accCheckOutHour = {accommodation.checkout_hour}
                                                                        accCheckOutMin = {accommodation.checkout_minute}
                                                                        accCost = {accommodation.cost}
                                                                    />
                                                                </CardDeck>
                                                                // </div>
                                                            ))
                                                        )}
                                                    
                                                </Row>

                                            )}
                                            </Row>
                                        }

                                        {/* ----------------------------TRANSPORT------------------------------------------- */}

                                        {(this.state.categorySelectAll || this.state.categorySelectTrans) && 

                                            (<Row style={{width: "100%", justifyContent: "center", margin: 0, padding: 0,}}>

                                                <div style={{width: "100%", display:"flex", justifyContent: "center", alignItems: "center", marginTop: 50, borderBottom: "1px solid rgba(0,0,0,0.4)"}}>
                                                    <div style={styles.categoryTitleContainer}>
                                                        <h4>Transports</h4>
                                                        <button style={styles.selectButton} onClick={() => this.handleCreate("transport")}><ion-icon name="add-circle-outline" style={{fontSize: 24}}></ion-icon></button>
                                                    </div>
                                                </div>

                                                {this.state.loading ? (

                                                    <Row style={{justifyContent: "center", alignItems: "center", margin: 0, padding: 0,}}>
                                                        <Spinner animation="border" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </Spinner>
                                                    </Row>) : (

                                                    <Row style={{width: "100%", justifyContent: "center", margin: 0, padding: 0,}}>

                                                        { this.state.filterLocation && (

                                                            this.state.filterLocationData.transports.map( transport => (
                                                                <CardDeck style={styles.cardDeckStyle}>
                                                                    {/* <div style={{height: "100vh"}}> */}
                                                                    <Transport
                                                                        transId = {transport.id}
                                                                        transMode = {transport.mode}
                                                                        transBookingId = {transport.booking_id}
                                                                        transDepartureDate = {transport.departure_date}
                                                                        transDepartureHour = {transport.departure_hour}
                                                                        transDepartureMin = {transport.departure_minute}
                                                                        transArrivalDate = {transport.arrival_date}
                                                                        transArrivalHour = {transport.arrival_hour}
                                                                        transArrivalMin = {transport.arrival_minute}
                                                                        transOrigin = {transport.origin}
                                                                        transDestination = {transport.destination}
                                                                        transOperator = {transport.operator}
                                                                        transCost = {transport.cost}
                                                                    />
                                                                    {/* </div> */}
                                                                </CardDeck>
                                                            ))
                                                        )}

                                                    </Row>
                                                )}

                                            </Row>)
                                        }

                                        {/* -------------------------------ITINERARIES------------------------------------------------ */}

                                        {(this.state.categorySelectAll || this.state.categorySelectItin) && 

                                            <Row style={{width: "100%", justifyContent: "center", margin: 0, padding: 0,}}>

                                                <div style={{width: "100%", display:"flex", justifyContent: "center", alignItems: "center", marginTop: 50, borderBottom: "1px solid rgba(0,0,0,0.4)"}}>

                                                    <div style={styles.categoryTitleContainer}>
                                                        <h4>Itineraries</h4>
                                                        <button style={styles.selectButton} onClick={() => this.handleCreate("itinerary")}><ion-icon name="add-circle-outline" style={{fontSize: 24}}></ion-icon></button>
                                                    </div>
                                                </div>

                                                {this.state.loading ? (

                                                    <Row style={{justifyContent: "center", alignItems: "center", margin: 0, padding: 0,}}>

                                                        <Spinner animation="border" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </Spinner>
                                                    </Row>) : (

                                                    <Row style={{width: "100%", justifyContent: "center", margin: 0, padding: 0,}}>

                                                        { this.state.filterLocation && (

                                                            this.state.filterLocationData.itineraries.map( itinerary => (
                                                                <CardDeck style={styles.cardDeckStyle}>
                                                                    <Itinerary 
                                                                        itinId={itinerary.id}
                                                                        itinDay={itinerary.day}
                                                                        itinScheduleData={itinerary.schedules}
                                                                        // itiCost={itinerary.cost}
                                                                    />
                                                                </CardDeck>
                                                            ))
                                                        )}
                                                    </Row>

                                                )}

                                            </Row>
                                        }

                                    </div>
                                ) )
                                }
                            </Container>

                {/* --------------------------------------MODALS FOR CREATE FORMS----------------------------------- */}

                {/* -----------------------------------CREATE DESTINATION------------------------------------- */}
                <CreateDestModal 
                    isOpen={this.state.openModalDest}
                    toggle={() => this.toggle()}
                    tripData={this.state.tripData}
                />

                {/* -----------------------------------CREATE ACCOMMODATION------------------------------------- */}
                <CreateAccModal 
                    isOpen={this.state.openModalAcc}
                    toggle={() => this.toggle()}
                    destinationId = {this.state.filterLocationData.id}
                    // tripData = {this.state.filterLocationData.id}
                />

                {/* -----------------------------------CREATE TRANSPORT------------------------------------- */}
                <CreateTransModal 
                    isOpen={this.state.openModalTrans}
                    toggle={() => this.toggle()}
                    destinationId = {this.state.filterLocationData.id}
                    // tripData = {this.state.filterLocationData.id}
                />

                {/* -----------------------------------CREATE ITINERARY------------------------------------- */}
                <CreateItinModal 
                    isOpen={this.state.openModalItin}
                    toggle={() => this.toggle()}
                    destinationId = {this.state.filterLocationData.id}
                    // tripData = {this.state.filterLocationData.id}
                />
                </Container>


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
    jumbotronStyle:
        {
            width: "100%", 
            height: "100%", 
            justifyContent: "center", 
            alignItems: "center", 
            // backgroundImage: `url(http://localhost:8000/storage/trip_banners/${this.state.tripData[0].trip_banner})`,
            backgroundPosition: "center", 
            backgroundSize: "cover", 
            opacity: 0.9, 
            textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
            fontWeight: "bold",
        }
    ,
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
    categoryTitleContainer: {
        // width: "80%",
        // height: 40,
        backgroundColor: "white",
        margin: 5,
        padding: 5,
        // overflow: "hidden",
        // borderRadius: 10,
        // borderTop: "1px solid rgba(0,0,0,0.4)",
        // borderBottom: "1px solid rgba(0,0,0,0.4)",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    selectButton: {
        backgroundColor: "transparent",
        outline: "none",
        // border: "1px solid rgba(0,0,0,0.4)",
        border: "none",
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
    },
    cardDeckStyle: {
        margin: 10,
        // border: "1px solid blue",
        // overflow: "scroll"
        // height: "100vh"
    }
}

// get data from api
const mapStateToProps = (store) => ({
    getUserSession: Actions.getUserSession(store),
    getGetAllData: Actions.getGetAllData(store),

    getCreateAccData: Actions.getCreateAccData(store),
    getEditAccData: Actions.getEditAccData(store),
    getDeleteAccData: Actions.getDeleteAccData(store),

    getCreateTransData: Actions.getCreateTransData(store),
    getEditTransData: Actions.getEditTransData(store),
    getDeleteTransData: Actions.getDeleteTransData(store),

    getCreateItinData: Actions.getCreateItinData(store),
    getEditItinData: Actions.getEditItinData(store),
    getDeleteItinData: Actions.getDeleteItinData(store),
});

const mapDispatchToProps = {
    onGetAll: Actions.getAll,
    // onDeleteAcc: Actions.deleteAcc,
    // onEditAcc: Actions.editAcc,
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);