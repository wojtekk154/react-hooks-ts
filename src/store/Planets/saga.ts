import { call, put, takeLatest } from "@redux-saga/core/effects";
import { IPaggingList, IPlanet } from "../../utils/interfaces/planets";
import { fetchPlanetByIdFromApi, fetchPlanetListFromApi, fetchPlanetSchemaFromApi } from "./api";
import {
    getPlanetByIdFromApiError,
    getPlanetByIdFromApiSuccess,
    getPlanetSchemaFromApiError,
    getPlanetSchemaFromApiSuccess,
    getPlanetsListFromApiError,
    getPlanetsListFromApiSuccess
} from "./actions";
import { ISchema } from "../../utils/interfaces/scheme";
import { FETCH_PLANET_BY_ID_FROM_API, FETCH_PLANET_SCHEME_FROM_API, FETCH_PLANETS_LIST_FROM_API } from "./constants";
import { IAction } from "../actions";

function* getPaggingPlanetsList() {
    try {
        const planetsList: IPaggingList<IPlanet> = yield call(fetchPlanetListFromApi);

        yield put(getPlanetsListFromApiSuccess(planetsList));
    } catch (e) {
        console.log(e);
        put(getPlanetsListFromApiError());
    }
}

function* getPlanetById(action: IAction<number>) {
    try {
        const id: number | null = action.payload ? action.payload : null;
        const planet: IPlanet = yield call(fetchPlanetByIdFromApi, id);

        yield put(getPlanetByIdFromApiSuccess(planet));
    } catch (e) {
        yield put(getPlanetByIdFromApiError());
    }
}

function* getPlanetSchema() {
    try {
        const schema: ISchema = yield call(fetchPlanetSchemaFromApi);

        yield put(getPlanetSchemaFromApiSuccess(schema));
    } catch (e) {
        yield put(getPlanetSchemaFromApiError());
    }
}

export function* listPlanetSaga() {
    yield  takeLatest(FETCH_PLANETS_LIST_FROM_API, getPaggingPlanetsList);
}

export function* singlePlanetSaga() {
    yield  takeLatest(FETCH_PLANET_BY_ID_FROM_API, getPlanetById);
}

export function* schemaPlanetSaga() {
    yield takeLatest(FETCH_PLANET_SCHEME_FROM_API, getPlanetSchema);
}
