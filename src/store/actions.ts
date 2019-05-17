export interface IAction<P> {
    type: string,
    payload?: P
}

export const createAction = <P = object>(type: string, payload?: P): IAction<P> => ({
    type,
    payload
});
