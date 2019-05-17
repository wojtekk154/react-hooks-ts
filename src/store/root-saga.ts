/* tslint:disable:no-submodule-imports */
import { all, fork } from "redux-saga/effects";
import * as planetSaga from "./Planets/saga";
import * as filmSaga from "./Film/saga";

const rootSagaArray = [
    ...Object.values(planetSaga).map(fork),
    ...Object.values(filmSaga).map(fork)
];

export default function* rootSaga() {
    yield all(rootSagaArray);
}
