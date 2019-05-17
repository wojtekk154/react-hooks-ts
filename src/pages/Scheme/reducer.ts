import { IActionType } from "../../utils/interfaces";
import { FILM_ACTIONS } from "../../utils/constants";
import { ISchema } from "../../utils/interfaces/scheme";

export const schemeInitState: ISchema = {
    $schema: '',
    description: '',
    properties: {},
    required: [],
    title: '',
    type: ''
};

export const schemeReducer = (state: ISchema = schemeInitState, action: IActionType<ISchema>) => {
    switch (action.type) {
        case FILM_ACTIONS.FETCH_FILM_SCHEME_SUCCESS_ACTION:
            return { ...action.payload } as ISchema;
        case FILM_ACTIONS.FETCH_FILM_SCHEME_ERROR_ACTION:
        default:
            return { ...state } as ISchema;
    }
};
