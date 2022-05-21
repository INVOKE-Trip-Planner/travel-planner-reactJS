import React from "react";
// import { Link } from "react-router-dom";

import { Container, Row, Button, Spinner, ButtonGroup, CardDeck } from 'reactstrap';

import fitri from "assets/images/brew/fitri.png"
import affiq from "assets/images/brew/affiq.png"
import aizat from "assets/images/brew/aizat.png"
import aliya from "assets/images/brew/aliya.png"
import lukman from "assets/images/brew/lukman.jpg"
import shakti from "assets/images/brew/shakti.png"
import shamiza from "assets/images/brew/shamiza.png"
import sharafi from "assets/images/brew/sharafi.png"
import siti from "assets/images/brew/siti.png"
// import reducers from "../../reducers";

import { connect } from 'react-redux';
import Actions from 'actions';

import moment from "moment";
import TripsCard from "../../components/cards/tripsCard";
// import TripDetailsModal from "components/modals/tripDetails";
import EditTripModal from "../../components/modals/editTrip";
import DeleteTripModal from "../../components/modals/deleteTrip";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "common/styles/index.js";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tripsList: [],
            showPop: false,
            listData: [],
            tripDetailsId: "",
            loading: true,
            openModalDelete: false,
            openModalEdit: false,
            tripData: null,

            filterTripsList: [],

            selected: false,

            colorChange: false,
        };
    }

    // componentDidMount() {
    //     // console.log("DASHBOARD MOUNTED");

    //     const { getUserSession } = this.props;

    //     // console.log("DASHBOARD DATA", this.state.tripsList);

    //     if (getUserSession.data.length === undefined || getUserSession.data.length === null || getUserSession.data.length === 0) {
    //         alert('No user detected. Please login or sign up.')
    //         this.props.history.push("/login");
    //     }

    //     this.props.onGetAll();
    // }

    // componentDidUpdate(prevProps) {
    //     // console.log("DASHBOARD UPDATE");
    //     const { getGetAllData, getUpdateTripData, getDeleteTripData } = this.props;

    //     // console.log("DASHBOARD DATA", this.state.tripsList.filter(list => list.start_date > moment().format("YYYY-MM-DD") && list ));

    //     // console.log("TRIP DATA", getGetAllData);
    //     // console.log("DELETETRIP DATA", getDeleteTripData);

    //     // console.log(getUpdateTripData)

    //     if (prevProps.getGetAllData.isLoading && !getGetAllData.isLoading) {

    //         if ( (Object.keys(getGetAllData.data).length !== 0) ) {
    //             this.setState(
    //                 {
    //                     tripsList: getGetAllData.data,
    //                     loading: false,
    //                     openModalDelete: false,
    //                     openModalEdit: false,
    //                 }
    //             )
    //         } else {
    //             this.setState({
    //                 loading: false,
    //             })
    //         }
    //     }

    //     // Update trip
    //     if (prevProps.getUpdateTripData.isLoading && !getUpdateTripData.isLoading) {
    //         if ( (Object.keys(getUpdateTripData.data).length !== 0) ) {
    //             this.setState({
    //                 loading: true,
    //                 tripsList: getGetAllData.data,
    //                 openModalEdit: false,
    //             })
    //             // alert(getEditAccData.data.message);
    //             alert(getUpdateTripData.data.message);
    //         } else {
    //             alert(Object.values(getUpdateTripData.error.errors).flat().join('\n'));
    //             alert("Update trip failed.")
    //         }
    //     }

    //     // Delete trip
    //     if (prevProps.getDeleteTripData.isLoading && !getDeleteTripData.isLoading) {
    //         if ( getDeleteTripData.error === null ) {
    //             this.setState({
    //                 loading: true,
    //                 tripsList: getGetAllData.data,
    //                 openModalDelete: false,
    //             })
    //             // alert(getEditAccData.data.message);
    //             alert("Successfully deleted trip.");
    //         } else {alert("Delete trip failed.")}
    //     }
    // }

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

    closeModal() {
        this.setState({
            openModalEdit: false,
            openModalDelete: false,
        })
    }

    handleShowModal(action, details) {
        // console.log('handleShowModal called', details);
        switch(action) {
            case "EDIT":
              this.setState({
                  openModalEdit: true,
                  tripData: details,
              })
              break;

            case "DELETE":
              this.setState({
                  openModalDelete: true,
                  tripData: details,
              })
              break;            

            default:
              // code block
              console.log("invalid planner category")
              break;
          }
    }
    
    buttonAllPressed() {
        this.setState({
            selected: false,
            // filterTripsList:  this.state.tripsList.filter(list => list.start_date > moment().format("YYYY-MM-DD") && list ),
            colorChangeAll: true,
            colorChangeUpcoming: false,
            colorChangePast: false,
        })
    }
    buttonUpcomingPressed() {
        this.setState({
            selected: true,
            filterTripsList:  this.state.tripsList.filter(list => list.start_date > moment().format("YYYY-MM-DD") && list ),
            colorChangeAll: false,
            colorChangeUpcoming: true,
            colorChangePast: false,
        })
    }
    buttonPastPressed() {
        this.setState({
            selected: true,
            filterTripsList:  this.state.tripsList.filter(list => list.start_date < moment().format("YYYY-MM-DD") && list ),
            colorChangeAll: false,
            colorChangeUpcoming: false,
            colorChangePast: true,
        })
    }

    handleAddTrip() {
        this.props.history.push("/addtrip");
    }

    render() {
        return(
            <> 
                <Container className="themed-container" fluid="xl" style={styles.dashboardContainer}>

                            {/*-------------------------Dashboard------------------------------------------------------------------------------------------------- */}
                            <Container className="themed-container" style={{ textAlign:"center", margin:0, padding: 0}} fluid={true}  >

                                <div style={{margin: 40,}}>
                                    <div style={styles.categoryTitleContainer}>
                                        <h1>Team V</h1>
                                            {/* <button style={styles.selectButton} onClick={() => this.handleAddTrip()}>
                                                <ion-icon name="add-circle-outline" style={{fontSize: 24}}></ion-icon
                                            ></button> */}

                                    </div>
                                </div>

                                    
                                    

                                    <Row style={{disply: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto"}}>

                                                    <CardDeck style={{disply: "flex", justifyContent: "center", alignItems: "center", margin: 10}}>

                                                        <TripsCard
                                                            image={fitri}
                                                            productName={"Fitri Ishak"}
                                                            model={"95062810"}
                                                            intendedUse={"To be a doer, a thinker and executor to solve the problem "}
                                                            features={["Think and execute the plan as solution to a problem"]}
                                                            A={"We think about something, use the brain and a little heart. It works"}
                                                            B={"He is a nice guy. Moderate in terms of style and fashion."}
                                                            C={"Do not make him exhausted or angry"}
                                                            D={"Every 6am, he will wake up by his own. Then, he take a nap. Will operate properly after 9 am. "}
                                                            E={"Use with care"}
                                                            F={""}
                                                            G={"Keep him motivate, money and maybe some foods :p"}
                                                            H={"Give him rest during weekend and public holiday"}
                                                            I={"Handle with care. He don't bite, but he might hurt your heart"}
                                                            J={"Operation: 9 hours per day, cannot eat spicy food"}


                                                        />

                                                        <TripsCard
                                                            image={sharafi}
                                                            productName={"SHARAFI ILMAN"}
                                                            model={"June 1993"}
                                                            intendedUse={"To build the best solution to solve the problem"}
                                                            features={["Trust with capability"]}
                                                            A={"Can do anything as much as you want"}
                                                            B={"Moderate, pragmatic"}
                                                            C={"Dont give the  wrong instruction"}
                                                            D={"As simple as you can"}
                                                            E={"Use with care"}
                                                            F={""}
                                                            G={"Give some motivation "}
                                                            H={"Give some space and time to do the better"}
                                                            I={"Happy go lucky person"}
                                                            J={"strong at sport"}


                                                        />
                                                        <TripsCard
                                                            image={siti}
                                                            productName={"CURIOSITI"}
                                                            model={"24"}
                                                            intendedUse={"To create better versions of objects with artistic individual expression."}
                                                            features={["Turn passion into reality by realising your vision."]}
                                                            A={"handy, creative, passionate and resourceful"}
                                                            B={"Aged yet powerful "}
                                                            C={"No cockiness or negative energy allowed "}
                                                            D={"You need passion and the ability to explain your idea to her clearly and effectively. "}
                                                            E={"Provide your motivations with a deeper literary significance for superior effect "}
                                                            F={"Feed with motivation/encouragement. She tends to burn out when she feels overworked."}
                                                            G={"Give me room to express myself/have autonomy to decide and for people to trust my decisions.  "}
                                                            H={"Send food as fuel/treat me to my favourite treats."}
                                                            I={""}
                                                            J={"needs time for breaks/needs encouragement/ needs good guidance and patience/ needs physical outlet "}

                                                        />
                                                        <TripsCard
                                                            image={lukman}
                                                            productName={"LookMan"}
                                                            model={"3669"}
                                                            intendedUse={"menghiburkan "}
                                                            features={""}

                                                        />
                                                        <TripsCard
                                                            image={shakti}
                                                            productName={"shakti"}
                                                            model={"710"}
                                                            intendedUse={"calling"}
                                                            features={["headset charger"]}
                                                            A={"system used for calling"}
                                                            B={"same android usage"}
                                                            C={"only can use 8hr per day"}
                                                            D={"pnp "}
                                                            E={"as easy as other phone"}
                                                            F={"if any problem don't use for 1day"}
                                                            G={"free maintenance"}
                                                            H={"send to factory for any faulty"}
                                                            I={"send to recycle centre"}
                                                            J={"12gb ram expandable 512gb hd expandable"}

                                                        />
                                                        <TripsCard
                                                            image={shamiza}
                                                            productName={"Shamiza abdullah"}
                                                            model={"2497"}
                                                            intendedUse={"sebagai pendengar setia"}
                                                            features={["recorder"]}
                                                            A={"sentiasa meluangkan masa untuk mendengar luahan hati kawan kawan"}
                                                            B={"senyum dan gelak"}
                                                            C={"dont like fake stories and people"}
                                                            D={"i got some stories to be share "}
                                                            E={"hanya just come and stories everything"}
                                                            F={"akan terlebih fikir penyelesaiannya tonton movie"}
                                                            G={"just be yourself "}
                                                            H={"get rid toxic in my life"}
                                                            I={""}
                                                            J={""}

                                                        />
                                                        <TripsCard
                                                            image={aliya}
                                                            productName={"Aliya"}
                                                            model={"AC80663"}
                                                            intendedUse={"To be helpful as possible in terms of career or as a person"}
                                                            features={["Easily influenced (good way), flexible, simple"]}
                                                            A={"Positive vibes, energetic, cognitive empathy"}
                                                            B={"Simple, Outgoing"}
                                                            C={"Fragile, no negative vibe allowed"}
                                                            D={"Explain nicely and professionally"}
                                                            E={"Need clear instructions with good manners"}
                                                            F={"Talk nicely and lend an ears to give opinions "}
                                                            G={"Give attention, positivity and motivation to move forward"}
                                                            H={"Give time and space. (Easy to cool and easy to burn out)"}
                                                            I={"Same way you when you get the product"}
                                                            J={"Understand the problem and find suitable solution for it"}

                                                        />
                                                            <TripsCard
                                                                image={affiq}
                                                                productName={"Affiq PRGF"}
                                                                model={"V. 29"}
                                                                intendedUse={"To create solutions for visual communications and ideation for a better way to communicate visually and creatively with audience/   happiness and solution to those needed"}
                                                                features={["Morph great ideas and concept into a stunning visual language"]}
                                                                A={"Unique, Witty, Enlightening, Speaks Volume, Bold"}
                                                                B={"Simple, Straight-forward"}
                                                                C={"Self-entitlement, Condescending, Judgemental, Toxic"}
                                                                D={"Assignment briefs, Clear message or instructions, Provide the support and materials required, Be professional"}
                                                                E={"Design is how it works"}
                                                                F={" Verbal communication is the best way to solve problems."}
                                                                G={"Work-life balance, Creative freedom, Faith and Chances"}
                                                                H={"Motivational talks, Self-improvement class, Counselling session"}
                                                                I={"Send back to factory "}
                                                                J={"A graphic artist that aims to solve the visual communication and ideation limitation from the product owner/ clients or customers"}
    
                                                            />
                                                        <TripsCard
                                                            image={aizat}
                                                            productName={"AZT"}
                                                            model={"v2.5"}
                                                            intendedUse={""}
                                                            features={[""]}
                                                            A={""}
                                                            B={""}
                                                            C={""}
                                                            D={""}
                                                            E={"s"}
                                                            F={""}
                                                            G={""}
                                                            H={""}
                                                            I={" "}
                                                            J={""}

                                                        />
                                            
                                                    </CardDeck>                                        

                                    </Row>
                            </Container>
                </Container>
                {/* --------------------------------------MODALS FOR CREATE FORMS----------------------------------- */}
                <EditTripModal
                    isOpen={this.state.openModalEdit}
                    toggle={() => this.closeModal()}
                    // destinationId = {this.state.tripId}
                    tripData = {this.state.tripData}
                    handleEdit = { this.props.onUpdateTrip }
                />
                <DeleteTripModal
                    isOpen={this.state.openModalDelete}
                    toggle={() => this.closeModal()}
                    // destinationId = {this.state.tripId}

                    deleteType = "trip"
                    tripData = {this.state.tripData}
                    handleDelete = { () => this.props.onDeleteTrip( {id: this.state.tripData.id} ) }
                />
            </>
        )
    }
}

const styles = {
    dashboardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", 
        alignItems:"flex-start", 
        padding: 0, 
        margin: "0 auto",
        marginTop: 50,

        // backgroundColor: "black",

        border: "0.2px solid rgba(0,0,0,0.3)",
        borderRadius: 20,
        minHeight: "100vh"
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
    columnStyle: {
        // border: "1px solid rgba(0,0,0,0.6)",
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
        border: "none",
        // border: "1px solid rgba(0,0,0,0.4)",
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
    getUserSession: Actions.getUserSession(store),
    // getDeleteTaskData: Actions.getDeleteTaskData(store)
    getUpdateTripData: Actions.getUpdateTripData(store),
    getDeleteTripData: Actions.getDeleteTripData(store),
});

// dispatch to action
const mapDispatchToProps = {
    onUpdateTrip: Actions.updateTrip,
    onDeleteTrip: Actions.deleteTrip,
    onGetAll: Actions.getAll,
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Dashboard);