import React, { useReducer } from 'react'
import Users from './Users'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chirps from './Chirps'
import Sign from './Sign'
import Create from './Create'
import { Route, Link } from "react-router-dom"

function Feed() {
    return (
        <>


            <section>

                <Route exact path='/' component={Chirps} />
                <Route exact path='/create' component={Create} />
                <Route exact path="/signup" component={Sign} />
                <Route exact path='/users' component={Users} />



            </section>

            <br />
            <br />
            <nav>
                <Navbar color="light" light expand="md">
                    <Link to='/create'>
                        <NavbarBrand href="/chirps">Chirp Out</NavbarBrand>
                    </Link>
                    <NavbarBrand href="/users">Users</NavbarBrand>
                    <Link to='/signup'>
                        <NavbarBrand href="/signup">Sign Up</NavbarBrand>
                    </Link>
                    {/* <NavbarToggler onClick={toggle} /> */}
                    {/* <Collapse isOpen={isOpen} navbar> */}

                    {/* <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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
                <NavbarText>Simple Text</NavbarText>
                {/* </Collapse> */}
                </Navbar>
            </nav>
        </>
    )
}

export default Feed