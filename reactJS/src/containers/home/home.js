import React from "react";

import {Container, Row, Col, Button} from "reactstrap";

import {PRIMARY_COLOR, PRIMARY_COLOR_FONT} from "common/styles/index.js";

import FrontPageBanner from "../../assets/images/frontpage.jpg";
import TravelPlan1 from "../../assets/images/travel_plan1.png";
import TravelPlan2 from "../../assets/images/travel_plan2.png";
import TravelPlan3 from "../../assets/images/travel_plan3.png";

import SearchForm from "../../components/forms/search/searchform.js";

// Redux
import { connect } from "react-redux";
import Actions from "../../actions";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            showExplore: true,
        }
    }

    componentDidMount() {
        const { getUserSession } = this.props;

        console.log("HOME USER SESSION", getUserSession.data.length);
    }

    handlePlan() {
        this.setState({
            showExplore: true,
        })
    }

    handleExplore() {
        this.setState({
            showExplore: false,
        })
    }

    handleAddTrip() {
        this.props.history.push("/addtrip");
    }


    render() {
        return (
            <>  
                <Container className="themed-container" fluid={true} style={styles.fillPage}>
                    <div style={styles.firstContainer}>
                        <div style={styles.imageContainer}>
                            <img id="frontpage" src={FrontPageBanner} alt="frontpage" style={styles.frontImage}/>
                        </div>
                        <div style={styles.contentContainer}>
                            <div style={styles.contentTopContainer}>
                                <div style={styles.titleContainer}>
                                    <h1>Plan your trip with Trip<span style={PRIMARY_COLOR_FONT}>Bantu</span></h1>
                                    <h5>Making trip planning easier for all travellers anywhere, anytime!</h5>
                                </div>


                                {/* ----------USER CAN CHOOSE TO PLAN TRIP OR EXPLORE PLACES--------------- */}
                                <div style={styles.selectContainer}>
                                    <button style={styles.selectButton} onClick={() => this.handlePlan()}>Plan your trip</button>
                                    <button style={styles.selectButton} onClick={() => this.handleExplore()}>Explore places</button>
                                </div>
                                <div style={styles.searchContainer}>

                                    {this.state.showExplore ?
                                        (
                                        <div>
                                        {/* <h4>Create a new trip</h4> */}
                                        <Button 
                                            style={PRIMARY_COLOR}
                                            size="lg"
                                            // block
                                            onClick={()=>this.handleAddTrip()}
                                        >Begin Planning
                                        </Button>
                                        </div>)
                                        : 
                                        (<SearchForm />)
                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                    <div style={styles.learnContainer}>
                            <h4>Learn More about TripBantu</h4>
                            <ion-icon name="chevron-down-outline" size="large"></ion-icon>
                        </div>
                </Container>
                <Container fluid="xl" style={styles.fillPage}>
                    {/* --------------LEARN ROW 1------------------------ */}
                    <Row md="12" style={styles.removeStrap}>
                        <Col xs="12" sm="12" md="12" lg="12" xl="6" style={{margin: 0, padding: 0}}>
                            <div style={styles.learnImageContainer}>
                                <img id="travelimg1" src={TravelPlan1} alt="travelimg1" style={styles.undrawImage}/>
                            </div>
                        </Col>
                        <Col xs="0" sm="0" md="0" lg="6" xl="6" style={{margin: 0, padding: 0,}}>
                            <div style={styles.centerContent2}>
                                <h2>We'll help you organize your travel bookings.</h2>
                            </div>
                        </Col>
                    </Row>
                    {/* -------------------LEARN ROW 2------------------------------------- */}
                    <Row md="12" style={styles.removeStrap}>
                        <Col xs="0" sm="0" md="12" lg="12" xl="6" style={{margin: 0, padding: 0}}>
                            <div style={styles.centerContent2}>
                                <h2>All your travel informations easily accessible, anywhere, anytime!</h2>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="0" lg="6" xl="6" style={{margin: 0, padding: 0,}}>
                            <div style={styles.learnImageContainer}>
                                <img id="travelimg2" src={TravelPlan2} alt="travelimg2" style={styles.undrawImage}/>
                            </div>
                        </Col>
                    </Row>
                    {/* --------------------------LEARN ROW 3------------------------------------- */}
                    <Row md="12" style={styles.removeStrap}>
                        <Col xs="12" sm="12" md="12" lg="12" xl="6" style={{margin: 0, padding: 0}}>
                            <div style={styles.learnImageContainer}>
                                <img id="travelimg3" src={TravelPlan3} alt="travelimg3" style={styles.undrawImage}/>
                            </div>
                        </Col>
                        <Col xs="0" sm="0" md="0" lg="6" xl="6" style={{margin: 0, padding: 0,}}>
                            <div style={styles.centerContent2}>
                                <h2>We make travelling with your friends/family easy for everyone.</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

const styles = {
    removeStrap: {
        padding: 0,
        margin: 0,
        width: "100%",
        // border: "3px solid blue",
        borderTop: "1px solid rgba(0,0,0,0.4)",
        borderBottom: "1px solid rgba(0,0,0,0.4)",
        // backgroundColor: "yellow",
    },
    fillPage: {
        // borderBottom: "1px solid rgba(0,0,0,0.4)",
        // margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 400,
    },
    firstContainer: {
        height: "80vh",
        width: "100%",
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        position: "relative",
    },
    imageContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "80vh",

        position: "absolute",
        zIndex: -1,
    },
    frontImage: {
        width: "100%",
        height: "80vh",
    },
    contentContainer: {
        // border: "1px solid black",
        width: "70%",
        height: "70vh",
        backgroundColor: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // padding: 40,

        position: "absolute",
        zIndex: 1,
    },
    contentTopContainer: {
        // backgroundColor: "blue",
        width: "100%",
        height: "80%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",

    },
    titleContainer: {
        minwidth: "100%",
        // height: 300,
        // backgroundColor: "black",
        color: "white",

        padding: 20,
    },
    selectContainer: {
        // width: "80%",
        height: 45,
        // border: "1px solid rgba(0,0,0,0.8)",
        backgroundColor: "white",
        margin: 20,
        overflow: "hidden",
        borderRadius: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    searchContainer: {
        minwidth: "25%",
        // height: 150,
        // backgroundColor: "white",
        // border: "3px solid yellow",

        padding: 20,
    },
    selectButton: {
        minHeight: "inherit",
        backgroundColor: "transparent",
        outline: "none",
        boxShadow: "none",
        border: "1px solid rgba(0,0,0,0.4)",
        padding: 10,
        color: "black",
        // borderRadius: "50 0 0 0",
    },
    undrawImage: {
        width: "100%",
        height: "100%",
        padding: 50,
        // opacity: 0.5,
        // boxSizing: "border-box",
        // border: "1px solid black"
    },
    learnImageContainer: {
        // border: "1px solid red",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // padding: 50
    },
    centerContent: {
        height: "50vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid rgba(0,0,0,0.4)",
    },
    centerContent2: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid rgba(0,0,0,0.4)",
        padding: 50,
    },
    learnContainer: {
        // border: "1px solid cyan",
        height: "15vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    fillPage1: {
        margin: 0,
        padding: 0,
        position: "relative",
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        // border: "5px solid pink",
        borderRight: "1px solid rgba(0,0,0,0.4)",
    },
    fillPage2: {
        // height: "50vh",
        margin: 0,
        padding: 0,
        position: "absolute",
        right: 0,
        // border: "5px solid pink",

    },
    fillPage3: {
        margin: 0,
        padding: 0,
        position: "relative",
        left: 0,
        // border: "5px solid pink",
        // width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        borderRight: "1px solid rgba(0,0,0,0.4)",
    },
}
  

const mapStateToProps = (store) => ({
    // getLoginData: Actions.getLoginData(store),
    getUserSession: Actions.getUserSession(store),
    // getUpdateUserData: Actions.getUpdateUserData(store)
  })
  
const mapDispatchToProps = {
    // resetUserSession: Actions.resetUserSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);