import React, { useEffect } from "react";
import { IFilm } from "../../utils/interfaces/films";
import { IPaggingList } from "../../utils/interfaces/planets";
import { IListConfig } from "../../store/Common/reducer";
import { FilmListConfig } from "./config";
import { FilmList } from "../List/filmsList";
import { Route } from "react-router";

export interface IFilmProp {
    films: IPaggingList<IFilm>;
    getFilmsListFromApi: () => any;
    getFilmSchemaFromApi: () => any;
    getFilmByIdAction: () => any;
    setupListConfigAction: (payload: IListConfig[]) => any;
    clearListConfigAction: () => any;
}

const FilmsLayout: React.FC<IFilmProp> = (props: IFilmProp) => {
    useEffect(() => {
        props.getFilmsListFromApi();
        props.setupListConfigAction(FilmListConfig);

        return () => props.clearListConfigAction();
    }, []);

    return (
        <div>
            <h2>Films</h2>

            <Route key={'/'} path={'/'} component={FilmList}/>
        </div>
    );
};

export default FilmsLayout;
