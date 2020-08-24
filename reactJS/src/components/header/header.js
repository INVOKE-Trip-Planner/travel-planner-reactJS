import React from "react";
import { Link } from "react-router-dom";

import {Container, Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';

// Redux
import { connect } from "react-redux";
import Actions from "../../actions";
import { getUserSession } from "../../actions/profile/userSession";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isLogin: false,
            setUsername: false,
            displayUsername: '',
        }
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    componentDidMount(prevProps) {
        const { getLoginData } = this.props;
        const { getUserSession } = this.props;

        // console.log("header login user", getLoginData.data.user)

        if ( getUserSession.data.length !== undefined ) {
            // console.log("user detected");

            this.setState({
                isLogin: true,
                setUsername: true,
                // displayUsername: (prevProps.getLoginData.data.user === undefined) ? '' : getLoginData.data.user.name,
            })
        }

        if (this.state.isLogin) {
            this.setState({
                displayUsername: getLoginData.data.user.name,   
            })
        }
    }

    componentDidUpdate(prevProps) {
        const { getLoginData } = this.props;
        const { getUserSession } = this.props;
        const { getUpdateUserData } = this.props;

        // console.log("prev User session", prevProps.getUserSession.data.length);
        // console.log("new User session", getUserSession.data.length);

        if ( prevProps.getUserSession.data.length !== getUserSession.data.length ) {

            if ( getUserSession.data.length !== undefined) {
                
                this.setState({
                    isLogin: true,
                    setUsername: true,
                    displayUsername: getLoginData.data.user.name,
                })
            } else {
                console.log("no user detected")
            }
        }
    }
        

        // if (Object.keys(getUserSession.data).length < Object.keys(prevProps.getUserSession.date).length) {
        //     alert('Session expired. Please login again.');
        //     this.props.history.push("/login");
        // }

    logoutPressed() {
        this.props.resetUserSession();

        this.setState({
            isLogin: false,
            setUsername: false,
        })
        alert("Successfully logout")
        window.location.reload(); // reloads the page after logging out
    }

    render() {
        return (
            <>
                <Container className="themed-container" fluid={true}>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand><Link to="/" style={styles.linkstyle}>TripBantu</Link></NavbarBrand>
                        <NavbarToggler onClick={() => this.toggle()} />
                        <Collapse isOpen={this.state.isOpen} navbar>

                                {/* NAV USER LOGIN CONDITION */}
                                {this.state.isLogin ? (
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <NavLink><Link to="/dashboard" style={styles.linkstyle}>Trips</Link></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink><Link onClick={() => this.logoutPressed()} to="" style={styles.linkstyle}>Logout</Link></NavLink>
                                        </NavItem>
                                    </Nav>
                                ) : (
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <NavLink><Link to="/dashboard" style={styles.linkstyle}>Trips</Link></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink><Link to="/login" style={styles.linkstyle}>Login</Link></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink><Link to="/register" style={styles.linkstyle}>Register</Link></NavLink>
                                        </NavItem>
                                    </Nav>
                                )}

                                {this.state.setUsername && (
                                    <UncontrolledDropdown nav inNavbar style={{listStyleType: "none"}}>
                                        <DropdownToggle nav caret>
                                            <NavbarText>
                                                Hi {this.state.displayUsername}
                                            </NavbarText>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <Link to="/profile" style={styles.linkstyle}>Profile</Link>
                                            </DropdownItem>
                                        <DropdownItem divider />
                                            <DropdownItem>
                                                <Link onClick={() => this.logoutPressed()} to="" style={styles.linkstyle}>Logout</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    )
                                }
                        </Collapse>
                    </Navbar>
                </Container>    
            </>
        )
    }
}

const styles = {

    linkstyle: {
        textDecoration: "none",
        color: "black",
    },
}

const mapStateToProps = (store) => ({
    getLoginData: Actions.getLoginData(store),
    getUserSession: Actions.getUserSession(store),
    getUpdateUserData: Actions.getUpdateUserData(store)
  })
  
const mapDispatchToProps = {
    resetUserSession: Actions.resetUserSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);