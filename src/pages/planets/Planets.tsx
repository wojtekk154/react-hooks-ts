import React, { useEffect } from "react";
import { IPaggingList, IPlanet } from "../../utils/interfaces/planets";
import { Route, RouteComponentProps } from "react-router";
import { PlanetConfig } from "./config";
import { IListConfig } from "../../store/Common/reducer";
import { List } from "../List";

export interface IPlanetsProps extends RouteComponentProps {
    planets: IPaggingList<IPlanet>;
    getPlanetsListFromApi: () => any;
    getPlanetByIdFromApi: () => any;
    getPlanetSchemaFromApi: () => any;
    setupListConfigAction: (payload: IListConfig[]) => any;
    clearListConfigAction: () => any;
}

const PlanetsLayout: React.FC<IPlanetsProps> = (props: IPlanetsProps): React.ReactElement => {
    useEffect(() => {
        props.getPlanetsListFromApi();
        props.setupListConfigAction(PlanetConfig);

        return () => props.clearListConfigAction()
    }, []);

    useEffect(() => {
        console.log(props);
    }, [props.planets]);

    return (
        <div>
            <h3>Planets List</h3>
            <Route key={'/'} path={'/'} component={List}/>
        </div>
    );
};

export default PlanetsLayout;
