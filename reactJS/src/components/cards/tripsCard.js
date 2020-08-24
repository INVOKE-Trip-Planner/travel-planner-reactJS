import React from "react";
import {Link} from "react-router-dom";

import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardBody, CardFooter, CardImg} from "reactstrap";

import banner1 from "assets/images/banner1.jpg";

import placeholder from "assets/images/placeholder.png";
import { connect } from "react-redux";
import Actions from "actions";

class TripsCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList: this.props.tripUsers,
            listId: this.props.tripId,
            dropdownOpen: false,

        }
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        })
    }

    render() {
        return (
            <>
                {/* TRIP BOX */}
                {/* <div style={{width: "100%", height: "100%", borderRadius: 20, border: "1px solid red"}}> */}

                    {/* IMAGE BOX */}
                    {/* <div style={styles.imageContainer}>
                        <div style={styles.titleContainer}>
                            <h3>{this.props.tripTitle}</h3>
                        </div>
                        <div style={styles.usersContainer}>
                            {
                                this.state.usersList.map( list => (
                                    
                                    <div style={styles.avatarContainer}>
                                        <p>{list.id} </p>
                                        <img id="user-avatar" src={placeholder} alt="placeholder" style={styles.imageSize} />
                                    </div>
                                ) )
                            }
                        </div>
                    </div> */}

                    {/* CONTENT BOX */}
                    {/* <div style={styles.tripContent}>
                        <div style={styles.tripInfoContainer}>
                            <h6>Date: {this.props.tripStartDate} - {this.props.tripEndDate}</h6>
                            <h6>Origin: {this.props.tripOrigin}</h6>
                            <h6>Created by: user {this.props.tripCreatedBy}</h6>
                            <h6>Trip Total: RM {this.props.tripTotal}</h6>
                        </div>
                        
                        <div style={styles.dropdownContainer}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()} style={styles.dropdownStyle} color="none" size="sm">
                            <DropdownToggle>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </DropdownToggle>
                            <DropdownMenu right style={{width: 20,}}>
                                <div style={styles.dropdownItemContainer}>
                                    <ion-icon 
                                        name="create-outline"
                                        onClick={ this.props.handleEdit }
                                        size="large"
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                    >
                                    </ion-icon>
                                </div>
                                <div style={styles.dropdownItemContainer}>
                                    <ion-icon 
                                        name="trash-outline"
                                        onClick={ this.props.handleDelete }
                                        size="large"
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                    >
                                    </ion-icon>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                        </div>
                    </div>

                                        

                </div> */}

                <Card body outline color="danger" style={styles.removeStrap}>
                    <CardHeader style={{
                        margin: 0, 
                        padding: 0, 
                        backgroundImage: "none", 
                        // position: "relative"
                        }}>
                        <div style={styles.imageContainer}>
                            <div style={styles.tripImageBox}>
                                <img id="banner1" src={banner1} alt="banner1" style={styles.imageSize}/>
                            </div>
                            <div style={styles.cardTripTitle}>
                                <h4>{this.props.tripTitle}</h4>
                            </div>
                            <div style={styles.usersContainer}>
                                {
                                    this.state.usersList.map( list => (
                                        
                                        <div style={styles.avatarContainer}>
                                            <p>{list.name} </p>
                                            <img id="user-avatar" src={placeholder} alt="placeholder" style={styles.avatarSize} />
                                        </div>
                                    ) )
                                }
                            </div>
                        </div>
                    </CardHeader>
                    <CardImg />
                    <CardBody>
                        <div style={styles.cardContentContainer}>
                            <div style={styles.cardContent}>
                                <p>Date: <strong>{this.props.tripStartDate} - {this.props.tripEndDate}</strong></p>
                                <p>Origin: <strong>{this.props.tripOrigin}</strong></p>
                                <p>Created by: <strong>User {this.props.tripCreatedBy}</strong></p>
                                <p>Trip Total: <strong>RM {this.props.tripTotal}</strong></p>
                            </div>

                            <div style={styles.cardContent}>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()} style={styles.dropdownStyle} color="none" size="sm">
                                    <DropdownToggle>
                                        <ion-icon name="chevron-down-outline"></ion-icon>
                                    </DropdownToggle>
                                    <DropdownMenu style={styles.dropdownStyle}>
                                        <div style={styles.dropdownItemContainer} >
                                            <ion-icon 
                                                name="create-outline"
                                                onClick={ this.props.handleEdit }
                                                // size="large"
                                                style={{
                                                    cursor: 'pointer',
                                                    fontSize: 24,
                                                }}
                                                >
                                            </ion-icon>
                                        </div>
                                        <div style={styles.dropdownItemContainer} >
                                            <ion-icon 
                                                name="trash-outline"
                                                onClick={ this.props.handleDelete }
                                                // size="medium"
                                                style={{
                                                    cursor: 'pointer',
                                                    fontSize: 24,
                                                }}
                                            >
                                            </ion-icon>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter style={{width: "100%"}}>
                        <Button 
                            style={{border: "rgba(0,0,0,0.4)"}} // backgroundImage: "linear-gradient(to bottom right, #E74C3C, #B03A2E)"}}
                            type="submit"
                            color="link"
                            // size="sm"
                            onClick={this.props.onClick}
                            block
                        >Trip Details</Button>
                    </CardFooter>
                </Card>
            </>
        )
    }
}

const styles = {
    removeStrap: {
        margin: 0,
        padding: 0,
        minWidth: 400,
        maxWidth: 400,
        minHeight: 500,
        maxHeight: 500,
        borderRadius: 20,
        overflow: "hidden",
        backgroundImage: "none",
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
        position: "relative",
    },
    tripImageBox: {
        width: "100%",
        height: "100%",
        padding: 0,
        position: "absolute",
        zIndex: 1,
    },
    cardTripTitle: {
        background: "none",
        padding: 20,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
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
        // position: "absolute",
        padding: 20,
        zIndex: 2,
    },
    imageSize: {
        width: "100%",
        height: "100%",
    },
    avatarSize: {
        width: 20,
        height: 20
    },
    avatarContainer: {
        // width: "100%",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
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