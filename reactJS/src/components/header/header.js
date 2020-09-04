import React from "react";
import { Link } from "react-router-dom";

import vlogo from "assets/images/brew/vlogo.png"

import {Container, Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';

// Redux
import { connect } from "react-redux";
import Actions from "../../actions";
import { getUserSession } from "../../actions/profile/userSession";

import { PRIMARY_COLOR_FONT, PRIMARY_COLOR } from "common/styles/index.js";

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
        const { getUpdateUserData } = this.props;

        // console.log("CHECK", getUpdateUserData.data)
        // console.log("CHECK", getUpdateUserData.data)

        // if ( getUserSession.data.length !== undefined ) {
        if ( getUpdateUserData.data !== null ) {
            // console.log("user detected");

            this.setState({
                isLogin: true,
                setUsername: true,
                displayUsername: getUpdateUserData.data.username
            })
        }

        // if (this.state.isLogin) {
        //     this.setState({
        //         displayUsername: getLoginData.data.user.name,   
        //     })
        // }
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
        // this.props.resetUserSession();
        this.props.onLogout();

        this.setState({
            isLogin: false,
            setUsername: false,
        })
        alert("Successfully logout")
        // window.location.reload(); // reloads the page after logging out
    }

    render() {
        return (
            <>
                <Container className="themed-container" fluid={true} style={{margin: 0, padding: 0,}}>
                    <Navbar color="light" light expand="md" style={{borderBottom: "0.5px solid rgba(0,0,0,0.1)", paddingLeft: 20, paddingRight: 20,}} fluid={true}>
                        <NavbarBrand><Link to="/" style={styles.linkstyle}><img src={vlogo} style={{width: 80, height: 50}}/></Link></NavbarBrand>
                        <NavbarToggler onClick={() => this.toggle()} style={{color: "white", ...PRIMARY_COLOR}}/>
                        <Collapse isOpen={this.state.isOpen} navbar>

                                {/* NAV USER LOGIN CONDITION */}
                                {this.state.isLogin ? (
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <NavLink><Link to="/dashboard" style={styles.linkstyle}>Dashboard</Link></NavLink>
                                        </NavItem>
                                        {/* <NavItem>
                                            <NavLink><Link onClick={() => this.logoutPressed()} to="" style={styles.linkstyle}>Logout</Link></NavLink>
                                        </NavItem> */}
                                    </Nav>
                                ) : (
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <NavLink><Link to="/dashboard" style={styles.linkstyle}>Team <span style={PRIMARY_COLOR_FONT}>V</span></Link></NavLink>
                                        </NavItem>
                                        {/* <NavItem>
                                            <NavLink><Link to="/login" style={styles.linkstyle}>Login</Link></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink><Link to="/register" style={styles.linkstyle}>Register</Link></NavLink>
                                        </NavItem> */}
                                    </Nav>
                                )}

                                {this.state.setUsername && (
                                    <UncontrolledDropdown nav inNavbar style={{listStyleType: "none"}}>
                                        <DropdownToggle nav caret>
                                            <NavbarText style={styles.linkstyle}>
                                                Hi {this.state.displayUsername}
                                            </NavbarText>
                                        </DropdownToggle>
                                        <DropdownMenu left>
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
    // resetUserSession: Actions.resetUserSession,
    onLogout: Actions.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);