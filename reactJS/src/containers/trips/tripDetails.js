import React from "react";

import { connect } from "react-redux";
import Actions from "actions";

import { Container, Row, Col, CardDeck, Jumbotron, Spinner, ButtonGroup, Button } from 'reactstrap';

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
            tripId: this.props.history.location.state.data[0].id,
            destinationId: this.props.history.location.state.data[0].destinations[0].id,
            openModalAcc: false,
            openModalTrans: false,
            openModalItin: false,
            isOpen: false,
            filterGetAllData: [],
            loading: true,

            filterLocation: false,
            filterLocationData: 'ok',
            filterLocationId: '',

            categorySelectAll: true,
            categorySelectAcc: false,
            categorySelectTrans: false,
            categorySelectItin: false,
        }
    }

    componentDidMount() {

        this.setState({
            filterLocationData: this.state.tripData[0].destinations[0],
            filterLocationId: this.state.destinationId,
        }, () => {console.log("filter id", this.state.filterLocationId)})

        this.props.onGetAll();
    }

    componentDidUpdate(prevProps) {
        const { getGetAllData, getCreateAccData, getEditAccData, getEditTransData, getDeleteAccData, getDeleteTransData, getDeleteItinData } = this.props;

        // console.log("FIRST Trip Data", this.state.filterLocationData);

        if (prevProps.getGetAllData.isLoading && !getGetAllData.isLoading) {

            // console.log("get all loading");

            if ( Object.keys(getGetAllData.data).length !== 0 ) {
                this.setState({
                    // filterGetAllData: getGetAllData.data.filter( list => (list.id === this.state.tripId) && list ),
                    tripData: getGetAllData.data.filter( list => (list.id === this.state.tripId) && list ),
                    // filterLocationData: this.state.tripData[0].destinations[0],
                    filterLocationId: this.state.destinationId,
                    loading: false,
                    filterLocation: true,
                })
            }
        }

        if (prevProps.getCreateAccData.isLoading && !getCreateAccData.isLoading) {
            if ( (Object.keys(getCreateAccData.data).length !== 0) ) {
                this.setState({
                    loading: true,
                    isOpen: false,
                })
                // alert(getEditAccData.data.message);
                alert("Create accommodation successful!");
            } else {alert("Create accommodation failed.")}
        }

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

        if (prevProps.getEditTransData.isLoading && !getEditTransData.isLoading) {
            if ( (Object.keys(getEditTransData.data.message).length !== 0) ) {
                this.setState({
                    loading: true,
                    isOpen: false,
                })
                // alert(getEditAccData.data.message);
                alert(getEditTransData.data.message);
            } else {alert("Edit transport failed.")}
        }

        if (prevProps.getDeleteAccData.isLoading && !getDeleteAccData.isLoading) {
            if ( (Object.keys(getDeleteAccData.data.message).length !== 0) ) {
                this.setState({
                    loading: true,
                })
                alert(getDeleteAccData.data.message);
            } else {alert("Delete accommodation failed.") }
        }

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
                            <Container className="themed-container" style={{border: "1px solid black", borderRadius: 10, textAlign:"center", margin: 0, padding: 0,}} fluid={true} >

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
                                        <Row style={{display: "flex", justifyContent: "space-between", padding: 20, border: "1px solid black"}}>
                                            <Col>
                                            <h6>Destinations:</h6>
                                            <ButtonGroup>                                               
                                                { list.destinations.map( destination => (
                                                    <Button onClick={() => this.filterLocation(destination)}>{destination.location}</Button>
                                                ))}
                                            </ButtonGroup>
                                            </Col>
                                            <Col>
                                            <h6>Category:</h6>
                                            <ButtonGroup>
                                                <Button  onClick={() => this.handleCategory()}>All</Button>
                                                <Button  onClick={() => this.handleCategory("accommodation")}>Accommodations</Button>
                                                <Button  onClick={() => this.handleCategory("transport")}>Tranports</Button>
                                                <Button  onClick={() => this.handleCategory("itinerary")}>Itineraries</Button>
                                            </ButtonGroup>
                                            </Col>
                                        </Row>
                                        
                                        {/* --------------------ACCOMMODATIONS------------------------------------------ */}
                                        { (this.state.categorySelectAll || this.state.categorySelectAcc) &&

                                        <Row style={{width: "100%", justifyContent: "center", margin: 0,}}>

                                        <div style={{width: "100%", display:"flex", justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 20,}}>

                                            <div style={styles.categoryTitleContainer}>
                                                <h4>Accommodations</h4>
                                                <button style={styles.selectButton} onClick={() => this.handleCreate("accommodation")}><ion-icon name="add-circle-outline" style={{fontSize: 24}}></ion-icon></button>
                                            </div>
                                        </div>

                                        {this.state.loading ? (

                                        <Row style={{justifyContent: "center", alignItems: "center"}}>
                                
                                            <Spinner animation="border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner>
                                        </Row>) : (

                                        <Row style={{width: "100%", justifyContent: "center", margin: 0,}}>

                                                { this.state.filterLocation && (

                                                    this.state.filterLocationData.accommodations.map( accommodation => (
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
                                                    ))
                                                )}
                                            

                                                {/* {list.destinations.map( destination => 

                                                    destination.accommodations.map( accommodation => (
                                                        <CardDeck style={styles.cardDeckStyle}>
                                                            <Accommodation
                                                                destinationId = {destination.id}
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
                                                    ) )
                                                )} */}
                                        </Row>

                                        )}
</Row>
                                }

                                        {/* ----------------------------TRANSPORT------------------------------------------- */}

                                        {(this.state.categorySelectAll || this.state.categorySelectTrans) && 

                                        (<Row style={{width: "100%", justifyContent: "center", margin: 0}}>

                                            <div style={{width: "100%", display:"flex", justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 20,}}>

                                                <div style={styles.categoryTitleContainer}>
                                                    <h4>Transports</h4>
                                                    <button style={styles.selectButton} onClick={() => this.handleCreate("accommodation")}><ion-icon name="add-circle-outline" style={{fontSize: 24}}></ion-icon></button>
                                                </div>
                                            </div>

                                        {this.state.loading ? (

                                            <Row style={{justifyContent: "center", alignItems: "center"}}>

                                                <Spinner animation="border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>
                                            </Row>) : (

                                            <Row style={{width: "100%", justifyContent: "center", margin: 0,}}>

                                            { this.state.filterLocation && (

                                                this.state.filterLocationData.transports.map( transport => (
                                                    <CardDeck style={styles.cardDeckStyle}>
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
                                                    </CardDeck>
                                                ))
                                            )}

                                                    {/* {list.destinations.map( destination => (

                                                        destination.transports.map( transport => (
                                                            <CardDeck>
                                                                <Transport
                                                                    destinationId = {destination.id}
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
                                                            </CardDeck>
                                                        ))
                                                    ))} */}
                                            </Row>
                                        )}

                                        </Row>)
                                        }

                                        {/* -------------------------------ITINERARIES------------------------------------------------ */}

                                        {(this.state.categorySelectAll || this.state.categorySelectItin) && 

                                        <Row style={{width: "100%", justifyContent: "center", margin: 0,}}>

                                            <div style={{width: "100%", display:"flex", justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 20,}}>

                                                <div style={styles.categoryTitleContainer}>
                                                    <h4>Itineraries</h4>
                                                    <button style={styles.selectButton} onClick={() => this.handleCreate("accommodation")}><ion-icon name="add-circle-outline" style={{fontSize: 24}}></ion-icon></button>
                                                </div>
                                            </div>

                                        {this.state.loading ? (

                                            <Row style={{justifyContent: "center", alignItems: "center"}}>

                                                <Spinner animation="border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>
                                            </Row>) : (

                                        <Row style={{width: "100%", justifyContent: "center", margin: 0,}}>

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
{/* 
                                            {list.destinations.map( destination => (

                                                destination.itineraries.map( itinerary => (
                                                    <CardDeck>
                                                        <Itinerary 
                                                            itinId={itinerary.id}
                                                            itinDay={itinerary.day}
                                                            itinScheduleData={itinerary.schedules}
                                                            // itiCost={itinerary.cost}
                                                        />
                                                    </CardDeck>
                                                ))
                                            ))} */}
                                        </Row>

                                        )}

                                        </Row>
                                        }

                                    </div>
                                ) )
                                }
                            </Container>
                        {/* </Col> */}

                    {/* </Row> */}

                                    {/* --------------------------------------MODALS FOR CREATE FORMS----------------------------------- */}
                <CreateAccModal 
                    isOpen={this.state.openModalAcc}
                    toggle={() => this.toggle()}
                    destinationId = {this.state.filterLocationData.id}
                    // tripData = {this.state.filterLocationData.id}
                />
                <CreateTransModal 
                    isOpen={this.state.openModalTrans}
                    toggle={() => this.toggle()}
                    destinationId = {this.state.filterLocationData.id}
                    // tripData = {this.state.filterLocationData.id}
                    
                />
                <CreateItinModal 
                    isOpen={this.state.openModalItin}
                    toggle={() => this.toggle()}
                    data = {this.state.filterLocationData.id}
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
    categoryTitleContainer: {
        // width: "80%",
        // height: 40,
        backgroundColor: "white",
        margin: 20,
        padding: 20,
        // overflow: "hidden",
        borderRadius: 10,
        // border: "1px solid rgba(0,0,0,0.4)",

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
    }
}

// get data from api
const mapStateToProps = (store) => ({
    getGetAllData: Actions.getGetAllData(store),
    getCreateAccData: Actions.getCreateAccData(store),
    getEditAccData: Actions.getEditAccData(store),
    getDeleteAccData: Actions.getDeleteAccData(store),
    getEditTransData: Actions.getEditTransData(store),
    getDeleteTransData: Actions.getDeleteTransData(store),
    getDeleteItinData: Actions.getDeleteItinData(store),
});

const mapDispatchToProps = {
    onGetAll: Actions.getAll,
    // onDeleteAcc: Actions.deleteAcc,
    // onEditAcc: Actions.editAcc,
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);