import { IAppState } from "../../store";
import { compose } from "redux";
import { FunctionComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ListLayout } from "./List";

const mapStateToProps = ({ planets, listConfig }: IAppState) => ({
    list: planets,
    listConfig
});

const mapDispatchToProps = {};

const enchancer = compose<FunctionComponent>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

export const List = enchancer(ListLayout);