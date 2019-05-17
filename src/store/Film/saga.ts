import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchFilmByIdFromApi, fetchFilmListFromApi, fetchFilmSchemaFromApi } from "./api";
import { IFilm } from "../../utils/interfaces/films";
import {
    getFilmByIdErrorAction,
    getFilmByIdSuccessAction,
    getFilmSchemaFromApiError,
    getFilmSchemaFromApiSuccess,
    getFilmsListFromApiError,
    getFilmsListFromApiSuccess
} from "./actions";
import { FETCH_FILM_BY_ID_ACTION, FETCH_FILM_SCHEME_ACTION, FETCH_FILMS_LIST_FROM_API } from "./constants";
import { IAction } from "../actions";
import { ISchema } from "../../utils/interfaces/scheme";
import { IPaggingList } from "../../utils/interfaces/planets";

function* getFilms() {
    try {
        const films: IPaggingList<IFilm> = yield call(fetchFilmListFromApi);

        yield put(getFilmsListFromApiSuccess(films));
    } catch (e) {
        yield put(getFilmsListFromApiError());
    }
}

function* getFilmById(action: IAction<number>) {
    try {
        const id: number | null = action && action.payload ? action.payload : 0;
        const film: IFilm = yield call(fetchFilmByIdFromApi, id);

        yield put(getFilmByIdSuccessAction(film));
    } catch (e) {
        yield put(getFilmByIdErrorAction());
    }
}

function* getFilmSchema() {
    try {
        const schema: ISchema = yield call(fetchFilmSchemaFromApi);

        yield put(getFilmSchemaFromApiSuccess(schema));
    } catch (e) {
        yield put(getFilmSchemaFromApiError());
    }
}

export function* filmListSaga() {
    yield takeLatest(FETCH_FILMS_LIST_FROM_API, getFilms);
}

export function* filmByIdSaga() {
    yield takeLatest(FETCH_FILM_BY_ID_ACTION, getFilmById);
}

export function* filmSchemaSaga() {
    yield  takeLatest(FETCH_FILM_SCHEME_ACTION, getFilmSchema)
}
