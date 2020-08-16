import React from "react";

import {Container, Row, Col, Button} from "reactstrap";

import FrontPageBanner from "../../assets/images/frontpage.jpg";

import SearchForm from "../../components/forms/search/searchform.js";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            showExplore: true,
        }
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
                <Container className="themed-container" fluid="xl" style={styles.fillPage}>
                    <div style={styles.firstContainer}>
                        <div style={styles.imageContainer}>
                            <img id="frontpage" src={FrontPageBanner} alt="frontpage" style={styles.frontImage}/>
                        </div>
                        <div style={styles.contentContainer}>
                            <div style={styles.contentTopContainer}>
                                <div style={styles.titleContainer}>
                                    <h1>Plan your trip with TripBantu</h1>
                                    <p>Making trip planning easier for all travellers anywhere, anytime!</p>
                                </div>


                                {/* ----------USER CAN CHOOSE TO PLAN TRIP OR EXPLORE PLACES--------------- */}
                                <div style={styles.selectContainer}>
                                    <button style={styles.selectButton} onClick={() => this.handlePlan()}>Plan your trip</button>
                                    <button style={styles.selectButton} onClick={() => this.handleExplore()}>Explore places</button>
                                </div>
                            </div>
                            <div style={styles.searchContainer}>

                                {this.state.showExplore ?
                                    (
                                    <div>
                                    <h4>Create a new trip</h4>
                                    <Button 
                                        style={{
                                            border: "none", 
                                            backgroundImage: "linear-gradient(to bottom right, #E74C3C, #B03A2E)"
                                        }}
                                        size="lg"
                                        block
                                        onClick={()=>this.handleAddTrip()}
                                    >Plan Trip
                                    </Button>
                                    </div>)
                                    : 
                                    (<SearchForm />)}
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}

const styles = {
    fillPage: {
        // border: "1px solid black",
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
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
    },
    imageContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "100vh",

        position: "absolute",
        zIndex: -1,
    },
    frontImage: {
        width: "100%",
        height: "80vh",
    },
    contentContainer: {
        width: "100%",
        height: "40vh",
        backgroundColor: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // padding: 40,

        position: "absolute",
        zIndex: 1,
    },
    contentTopContainer: {
        backgroundColor: "blue",
        width: "80%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",

    },
    titleContainer: {
        width: "100%",
        height: 150,
        backgroundColor: "black",
        color: "white",

        padding: 20,
    },
    selectContainer: {
        // width: "80%",
        // height: 40,
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
        width: "80%",
        height: 150,
        backgroundColor: "white",
        border: "1px solid black",

        padding: 20,
    },
    selectButton: {
        backgroundColor: "transparent",
        outline: "none",
        border: "1px solid rgba(0,0,0,0.4)",
        padding: 10,
        color: "black",
        // borderRadius: "50 0 0 0",
    }
}
  

export default Home;