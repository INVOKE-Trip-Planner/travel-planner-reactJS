import React from "react";
import { Link } from "react-router-dom";

import {Container, Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';

// Redux
import { connect } from "react-redux";
import Actions from "../../actions";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isLogin: false,
        }
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    componentDidUpdate(prevProps) {
        const { getLoginData } = this.props;
        const { getUserSession } = this.props;
        
        console.log("HEADER LOGIN DATA", getUserSession);

        if (prevProps.getLoginData.isLoading && !getLoginData.isLoading) {

            console.log("LOGIN DATA", Object.keys(getUserSession.data).length);

            // Check length of getLoginData to see if data exist
            if ( (Object.keys(getLoginData.data).length !== 0) ) {
                
                // login data exist
                this.setState({
                    isLogin: true, // => NAV CHANGES
                })

            } else {
                // no login data
                console.log("no user");
            }
        }

        if (Object.keys(getUserSession.data).length == 0) {
            alert('Session expired. Please login again.');
            this.props.history.push("/login");
        }
    }

    logoutPressed() {
        this.props.resetUserSession();
        alert("Successfully logout")
        window.location.reload(); // reloads the page after logging out
    }

    render() {
        return (
            <>
                <Container className="themed-container" fluid={true}>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand><Link to="/">TripBantu</Link></NavbarBrand>
                        <NavbarToggler onClick={() => this.toggle()} />
                        <Collapse isOpen={this.state.isOpen} navbar>

                                {/* NAV USER LOGIN CONDITION */}
                                {this.state.isLogin ? (
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <NavLink><Link to="/dashboard">Trips</Link></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink><Link onClick={() => this.logoutPressed()} to="">Logout</Link></NavLink>
                                        </NavItem>
                                    </Nav>
                                ) : (
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <NavLink><Link to="/dashboard">Trips</Link></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink><Link to="/login">Login</Link></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink><Link to="/register">Register</Link></NavLink>
                                        </NavItem>
                                    </Nav>
                                )}

                                {/* <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown> */}
                            <NavbarText>Hi Username</NavbarText>
                        </Collapse>
                    </Navbar>
                </Container>    
            </>
        )
    }
}

const mapStateToProps = (store) => ({
    getLoginData: Actions.getLoginData(store),
    getUserSession: Actions.getUserSession(store)
  })
  
const mapDispatchToProps = {
    resetUserSession: Actions.resetUserSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);