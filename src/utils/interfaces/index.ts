export interface IActionType<T> {
    type: string;
    payload?: T;
}
