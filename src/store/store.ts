import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./index";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const storeConfiguration = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default storeConfiguration;
