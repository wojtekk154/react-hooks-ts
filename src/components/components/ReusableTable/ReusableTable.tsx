/* tslint:disable:object-literal-sort-keys jsx-no-lambda */
import React, { useEffect } from "react";

import {
    Paper,
    StyleRulesCallback,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Theme,
    withStyles,
} from "@material-ui/core";

import ActionMenu from "./ActionMenu";
import TooltipCell from "./TooltipCell";
import { IListConfig } from "../../../store/Common/reducer";


const tableStyles: StyleRulesCallback = (theme: Theme) => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto",
        width: "100%",
    },
    table: {
        width: "100%",
    },
    row: {
        "&:nth-of-type(even)": {
            backgroundColor: theme.palette.background.default,
        },
    },
    cell: {
        whiteSpace: "nowrap",
    },
    head: {
        backgroundColor: "#81d4fa",
    },
});

interface IReusableTableProp {
    config: IListConfig[];
    tableData: any[];
    action: boolean;
    classes: any;
    totalItems: number | null;
    next: string | null;
    previous: string | null;
}

const ReusableTable: React.FC<IReusableTableProp> = (props: IReusableTableProp): React.ReactElement => {
    const { classes } = props;
    const actionCell = (index: number, row: any) => (
        <TableCell key={row.name}>
            <ActionMenu/>
        </TableCell>
    );

    const actionHeader = () => (
        <TableCell key={"action"}>Actions</TableCell>
    );

    useEffect(() => {
        console.log('JANO JANUSZ',props);
    }, []);

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.head}>
                        {
                            props.config.map((item: any, index: number) => (
                                <TableCell key={index}>{item.name}</TableCell>
                            ))
                        }
                        {props.action && actionHeader()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.tableData.map((row: any, index: number) => (
                            <TableRow
                                key={index}
                                className={classes.row}
                            >
                                {
                                    props.config.map((column: { name: string, key: string }) => (
                                        <React.Fragment key={row[column.key]}>
                                            {
                                                row[column.key].length > 200 ?
                                                    <TooltipCell value={row[column.key]}/> :
                                                    <TableCell className={classes.cell}>
                                                        {row[column.key]}
                                                    </TableCell>
                                            }
                                        </React.Fragment>
                                    ))
                                }
                                {props.action && actionCell(index, row)}
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Paper>
    );
};

// ReusableTable.propTypes = {
//     config: PropTypes.arrayOf(PropTypes.object),
//     tableData: PropTypes.arrayOf(PropTypes.object),
//     action: PropTypes.bool.isRequired,
//     totalItems: PropTypes.number,
//     next: PropTypes.string,
//     previous: PropTypes.string
// };

ReusableTable.defaultProps = {
    action: false,
};

export default withStyles(tableStyles)(ReusableTable);
