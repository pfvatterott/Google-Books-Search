import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize';

export default function CustomNavBar() {
    return (
        <div>
             <Navbar
            className="navbar"
            alignLinks="right"
            
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            sidenav={
                <div className="left-align">
                <ul class="side-nav" id="mobile-menu">
                    <li><Link to="/search">Search for Books</Link></li>
                    <li><Link to="/saved">Saved Books</Link></li>
                </ul>
                </div>
            }
            >
            <NavItem >
                <Link to="/search">Search for Books</Link>
            </NavItem>
            <NavItem>
                <Link to="/saved">Saved Books</Link>
            </NavItem>
        </Navbar>
        </div>
    )
}
