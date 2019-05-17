import { createAction } from "../actions";
import { IFilm } from "../../utils/interfaces/films";
import {
    FETCH_FILM_BY_ID_ACTION,
    FETCH_FILM_BY_ID_ERROR_ACTION,
    FETCH_FILM_BY_ID_SUCCESS_ACTION,
    FETCH_FILM_SCHEME_ACTION,
    FETCH_FILM_SCHEME_ERROR_ACTION,
    FETCH_FILM_SCHEME_SUCCESS_ACTION,
    FETCH_FILMS_FROM_API_ERROR,
    FETCH_FILMS_FROM_API_SUCCESS,
    FETCH_FILMS_LIST_FROM_API
} from "./constants";
import { ISchema } from "../../utils/interfaces/scheme";
import { IPaggingList } from "../../utils/interfaces/planets";

export const getFilmsListFromApi = () => createAction<IFilm>(FETCH_FILMS_LIST_FROM_API);
export const getFilmsListFromApiSuccess = (payload: IPaggingList<IFilm>) => createAction<IPaggingList<IFilm>>(FETCH_FILMS_FROM_API_SUCCESS, payload);
export const getFilmsListFromApiError = () => createAction<IFilm[]>(FETCH_FILMS_FROM_API_ERROR);
export const getFilmSchemaFromApi = (payload: string) => createAction(FETCH_FILM_SCHEME_ACTION, payload);
export const getFilmSchemaFromApiSuccess = (payload: ISchema) => createAction<ISchema>(FETCH_FILM_SCHEME_SUCCESS_ACTION, payload);
export const getFilmSchemaFromApiError = () => createAction(FETCH_FILM_SCHEME_ERROR_ACTION);
export const getFilmByIdAction = (payload: number) => createAction<number>(FETCH_FILM_BY_ID_ACTION, payload);
export const getFilmByIdSuccessAction = (payload: IFilm) => createAction<IFilm>(FETCH_FILM_BY_ID_SUCCESS_ACTION, payload);
export const getFilmByIdErrorAction = () => createAction(FETCH_FILM_BY_ID_ERROR_ACTION);
