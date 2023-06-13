import {put, call, select, takeEvery} from "redux-saga/effects"
import { requestCommentsError, setComments, PUT_ID, requestComments } from "../store/commentsReducer"
import { takeData, delay } from "../utils/utils";


function* fetchCommentsDataWorker() {
  try {
    const commentId = yield select(store => store.commentsReducer.commentId);
    yield put (requestComments(true));
    yield delay(500)
    const dataComments = yield call(takeData,`comments?postId=${commentId}`, '')
    yield put(setComments(dataComments))
  } catch (error) {
    yield put(requestCommentsError());
  }
}

export function* commentsWatcher() {
  yield takeEvery(PUT_ID, fetchCommentsDataWorker)
}
