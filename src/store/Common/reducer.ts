import { IAction } from "../actions";
import { CLEAR_LIST_CONFIG, SETUP_LIST_CONFIG } from "./constants";

export interface IListConfig {
    name: string;
    key: string;
}

export const initConfig: IListConfig[] = [];

export const configListReducer = (state: IListConfig[] = [], action: IAction<IListConfig[]>): IListConfig[] => {
    switch (action.type) {
        case SETUP_LIST_CONFIG:
            return [...action.payload as IListConfig[]];
        case CLEAR_LIST_CONFIG:
            return initConfig;
        default:
            return state;
    }
};
