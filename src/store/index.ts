import { combineReducers } from "redux";

import { IFilm } from "../utils/interfaces/films";
import { filmReducer } from "./Film/reducer";
import { planetsReducer } from "./Planets/reducer";
import { IPaggingList, IPlanet } from "../utils/interfaces/planets";
import { configListReducer, IListConfig } from "./Common/reducer";

export interface IAppState {
    films: IPaggingList<IFilm>,
    planets: IPaggingList<IPlanet>
    listConfig: IListConfig[]
}

export const rootReducer = combineReducers<IAppState>({
    films: filmReducer,
    planets: planetsReducer,
    listConfig: configListReducer
});
