import React from 'react'
import { AppBar, Toolbar, styled }  from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #0F3460;
    position: static
`

const Tabs = styled(NavLink)`
    font-size: larger;
    margin-right: 2%;
    color: #E1FFEE;
    text-decoration: none;
`

const NavBar = () => {
    return (
        <Header>
            <Toolbar>
                <Tabs to= '/'>Medux - Crud</Tabs>
                <Tabs to= '/all-users'>All Users</Tabs>
                <Tabs to= 'add-user'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;