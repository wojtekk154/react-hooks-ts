export const FETCH_FILMS_LIST_FROM_API = "[FILM LIST] Fetch films list from api";
export const FETCH_FILMS_FROM_API_ERROR = "[FILM LIST] Fetch films list from api ERROR";
export const FETCH_FILMS_FROM_API_SUCCESS = "[FILM LIST] Fetch films list from api SUCCESS";
export const FETCH_FILM_SCHEME_ACTION = "[FILM SCHEME] GET FILM SCHEME FROM API";
export const FETCH_FILM_SCHEME_SUCCESS_ACTION = "[FILM SCHEME] GET FILM SCHEME FROM API SUCCESS";
export const FETCH_FILM_SCHEME_ERROR_ACTION = "[FILM SCHEME] GET FILM SCHEME FROM API ERROR";
export const FETCH_FILM_BY_ID_ACTION = "[FILM BY ID] GET FILM BY ID FROM API";
export const FETCH_FILM_BY_ID_SUCCESS_ACTION = "[FILM BY ID]  GET FILM BY ID FROM API SUCCESS";
export const FETCH_FILM_BY_ID_ERROR_ACTION = "[FILM BY ID]  GET FILM BY ID FROM API ERROR";

export const HOST = 'https://swapi.co';
export const FILM_URL = {
    LIST: '/api/films/',
    BY_ID: (id: number | null) => `/api/films/${id}`,
    SCHEMA: '/api/films/schema/ '
};