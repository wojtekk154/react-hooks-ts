import * as React from "react";
import { withRouter } from "react-router-dom";

import { AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const NavigationBar: React.FC<any> = () => {
    return (
        <AppBar>
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit">
                    StarWars
                </Typography>
                <Button href={"/"}>Home</Button>
                <Button href={"/planets"}>Planets</Button>
                <Button href={"/films"}> Films </Button>
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(NavigationBar);
