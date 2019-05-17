import { createAction } from "../actions";
import { IListConfig } from "./reducer";
import { SETUP_LIST_CONFIG } from "./constants";

export const setupListConfigAction = (payload: IListConfig[]) => createAction<IListConfig[]>(SETUP_LIST_CONFIG, payload);
export const clearListConfigAction = () => createAction(SETUP_LIST_CONFIG);
