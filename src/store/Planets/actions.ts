import { createAction } from "../actions";
import { IPaggingList, IPlanet } from "../../utils/interfaces/planets";
import {
    FETCH_PLANET_BY_ID_FROM_API,
    FETCH_PLANET_BY_ID_FROM_API_ERROR,
    FETCH_PLANET_BY_ID_FROM_API_SUCCESS,
    FETCH_PLANET_SCHEME_FROM_API,
    FETCH_PLANET_SCHEME_FROM_API_ERROR,
    FETCH_PLANET_SCHEME_FROM_API_SUCCESS,
    FETCH_PLANETS_LIST_FROM_API,
    FETCH_PLANETS_LIST_FROM_API_ERROR,
    FETCH_PLANETS_LIST_FROM_API_SUCCESS
} from "./constants";
import { ISchema } from "../../utils/interfaces/scheme";

export const getPlanetsListFromApi = () => createAction(FETCH_PLANETS_LIST_FROM_API);
export const getPlanetsListFromApiSuccess = (payload: IPaggingList<IPlanet>) => createAction<IPaggingList<IPlanet>>(FETCH_PLANETS_LIST_FROM_API_SUCCESS, payload);
export const getPlanetsListFromApiError = () => createAction(FETCH_PLANETS_LIST_FROM_API_ERROR);
export const getPlanetByIdFromApi = (id: number | null) => createAction<number | null>(FETCH_PLANET_BY_ID_FROM_API);
export const getPlanetByIdFromApiSuccess = (payload: IPlanet) => createAction<IPlanet>(FETCH_PLANET_BY_ID_FROM_API_SUCCESS, payload);
export const getPlanetByIdFromApiError = () => createAction(FETCH_PLANET_BY_ID_FROM_API_ERROR);
export const getPlanetSchemaFromApi = () => createAction(FETCH_PLANET_SCHEME_FROM_API);
export const getPlanetSchemaFromApiSuccess = (payload: ISchema) => createAction<ISchema>(FETCH_PLANET_SCHEME_FROM_API_SUCCESS, payload);
export const getPlanetSchemaFromApiError = () => createAction(FETCH_PLANET_SCHEME_FROM_API_ERROR);