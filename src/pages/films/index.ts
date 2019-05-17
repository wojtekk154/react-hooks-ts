import { IAppState } from "../../store";
import { getFilmByIdAction, getFilmSchemaFromApi, getFilmsListFromApi } from "../../store/Film/actions";
import { compose } from "redux";
import { FunctionComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import FilmsLayout from "./Films";
import { clearListConfigAction, setupListConfigAction } from "../../store/Common/actions";

export const mapStateToProps = ({ films }: IAppState) => ({
    films
});

export const mapDispatchToProps = {
    getFilmsListFromApi,
    getFilmSchemaFromApi,
    getFilmByIdAction,
    setupListConfigAction,
    clearListConfigAction
};

export const enchancer = compose<FunctionComponent>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

export const Films = enchancer(FilmsLayout);