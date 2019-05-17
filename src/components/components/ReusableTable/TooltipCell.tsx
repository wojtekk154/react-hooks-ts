import { StyleRulesCallback, TableCell, Tooltip, withStyles } from "@material-ui/core";
import React from "react";

const tooltipCell: StyleRulesCallback = () => ({
    cell: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        maxWidth: "200px",
    },
});

const TooltipCell = (props: any) => {
    const { classes } = props;

    return (
        <React.Fragment>
            <Tooltip title={props.value}>
                <TableCell className={classes.cell}>{props.value}</TableCell>
            </Tooltip>
        </React.Fragment>
    );
};

export default withStyles(tooltipCell)(TooltipCell);
