import { IFilm } from "../../utils/interfaces/films";
import { IPaggingList } from "../../utils/interfaces/planets";
import { FETCH_FILMS_FROM_API_ERROR, FETCH_FILMS_FROM_API_SUCCESS } from "./constants";
import { IAction } from "../actions";

const initState: IPaggingList<IFilm> = {
    count: 0,
    next: '',
    previous: null,
    results: []
};

export const filmReducer = (state: IPaggingList<IFilm> = initState, action: IAction<IPaggingList<IFilm>>): IPaggingList<IFilm> => {
    switch (action.type) {
        case FETCH_FILMS_FROM_API_SUCCESS:
            return { ...action.payload } as IPaggingList<IFilm>;
        case  FETCH_FILMS_FROM_API_ERROR:
        default:
            return { ...state };
    }
};
