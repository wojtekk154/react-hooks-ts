import { IAppState } from "../../store";
import { compose } from "redux";
import { FunctionComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PlanetsLayout from "./Planets";
import { getPlanetByIdFromApi, getPlanetSchemaFromApi, getPlanetsListFromApi } from "../../store/Planets/actions";
import { clearListConfigAction, setupListConfigAction } from "../../store/Common/actions";

const mapStateToProps = ({ planets }: IAppState) => ({
    planets
});

const mapDispatchToProps = {
    getPlanetsListFromApi,
    getPlanetByIdFromApi,
    getPlanetSchemaFromApi,
    setupListConfigAction,
    clearListConfigAction
};

const enchancer = compose<FunctionComponent>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

export const Planets = enchancer(PlanetsLayout);