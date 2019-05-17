import { IActionType } from "../../../utils/interfaces";
import { IResultsTable } from "../../../utils/interfaces/results-table";
import { CLOSE_MENU_ACTION, CLOSE_MODAL_ACTION, OPEN_MENU_ACTION, OPEN_MODAL_ACTION } from "./constants";

export const tableComponentInitState: IResultsTable = {
    item: null,
    menuAnchor: null,
    modalOpen: false,
    openMenu: false,
};

export const resultsTableReducer = (state: any = tableComponentInitState, action: IActionType<any>) => {
    switch (action.type) {
        case OPEN_MODAL_ACTION:
            return {
                ...state,
                modalOpen: true,
                item: action.payload,
            };
        case CLOSE_MENU_ACTION:
        case CLOSE_MODAL_ACTION:
            return { ...tableComponentInitState };
        case OPEN_MENU_ACTION:
            return {
                ...state,
                openMenu: true,
                menuAnchor: "itemMenu",
                item: action.payload,
            };
        default:
            return { ...state };
    }
};
