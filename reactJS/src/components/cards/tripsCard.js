import React from "react";
import {Link} from "react-router-dom";

import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

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
                <div style={{width: "100%", height: "100%", borderRadius: 2, borderColor: "red"}}>

                    {/* IMAGE BOX */}
                    <div style={styles.imageContainer}>
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
                    </div>

                    {/* CONTENT BOX */}
                    <div style={styles.tripContent}>
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

                                        

                </div>
            </>
        )
    }
}

const styles = {
    imageContainer: {
        width: "100%",
        height: "50%",
        // borderRadius: 2,
        borderColor: "red",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: 20,
        borderBottom: "1px solid rgba(0,0,0,0.4)",

    },
    titleContainer: {
        width: "100%",
    },
    avatarContainer: {
        // width: "100%",
        backgroundColor: "white",
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
    tripInfoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    usersContainer: {
        display: "flex",
        flexDirection: "row",
    },
    imageSize: {
        width: 20,
        height: 20,
    },
    buttonContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 5,
        paddingRight: 20,
    },
    dropdownContainer:{
        border: "1px solid black",
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
    }
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