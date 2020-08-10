import React from "react";
import { Link} from "react-router-dom";

import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
            <>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand><Link to="/">Trip Planner</Link></NavbarBrand>
                        <NavbarToggler onClick={() => this.toggle()} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink><Link to="/login">Login</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/register">Register</Link></NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
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
                                </UncontrolledDropdown>
                            </Nav>
                            <NavbarText>Hi Username</NavbarText>
                        </Collapse>
                    </Navbar>
            </>
        )
    }
}

export default Header;

// const Example = (props) => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggle = () => setIsOpen(!isOpen);
  
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="mr-auto" navbar>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Option 1
//                   </DropdownItem>
//                   <DropdownItem>
//                     Option 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//             <NavbarText>Simple Text</NavbarText>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
  
//   export default Example;