import { IPaggingList, IPlanet } from "../../utils/interfaces/planets";
import { IAction } from "../actions";
import { FETCH_PLANETS_LIST_FROM_API_ERROR, FETCH_PLANETS_LIST_FROM_API_SUCCESS } from "./constants";

export const planetsInitState: IPaggingList<IPlanet> = {
    count: null,
    next: null,
    previous: null,
    results: []
};

export const planetsReducer = (state: IPaggingList<IPlanet> = planetsInitState,
                               action: IAction<IPaggingList<IPlanet>>): IPaggingList<IPlanet> => {
    switch (action.type) {
        case FETCH_PLANETS_LIST_FROM_API_SUCCESS:
            return { ...action.payload } as IPaggingList<IPlanet>;
        case FETCH_PLANETS_LIST_FROM_API_ERROR:
        default:
            return state;
    }
}