import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Spinner } from 'reactstrap';
// import reducers from "../../reducers";

import { connect } from 'react-redux';
import Actions from 'actions';
import TripsCard from "../../components/cards/tripsCard";
import TripDetailsModal from "components/modals/tripDetails";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tripsList: [],
            showPop: false,
            listData: [],
            tripDetailsId: "",
            loading: true,
        };
    }

    componentDidMount() {
        console.log("DASHBOARD MOUNTED");

        this.props.onGetAll();
    }

    componentDidUpdate(prevProps) {
        console.log("DASHBOARD UPDATE");
        const { getGetAllData } = this.props;

        console.log("TRIP DATA", getGetAllData.data);


        if (prevProps.getGetAllData.isLoading && !getGetAllData.isLoading) {

            if ( (Object.keys(getGetAllData.data).length !== 0) ) {
                this.setState(
                    {
                        tripsList: getGetAllData.data,
                        loading: false,
                    }
                )
            }
        }
    }

    detailsPressed(id) {
        this.props.history.push({
            pathname: `/dashboard/${id}`,
            state: {
                data: this.state.tripsList.filter( item => item.id === id && item) // filter trip id -> to pass to the details page
                // tripId: id,
            }
        });
    }

    toggle() {

        this.setState({
            showPop: !this.state.showPop,
        });
    }

    render() {
        return(
            <> 
                <Container className="themed-container" fluid="lg" style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"center", padding: 0, margin: "0 auto"}}>

                    {/* <Row style={{width: "100%", height: "100%", border: "1px solid green", margin: 0, padding: 0}} xl="12"> */}
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
                            </Container> */}
                        {/* </Col> */}

                        {/* <Col md="10" lg="10" xl="10" style={{padding: 0, margin: 0}}> */}
                            {/*-------------------------Dashboard------------------------------------------------------------------------------------------------- */}
                            <Container className="themed-container" style={{border: "5px solid red", textAlign:"center", margin: 0, padding: 0}} fluid={true}  >

                                <h1>Dashboard</h1>

                                <div style={styles.selectContainer}>
                                    <button style={styles.selectButton} onClick={() => this.handleAll()}>Upcoming</button>
                                    <button style={styles.selectButton} onClick={() => this.handleAcc()}>Past Trips</button>
                                </div>

                                {this.state.loading ? (
                                    
                                <Row style={{justifyContent: "center", alignItems: "center"}}>
                                
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                </Row>) : (

                                <Row style={{justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>

                                    {
                                        this.state.tripsList.map( list => (
                                            <Col xs="2" md="6" lg="3" style={styles.columnStyle}>

                                                <TripsCard
                                                    tripData={list}
                                                    tripId={list.id}
                                                    tripTitle={list.trip_name}
                                                    tripOrigin={list.origin}
                                                    tripCreatedBy={list.created_by}
                                                    tripStartDate={list.start_date}
                                                    tripEndDate={list.end_date}
                                                    tripTotal={list.total}
                                                    tripUsers={list.users}
                                                    tripBanner={list.trip_banner}
                                                    onClick={() => this.detailsPressed()}
                                                />
                                            
                                                <div style={styles.buttonContainer}>
                                                    <Button 
                                                        style={{border: "rgba(0,0,0,0.4)"}} // backgroundImage: "linear-gradient(to bottom right, #E74C3C, #B03A2E)"}}
                                                        type="submit"
                                                        color="link"
                                                        // size="sm"
                                                        onClick={() => this.detailsPressed(list.id)}
                                                        block
                                                    >Trip Details</Button>
                                                </div>
                                            </Col>
                                        ) )
                                    }

                                </Row>
                                )}
                            </Container>
                        {/* </Col> */}

                    {/* </Row> */}
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
        // overflow: "hidden",
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
        // border: "1px solid rgba(0,0,0,0.4)",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    selectButton: {
        backgroundColor: "transparent",
        outline: "none",
        border: "1px solid rgba(0,0,0,0.4)",
        // borderRadius: 10,
        padding: 10,
        color: "black",
        // borderRadius: "50 0 0 0",
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
        justifyContent: "center",
        // backgroundColor: "grey",
        // marginBottom: 5,
        // paddingRight: 20,
        paddingBottom: 10,
        borderTop: "1px solid rgba(0,0,0,0.4)",
    }
}

// get data from api
const mapStateToProps = store => ({
    getGetAllData: Actions.getGetAllData(store),
    // getUserSession: Actions.getUserSession(store),
    // getDeleteTaskData: Actions.getDeleteTaskData(store)
});

// dispatch to action
const mapDispatchToProps = {
    onGetAll: Actions.getAll,
    // onCreate: Actions.create,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);