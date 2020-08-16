import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

class Itinerary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scheduleData: this.props.itiScheduleData,
            isOpen: false,
        }
    }

    handleEdit() {
        this.setState({
            isOpen: true,
        });

    }

    handleDelete() {
        
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <>
            <Card body outline color="danger">
                    <CardHeader style={{width: "100%"}}>
                        <p>Date: {this.props.itiDate}</p>
                        <p>Activity:</p>

                        <div>
                            <button style={styles.selectButton} onClick={() => this.handleEdit()}><ion-icon name="create-outline"></ion-icon></button>
                            <button style={styles.selectButton} onClick={() => this.handleDelete()}><ion-icon name="trash-outline"></ion-icon></button>
                        </div>
                    </CardHeader>

                    {/* ----Itinerary Schedule-------- */}
                    <CardBody>  
                        {this.state.scheduleData.map(schedule => (
                            <div style={{border: "1px solid black", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "justify"}}>
                                <p>{schedule.activity}</p>
                                <p>Cost: RM {schedule.cost}</p>
                            </div>
                        ))}
                
                    </CardBody>
                <CardFooter>
                    <p>Total cost: RM{this.props.itiCost}</p>
                </CardFooter>
            </Card>

                <Modal 
                        isOpen={this.state.isOpen} 
                        centered={true}
                        scrollable={true}
                        backdrop={true}
                        toggle={() => this.toggle()}
                >
                    <ModalHeader></ModalHeader>
                    <ModalBody>{
                            // this.state.data.map((item) => (<div>{console.log("ITEM",item)}</div>))
                        }</ModalBody>
                    <ModalFooter>
                            <Button color="primary">
                            Edit Details
                            </Button>
                    </ModalFooter>
                </Modal>         
            </>
        )
    }
};

const styles = {
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
    selectButton: {
        backgroundColor: "transparent",
        outline: "none",
        border: "1px solid rgba(0,0,0,0.4)",
        padding: 10,
        color: "black",
        // borderRadius: "50 0 0 0",
    },
}

export default Itinerary;