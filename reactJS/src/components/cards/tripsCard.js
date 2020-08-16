import React from "react";
import {Link} from "react-router-dom";

import { Button } from "reactstrap";

import placeholder from "assets/images/placeholder.png";

class TripsCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList: this.props.tripUsers,
            listId: this.props.tripId,
        }
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
                        <p>Date: {this.props.tripStartDate} - {this.props.tripEndDate}</p>
                        <p>Cost: {this.props.cost}</p>
                    </div>
                </div>
            </>
        )
    }
}

const styles = {
    imageContainer: {
        width: "100%",
        height: "60%",
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
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 10,
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
    }
}

export default TripsCard;