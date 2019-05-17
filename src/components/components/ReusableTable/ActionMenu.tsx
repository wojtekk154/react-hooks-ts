import React, { useState } from "react";

import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const ActionMenu: React.FC<any> = () => {
    // const { table } = useContext(TableContext);
    const [anchorEl, setAnchor] = useState(null as any);

    const handleClose = (event: any) => {
        setAnchor(null);
    };

    const handleClick = (event: any) => {
        setAnchor(event.currentTarget);
    };

    const editAction = () => {
        alert("edit");
    };

    const removeAction = () => {
        alert("remove");
    };

    return (
        <React.Fragment>
            <IconButton
                aria-owns={anchorEl ? "itemMenu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVert/>
            </IconButton>
            <Menu
                id="itemMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={editAction}>Edit</MenuItem>
                <MenuItem onClick={removeAction}>Remove</MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default ActionMenu;
