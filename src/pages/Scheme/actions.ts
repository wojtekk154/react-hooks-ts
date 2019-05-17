import { FILM_ACTIONS } from "../../utils/constants";

export const fetchFilmsSchemaAction = (payload: { url: string }) => {
    return {
        type: FILM_ACTIONS.FETCH_FILM_SCHEME_ACTION,
        payload
    };
};

export const fetchFilmsSchemaErrorAction = () => {
    return {
        type: FILM_ACTIONS.FETCH_FILM_SCHEME_ERROR_ACTION
    };
};

export const fetchFilmsSchemaSuccessAction = (payload: any) => {
    return {
        type: FILM_ACTIONS.FETCH_FILM_SCHEME_SUCCESS_ACTION,
        payload
    };
};
