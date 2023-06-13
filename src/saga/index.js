import { all } from "redux-saga/effects"
import { commentsWatcher } from "./commetsSaga";
import { userWatcher } from "./userSaga";

export function* rootWatcher() {
    yield all([userWatcher(), commentsWatcher()])
}
