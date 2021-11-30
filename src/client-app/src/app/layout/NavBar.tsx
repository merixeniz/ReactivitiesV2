import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo"/>
                    Reactivities
                </Menu.Item>
                <MenuItem name='Activities'/>
                <MenuItem>
                    <Button positive content='Create Activity' />
                </MenuItem>
            </Container>
        </Menu>
    )
}
