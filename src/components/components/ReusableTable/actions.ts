import { CLOSE_MENU_ACTION, CLOSE_MODAL_ACTION, OPEN_MENU_ACTION, OPEN_MODAL_ACTION } from "./constants";

export const openModalAction = (payload: any) => {
    console.log(payload);
    return {
        type: OPEN_MODAL_ACTION,
        payload,
    };
};

export const closeModalAction = () => {
    return {
        type: CLOSE_MODAL_ACTION,
    };
};

export const openMenuAction = (payload: any) => {
    return {
        type: OPEN_MENU_ACTION,
        payload,
    };
};

export const closeMenuAction = () => {
    return {
        type: CLOSE_MENU_ACTION,
    };
};
