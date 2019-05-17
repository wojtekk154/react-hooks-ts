import { useEffect, useReducer, useRef } from "react";
import { IActionType } from "./interfaces";
import { MulticastChannel, runSaga, stdChannel } from "redux-saga";
import { call, effectTypes, take } from "redux-saga/effects";

interface IRefData<R> {
    state: R;
    pendingActions: IActionType<any>[];
    channel: MulticastChannel<any>;
}

function* selectAsyncSaga(selector: any, args: any[]) {
    const { state } = yield take("REACT_STATE_READY");
    return selector(state, ...args);
}

const useReducerAndSaga = <T>(reducer: any, stateParam: T, saga: any, options: object) => {
    const [state, stateDispatch] = useReducer(reducer, stateParam);
    const sagaEnv = useRef<IRefData<T>>({ state: stateParam, pendingActions: [], channel: stdChannel() });

    const dispatch = (action: IActionType<any>) => {
        stateDispatch(action);
        sagaEnv.current.pendingActions.push(action);
    };

    useEffect(() => {
        // @ts-ignore
        sagaEnv.current.state = state;
        const pendingActions = sagaEnv.current.pendingActions;

        if (pendingActions.length > 0) {
            sagaEnv.current.pendingActions = [];

            pendingActions.forEach((action: IActionType<any>) => sagaEnv.current.channel.put(action));
            sagaEnv.current.channel.put({ type: "REACT_STATE_READY", state });
        }
    });

    useEffect(() => {
        const task = runSaga({
            ...options,
            channel: sagaEnv.current.channel,
            dispatch,
            getState: () => {
            },
            effectMiddlewares: [
                (runEffect: any) => {
                    return (effect: any) => {
                        if (effect.type === effectTypes.SELECT) {
                            return runEffect(
                                call(
                                    selectAsyncSaga,
                                    effect.payload.selector,
                                    effect.payload.args
                                )
                            );
                        }

                        return runEffect(effect);
                    };
                }
            ]

        }, saga);

        return () => task.cancel();
    }, []);

    return [state, dispatch];
};

export default useReducerAndSaga;